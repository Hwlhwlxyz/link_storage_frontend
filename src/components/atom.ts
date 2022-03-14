import {atom} from 'recoil'



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

