import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { decrement, decrementByAmount, increment, incrementByAmount, resetCounter } from "./redux/features/counterSlice";

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const [amount, setAmount] = useState(10);
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="min-w-75 p-2 bg-gray-800 text-black rounded-lg">
        <h2 className="text-white mb-2 text-center text-2xl font-medium">
          {counter}
        </h2>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <div className="flex gap-4 w-full justify-center">
          <button onClick={() => dispatch(increment())} className="btn">
            Increment
          </button>
          <button onClick={() => dispatch(decrement())} className="btn">
            Decrement
          </button>
           <button onClick={() => dispatch(resetCounter())} className="btn">
            Reset Counter
          </button>
          <button
            onClick={() => dispatch(incrementByAmount(amount))}
            className="btn"
          >
            Increment By {amount}
          </button>
          <button
            onClick={() => dispatch(decrementByAmount(amount))}
            className="btn"
          >
            Decrement By {amount}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
