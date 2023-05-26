import React, { useState } from 'react'
import styles from './test.module.css'

import { Header } from '../../components/layout/header/header'
import { RadioInput } from '../../components/forms/inputs/radio-input'
import { Button } from '../../components/buttons/button'
import { useSelector } from '../../store/store-hooks'
import { LinkButton } from '../../components/buttons/link-button'
import clsx from 'clsx'

type TTestPageProps = {}

export const TestPage = (props: TTestPageProps) => {
  const { steps } = useSelector(store => store.tests);
  const [ currentStep, setCurrentStep ] = useState(0);

  const nextStep = () => {
    if (currentStep !== steps.length - 1) setCurrentStep((prev) => prev + 1)
  }


  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.container}>
        {
          steps.map((step, index) => (
            <div className={clsx(styles.window, { [styles.isActive]: index === currentStep })}>
              <span>Шаг { index + 1 } из { steps.length }</span>
              <RadioInput
                label={step.question}
                name={`question-${currentStep}`}
                options={step.answers.map((answer, index) => ({ value: `${index}`, label: answer }))}
              />
              <div className={styles.buttons}>
                {currentStep !== 0 ? <span onClick={() => setCurrentStep((prev) => prev - 1)}>Назад</span> : null}
                {
                  currentStep !== steps.length - 1 ? <Button onClick={nextStep}>Далее</Button> : <LinkButton to='/feed'>Отправить</LinkButton>
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
