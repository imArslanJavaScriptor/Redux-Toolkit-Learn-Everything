import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount, reset } from "./redux/features/counterSlice"

const App = () => {
  const dispatch = useDispatch() // To Process the Value
  const count = useSelector((state) => state.counter.value) // To The Value 
  console.log(count)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Iincrement</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>Increment By Amount</button>
    </div>
  )
}

export default App