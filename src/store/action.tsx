import { GET_INFO, SAVE_INFO } from './actionTypes'
import { IPayload } from '../types'
import { userInfo } from 'os'

export interface ISaveInfo {
  type: string
  info: object
}

export const saveInfo = userInfo => {
  return
}

export interface IGETInfo {
  type: string
}
