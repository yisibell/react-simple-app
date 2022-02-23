import { call, put, takeEvery } from 'redux-saga/effects'

const mockFetchApi = (data = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 3000)
  })
}

// 异步的业务逻辑
function* resetCountAsync(action) {
  console.log(action)

  try {
    yield put({ type: 'counter/reseting', value: true })
    console.log('count is reseting.')
    const count = yield call(mockFetchApi)
    console.log('yield count: ', count)
    yield put({ type: 'counter/reset', count })
  } finally {
    yield put({ type: 'counter/reseting', value: false })
    console.log('count reset end.')
  }
}

const counterResetAsyncActionCreator = (payload) => ({
  type: 'counter/reset--async',
  payload,
})

// 创建监视 saga，UI 层调用的 action 就是该处声明的 action
function* resetCountSaga() {
  yield takeEvery(counterResetAsyncActionCreator().type, resetCountAsync)
}

export { counterResetAsyncActionCreator, resetCountSaga }
