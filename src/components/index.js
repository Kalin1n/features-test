// import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "../store/index";

const Counter = () => {
  const value = useSelector((state) => state.counter.value);
  const counterStore = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  // useEffect(() => {
  // }, []);

  console.log("counterStore : ", counterStore);

  const addClickHandler = () => {
    dispatch(increment());
  };

  const decrementClickHandler = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Value of counter = {value}</p>
      <div>
        <button onClick={addClickHandler}>+ 1</button>
        <button onClick={decrementClickHandler}>- 1</button>
      </div>
    </div>
  );
};

export default Counter;
