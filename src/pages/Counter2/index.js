import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  resetCountAsync,
} from '../../store2/reducers/counter'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const handleReset = async () => {
    // const res = await dispatch(resetCountAsync())
    const res = await dispatch(resetCountAsync()).unwrap()

    console.log(res)
  }

  return (
    <div>
      <h3> Counter Version 2 </h3>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button aria-label="Decrement value" onClick={handleReset}>
          Reset Async
        </button>
      </div>
    </div>
  )
}
