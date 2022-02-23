import { useState, useEffect } from 'react'
import store from '../../store'
import {
  counterIncrementedActionCreator,
  counterDecrementedActionCreator,
  asyncCounterResetActionCreator,
} from '../../store/reducers/counter'

export default function Counter() {
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
    store.dispatch(asyncCounterResetActionCreator())
  }

  return (
    <div>
      <h3> Counter Basic </h3>
      <p>Count is: {count}</p>
      <button onClick={handlePlus}> count + </button>
      <button onClick={handleMinus}> count - </button>
      <button onClick={handleReset}> reset count async </button>
    </div>
  )
}
