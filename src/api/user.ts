import axios from "axios";
import { baseApiUrl, baseUrl } from "../constants";
import { axiosInstance } from "./utility/axiosInstance";

const userUrl = baseApiUrl+'/user'

export function signup(username: string, email: string, password: string) {
    return axiosInstance.post(userUrl,{
      // username: 'test',
      // password: 'password'
      username: username,
      email: email,
      password: password
    })
}