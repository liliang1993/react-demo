import { GET_INFO, SAVE_INFO } from './actionTypes'
import { InfoAction } from './action'

const info = (state: object = {}, action: InfoAction): object => {
  switch (action.type) {
    case GET_INFO:
      return state
    case SAVE_INFO:
      return {
        ...state,
        ...action.info
      }
    default:
      return state
  }
}

export { info }
