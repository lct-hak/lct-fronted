import { createSlice } from "@reduxjs/toolkit";
import { TTest } from "../../types";

export type TTestSlice = {
  steps: TTest;
};

const initialState: TTestSlice = {
  steps: [
      {
        question: "Какие телепередачи вы смотрите?",
        answers: [
          "Выпуски новостей, документальные фильмы, интеллектуальные телевикторины",
          "Различные шоу (музыкальные, танцевальные, про отношения и пр.)",
          "Спортивные трансляции, передачи про здоровье",
          "Интервью с интересными успешными людьми",
        ],
      },
      {
        question: "Выберите вариант 2",
        answers: [
          "1. 2",
          "2. 3",
          "3. Два",
          "4. Вариант 2",
        ],
      },
      {
        question: "Сколько лет ёжику",
        answers: [
          "Да",
        ],
      },
    ],
};

const testSlice = createSlice({
  name: "tests",
  initialState,
  reducers: {
    printAll() {},
  },
});

export const { printAll } = testSlice.actions;
export default testSlice.reducer;
