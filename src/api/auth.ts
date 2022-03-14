import { baseUrl } from '../constants';
import axios from "axios";


export const userSessionKey = "user";

export function getToken(username: string, password: string) {
    return axios.post(baseUrl+'/token',{
      // username: 'test',
      // password: 'password'
      username: username,
      password: password
    }).then(response=>{
      console.log(response)
      localStorage.setItem(userSessionKey, JSON.stringify(response.data));
      console.log(getTokenFromSession())
      return response;
    })
}

export function getTokenFromSession() {
  return localStorage.getItem(userSessionKey) || '';
}

export function loginStatus() {
  let token = getTokenFromSession();
  if (token!=null && token.length>0) {
    return true;
  }
  else {
    return false;
  }
  
}

export function getLoginUserId() {
  let token = getTokenFromSession();
  
  if (token!=null && token.length>0) {
    let jsonValue = JSON.parse(token);
    return jsonValue['id'];
  }
  else {
    return null;
  }
  
}

export function login(username: string, password: string) {
  return getToken(username, password).then(response=>{
    console.log(response)
    if (response.status===200) {
      return true;
    }
    else {
      return false;
    }
  }).catch(err=>{
    console.log(err);
    return false;
  })
}

export function logout() {
  localStorage.setItem(userSessionKey, '');
}

