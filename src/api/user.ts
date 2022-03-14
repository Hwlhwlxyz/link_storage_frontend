import axios from "axios";
import { baseApiUrl, baseUrl } from "../constants";

const userUrl = baseApiUrl+'/user'

export function signup(username: string, email: string, password: string) {
    return axios.post(userUrl,{
      // username: 'test',
      // password: 'password'
      username: username,
      email: email,
      password: password
    })
}