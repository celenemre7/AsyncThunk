import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/counterSlice'

function Counter() {    

    const {value} = useSelector((state) => state.counter)

    const  dispatch = useDispatch()
  return (
    <div>

        {value}
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <hr />

        <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  )
}

export default Counter