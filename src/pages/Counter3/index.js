import { useState, useEffect } from 'react'
import store from '../../store3'
import {
  counterIncrementedActionCreator,
  counterDecrementedActionCreator,
} from '../../store3/reducers/counter'
import { counterResetAsyncActionCreator } from '../../store3/sagas/counter'

export default function Home() {
  const [count, setCount] = useState(store.getState().counter.value)

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCount(store.getState().counter.value)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const handlePlus = () => {
    store.dispatch(counterIncrementedActionCreator())
  }

  const handleMinus = () => {
    store.dispatch(counterDecrementedActionCreator())
  }

  const handleReset = () => {
    store.dispatch(counterResetAsyncActionCreator())
  }

  return (
    <div>
      <h3>Counter Version 3</h3>
      <p>Count is: {count}</p>
      <button onClick={handlePlus}> count + </button>
      <button onClick={handleMinus}> count - </button>
      <button onClick={handleReset}> reset count async </button>
    </div>
  )
}
