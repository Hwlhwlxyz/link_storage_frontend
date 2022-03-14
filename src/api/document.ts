import { OneDocument } from './../models/OneDocument';
import { baseApiUrl, baseUrl } from './../constants';
import axios from "axios";

const documentUrl = baseApiUrl+'/document'

export function getDocument(userid: any) {
    // return Promise.resolve([
    //     {"description":"ddd", "url":"https://www.example.com"},
    //     {"description":"google", "url":"https://www.google.com"}
    // ]) 
    return axios.get(documentUrl+'/all',{
        params: {
          userid: userid
        }
      }).then(response=>{
        return response.data;
    });
}

export function createDocument(userid: any, document: any) {
    document['userid'] = (userid);
    console.log(document)
    return axios.post(documentUrl+'/', {
        "userid": document.userid,
        "title": document.title,
        "url": document.url,
        "description": document.description
      }, {headers: {
        'content-type': 'application/json'
      }
    }).then(response=>{
        return response;
    })
}