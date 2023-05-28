import { API_URL } from "../constants"

export type TNoAuthUserInfo = {
  first_name: string
  last_name: string
  patronymic?: string
  date_of_birth: string
}

export const sendNoAuthUserInfo = async (data: TNoAuthUserInfo) => {
  console.log('data: ', data);
  fetch(`${API_URL}/check_no_auth_user`,
    {
      method: 'POST',
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        // 'Accept': '*/*'
      },
      body: JSON.stringify(data)
    }
  )
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error('err', err))
}