import axios from "axios";
import { baseApiUrl, baseUrl } from "../constants";
import { getLoginUserId, getToken, getTokenFromSession } from "./auth";
import { axiosInstance } from "./utility/axiosInstance";

const userUrl = baseApiUrl + '/user'

export function signup(username: string, email: string, password: string) {
  return axiosInstance.post(userUrl, {
    // username: 'test',
    // password: 'password'
    username: username,
    email: email,
    password: password
  })
}

export function getById(userid: number) {
  const token = JSON.parse(getTokenFromSession());
  console.log(token)
  // const config = {
  //   headers: { Authorization: `Bearer ${token['access_token']}` }
  // };
  return axiosInstance.get(
    userUrl + '/userid/' + userid,
    {
      headers: {
        Authorization: `Bearer ${token['access_token']}`,
        'content-type': 'application/json'
      }
    }
  )
}

export function editUser(email: string, password: string) {
  const token = JSON.parse(getTokenFromSession());
  const userId = getLoginUserId();

return axiosInstance.post(
  userUrl + '/edit',
  {
    id: userId,
    "email": email,
    // "username": username,
    "password": password,
},
  {
    headers: {
      Authorization: `Bearer ${token['access_token']}`,
      'content-type': 'application/json'
    }
  }
)
}