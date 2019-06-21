import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_INFO } from './actionTypes'
import { saveInfo } from './action'
import { getUserInfo } from '../apis/index'

function* yieldInfo() {
  // const info = yield call(fetch)
  const info = yield call(getUserInfo)
  yield put(saveInfo(info))
}

export function* wacthYieldInfo() {
  yield takeEvery(GET_INFO, yieldInfo)
}
