import { configureStore } from '@reduxjs/toolkit'
import counter from './reducers/counter'

const store2 = configureStore({
  reducer: {
    counter,
  },
})

export default store2
