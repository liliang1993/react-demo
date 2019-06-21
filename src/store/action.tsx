import { GET_INFO, SAVE_INFO } from './actionTypes'
// import { IPayload } from '../types'
// import { userInfo } from 'os'

export interface ISaveInfo {
  type: SAVE_INFO
  info: object
}

export const saveInfo = (info: object): ISaveInfo => {
  return {
    type: SAVE_INFO,
    info
  }
}

export interface IGetInfo {
  type: GET_INFO
}

export const getInfo = () => {
  return {
    type: GET_INFO
  }
}

export type InfoAction = IGetInfo | ISaveInfo
