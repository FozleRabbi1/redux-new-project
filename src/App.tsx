import {
  dicrementStyle,
  incrimentByValueStyle,
  incrimentStyle,
} from "./styleVariable/counterButton";
import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  // const count = useSelector((state) => state.counter.count);  //==========>>> এই ভাবে দিলেউ হবে
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex justify-between w-[200px]">
        <button
          onClick={() => dispatch(increment())}
          className={incrimentStyle}
        >
          Increment
        </button>
        <h2 className="text-4xl mx-4">{count}</h2>
        <button
          onClick={() => dispatch(decrement())}
          className={dicrementStyle}
        >
          Dicrement
        </button>
        <button
          // onClick={() => dispatch(incrementByValue(5))}
          onClick={() => dispatch(incrementByValue({ value: 5 }))}
          className={incrimentByValueStyle}
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
}

export default App;
