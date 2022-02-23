import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import counter from './reducers/counter'
import rootSaga from './sagas'

const rootReducer = combineReducers({
  counter,
})

const sagaMiddleware = createSagaMiddleware()

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store
