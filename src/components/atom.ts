import {atom} from 'recoil'
import { OneDocument } from '../models/OneDocument';



export const recoilTestItem = atom<any>({
  key: 'userId',
  default: -1,
  effects: [
    () => {
      console.log("effects1")
      return () => {};
    },
    () => { console.log("effects2") },
  ],
})

export const documentEditItem = atom<any>({
  key: 'documentEditItem',
  default: new OneDocument(),
  effects: [
    () => {
      console.log("effects1")
      return () => {};
    },
    () => { console.log("effects2") },
  ],
})

