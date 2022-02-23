import { all } from 'redux-saga/effects'
import { resetCountSaga } from './counter'

export default function* rootSaga() {
  yield all([resetCountSaga()])
}
