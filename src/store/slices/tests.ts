import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TTest } from "../../types";

export type TTestSlice = {
  isLoading: boolean;
  error: string;
  test: TTest | null;
  answers: Array<Array<string>>
};

const initialState: TTestSlice = {
  isLoading: false,
  error: '',
  test: {
    test_pages: [
      {
        id: 1,
        test_questions: [
          {
            id: 1,
            question: "Вопрос 1",
            test_replies: [
              {
                id: 1,
                reply: "Ответ 1",
              },
              {
                id: 2,
                reply: "Ответ 2",
              }
            ]
          },
          {
            id: 2,
            question: "Вопрос 2",
            test_replies: [
              {
                id: 3,
                reply: "Ответ 3",
              },
              {
                id: 4,
                reply: "Ответ 4",
              }
            ]
          },
          {
            id: 3,
            question: "Вопрос 3",
            test_replies: [
              {
                id: 5,
                reply: "Ответ 5",
              },
              {
                id: 6,
                reply: "Ответ 6",
              }
            ]
          }
        ]
      },
      {
        id: 2,
        test_questions: [
          {
            id: 4,
            question: "Вопрос 45555",
            test_replies: [
              {
                id: 7,
                reply: "Ответ 15555",
              },
              {
                id: 8,
                reply: "Ответ 2",
              }
            ]
          },
          {
            id: 5,
            question: "Вопрос 2",
            test_replies: [
              {
                id: 9,
                reply: "Ответ 3",
              },
              {
                id: 10,
                reply: "Ответ 4",
              }
            ]
          },
          {
            id: 6,
            question: "Вопрос 3",
            test_replies: [
              {
                id: 11,
                reply: "Ответ 5",
              },
              {
                id: 12,
                reply: "Ответ 6",
              }
            ]
          }
        ]
      }
    ]
  },
  answers: []
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    testFetching(state) {
      state.isLoading = true
      state.error = ''
    },
    testFetchingSuccess(state, action: PayloadAction<TTest>) {
      state.isLoading = false
      state.test = action.payload
      state.error = ''
    },
    testFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
      state.test = null
    },
    addAnswers(state, action: PayloadAction<Array<string>>) {
      state.answers.push(action.payload)
    },
    removeAnswers(state, action: PayloadAction<number>) {

    },
  },
});

export const { testFetching, testFetchingSuccess, testFetchingError, addAnswers, removeAnswers } = testSlice.actions;
export default testSlice.reducer;
