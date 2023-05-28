import axios from "axios"
import { API_URL } from "../utils/constants"
import { TTest } from "../types"
import { testFetching, testFetchingError, testFetchingSuccess } from "./slices/tests"
import { setUUID } from "./slices/user"
import { AppDispatch } from "./store"
import { setCookie } from "../utils/cookies"

export type TNoAuthUserInfo = {
  first_name: string
  last_name: string
  patronymic?: string
  date_of_birth: string
}

export function sendNoAuthUserInfo(data: TNoAuthUserInfo) {
  return async (dispatch: AppDispatch) => {
    const response = await axios.post<{uuid: string}>(`${API_URL}/check_no_auth_user`, data)

    if (response.status === 200) {
      dispatch(setUUID(response.data.uuid))
      setCookie('uuid', response.data.uuid)
      return true
    } else {
      return false
    }
  };
}


export function getTest() {
  return async (dispatch: AppDispatch) => {
    dispatch(testFetching())
    const response = await axios.get<{data: TTest}>(`${API_URL}/get_test`)

    if (response.status === 200) {
      dispatch(testFetchingSuccess(response.data.data))
    } else {
      dispatch(testFetchingError(response.statusText))
    }
  };
}

export function sendTestResults(data: Array<Array<string>>, uuid: string) {
  return async (dispatch: AppDispatch) => {
    if (!uuid) return;
    const response = await axios.post<{uuid: string}>(`${API_URL}/access_test`, {
      user_id: uuid,
      answers: data.flat()
    })

    if (response.status === 201) {
      return true
    } else {
      return false
    }
  };
}