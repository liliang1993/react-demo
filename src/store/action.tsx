import { GET_INFO, SAVE_INFO } from './actionTypes'
import { IPayload } from '../types'
import { userInfo } from 'os'

interface ISaveInfo {
  type: string
  info: object
}

export const saveInfo = (info: object): ISaveInfo => {
  return {
    type: SAVE_INFO,
    info
  }
}

interface IGetInfo {
  type: string
}

export const getInfo = (info: object): IGetInfo => {
  return {
    type: GET_INFO
  }
}

export type InfoAction = IGetInfo | ISaveInfo
