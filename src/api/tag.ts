import { baseUrl, baseApiUrl } from '../constants';
import { axiosInstance } from "./utility/axiosInstance";


const tagUrl = baseApiUrl + '/tag'

export function getTags(userid: number, documentId: number) {
    return axiosInstance.get(tagUrl+'/document', {
        params: {
            userid: userid,
            document_id: documentId
        }
    });
}

export function updateTags(userid: number, documentId: number, nameList:any[]) {
    return axiosInstance.post(tagUrl+'/updatelist', {
            userid: userid,
            document_id: documentId,
            name_list: nameList
    });
}

