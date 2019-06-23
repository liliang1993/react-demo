import { call, put, take, fork, all } from 'redux-saga/effects'
import { GET_INFO } from './actionTypes'
import { saveInfo } from './action'
import { getUserInfo } from '../apis/index'

function* yieldInfo() {
  // const info = yield call(fetch)
  console.log('111')
  const info = yield call(getUserInfo)
  yield put(saveInfo(info))
}

export function* wacthYieldInfo() {
  const a = yield take(GET_INFO)
  yield fork(yieldInfo)
}

export function* rootSaga() {
  yield all([wacthYieldInfo()])
}
