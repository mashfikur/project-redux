import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";

import { useAppDispatch, useAppSelector } from "./redux/hooks";

const App = () => {
  const { count } = useAppSelector((state) => state.counter);

  const dispatch = useAppDispatch();

  return (
    <div>
      {/* counter */}
      <div className="h-screen w-full flex items-center justify-center  ">
        <div className="flex items-center gap-5">
          <button
            onClick={() => dispatch(decrement())}
            className="px-6 py-3 rounded-xl text-xl text-white border-none bg-red-400 "
          >
            Decrement
          </button>
          <p>{count}</p>
          <button
            onClick={() => dispatch(increment())}
            className="px-6 py-3 rounded-xl text-xl text-white border-none bg-green-600 "
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(incrementByValue(10))}
            className="px-6 py-3 rounded-xl text-xl text-white border-none bg-green-600 "
          >
            Increment by 10
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
