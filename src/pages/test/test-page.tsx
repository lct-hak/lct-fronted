import React, { FormEvent, useEffect, useState } from "react";
import styles from "./test.module.css";

import { Header } from "../../components/layout/header/header";
import { RadioInput } from "../../components/forms/inputs/radio-input";
import { Button } from "../../components/buttons/button";
import { useDispatch, useSelector } from "../../store/store-hooks";
import clsx from "clsx";
import { Loader } from "../../components/ui/loader";
import { getTest, sendTestResults } from "../../store/http";
import { addAnswers } from "../../store/slices/tests";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../utils/cookies";
import { setUUID } from "../../store/slices/user";

type TTestPageProps = {};

export const TestPage = (props: TTestPageProps) => {
  const { isLoading, test, answers } = useSelector((store) => store.test);
  const { uuid } = useSelector((store) => store.user);
  const [currentStep, setCurrentStep] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nextStep = () => {
    if (test && currentStep !== test.test_pages.length - 1)
      setCurrentStep((prev) => prev + 1);
  };

  const submitStep = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!test) return;

    const target = event.target as typeof event.target & {
      [key: string]: { value: string };
    };

    const questions_ids = test.test_pages[currentStep].test_questions.map(
      (question) => question.id
    );

    const data: Array<string> = [];

    questions_ids.forEach((id) => data.push(target[`question_${id}`]?.value));

    await dispatch(addAnswers(data))  
    
    if (currentStep !== test.test_pages.length - 1) {
      nextStep()
    } else {
      if (!uuid) {
        const cookieUuid = getCookie('uuid');
        if (cookieUuid) {
          dispatch(setUUID(cookieUuid))
        } else {
          return;
        }
      }

      const result = await dispatch(sendTestResults(answers, uuid));
      console.log('result: ', result);
      if (result) navigate('/feed')
    } 
  };

  useEffect(() => {
    dispatch(getTest());
  }, [dispatch]);

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.container}>
        {isLoading ? (
          <Loader />
        ) : test ? (
          test.test_pages.map((page, index) => (
            <form
              key={page.id}
              className={clsx(styles.window, {
                [styles.isActive]: index === currentStep,
              })}
              onSubmit={submitStep}
            >
              <span>
                Шаг {index + 1} из {test.test_pages.length}
              </span>
              {page.test_questions.map((question) => (
                <RadioInput
                  key={question.id}
                  label={question.question}
                  name={`question_${question.id}`}
                  options={question.test_replies.map((answer) => ({
                    value: `${answer.id}`,
                    label: answer.reply,
                  }))}
                />
              ))}
              <div className={styles.buttons}>
                {currentStep !== 0 ? (
                  <span onClick={() => setCurrentStep((prev) => prev - 1)}>
                    Назад
                  </span>
                ) : null}
                <Button type='submit'>
                  {currentStep !== test.test_pages.length - 1
                    ? "Далее"
                    : "Отправить"}
                </Button>
              </div>
            </form>
          ))
        ) : (
          <p>Что-то пошло не так</p>
        )}
      </div>
    </div>
  );
};
