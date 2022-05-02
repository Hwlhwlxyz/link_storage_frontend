import { OneDocument } from './../models/OneDocument';
import { baseApiUrl, baseUrl } from './../constants';
import axios from "axios";

import { axiosInstance } from './utility/axiosInstance';

const documentUrl = baseApiUrl + '/document'

export function getDocument(userid: any) {
  // return Promise.resolve([
  //     {"description":"ddd", "url":"https://www.example.com"},
  //     {"description":"google", "url":"https://www.google.com"}
  // ]) 
  return axiosInstance.get(documentUrl + '/all', {
    params: {
      userid: userid
    }
  }).then(response => {
    return response.data;
  });
}

export function createDocument(userid: any, document: any) {
  document['userid'] = (userid);
  console.log(document)
  return axiosInstance.post(documentUrl + '/', {
    "userid": document.userid,
    "id": document.id,
    "title": document.title,
    "url": document.url,
    "description": document.description
  }, {
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => {
    return response;
  })
}

export function updateDocument(userid: any, document: any) {
  document['userid'] = (userid);
  console.log(document)
  return axiosInstance.patch(documentUrl + '/', {
    "userid": document.userid,
    "id": document.id,
    "title": document.title,
    "url": document.url,
    "description": document.description
  }, {
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => {
    return response;
  })
}


export function deleteDocument(documentId: any) {
  return axiosInstance.delete(documentUrl + '/'+documentId)
  .then(response=>{
    return response;
  })
}