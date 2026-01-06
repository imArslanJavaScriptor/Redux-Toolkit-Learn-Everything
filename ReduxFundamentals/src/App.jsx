import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount, reset } from "./redux/features/counterSlice"
import { useState } from "react"

const App = () => {
  const dispatch = useDispatch() // To Process the Value
  const count = useSelector((state) => state.counter.value) // To The Value 
  console.log(count)
  const [num, setNum] = useState(0)
  return (
    <div className="container">
      <h1>{count}</h1>
      <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
      <button onClick={() => dispatch(increment())}>Iincrement</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(incrementByAmount(Number(num)))}>Increment By Amount</button>
    </div>
  )
}

export default App