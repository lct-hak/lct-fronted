import React, { useState } from 'react'
import styles from './test.module.css'

import { Header } from '../../components/layout/header/header'
import { RadioInput } from '../../components/forms/inputs/radio-input'
import { Button } from '../../components/buttons/button'
import { useSelector } from '../../store/store-hooks'

type TTestPageProps = {}

export const TestPage = (props: TTestPageProps) => {
  const { steps } = useSelector(store => store.tests);
  const [ step, setStep ] = useState(0);

  const nextStep = () => {
    if (step !== steps.length - 1) setStep((prev) => prev + 1)
  }


  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.container}>
        <div className={styles.window}>
          <span>Шаг {step + 1} из { steps.length }</span>
          <RadioInput
            label={steps[step].question}
            name='question'
            options={steps[step].answers.map((answer, index) => ({ value: `${index}`, label: answer }))}
          />
          <Button onClick={nextStep}>{
            step !== steps.length - 1 ? 'Далее' : 'Отправить'
          }</Button>
        </div>
      </div>
    </div>
  )
}
