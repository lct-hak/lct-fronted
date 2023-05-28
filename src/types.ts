// export type TTestQuestion = {
//   id: number,
//   question: string
//   test_replies: Array<{
//     id: number,
//     reply: string
//   }>
// }

// export type TTest = Array<TTestQuestion>


export type TTest = {
  test_pages: Array<{
    id: number,
    test_questions: Array<{
      id: number,
      question: string,
      test_replies: Array<{
        id: number,
        reply: string
      }>
    }>
  }>
}