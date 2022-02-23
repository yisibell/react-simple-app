import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import counter from './reducers/counter'

const rootReducer = combineReducers({
  counter,
})

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store
