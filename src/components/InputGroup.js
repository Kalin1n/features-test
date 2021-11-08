import { useState } from "react";
import { useDispatch } from "react-redux";

import { addAmount } from "../store/index";

const AddAmountInput = () => {
  const [inputValue, setInputValue] = useState(0);
  const dispatch = useDispatch();

  const changeValue = (event) => {
    setInputValue(event.target.value);
  };

  const submitValue = () => {
    dispatch(addAmount(inputValue));
  };

  return (
    <div>
      <input
        placeholder="Amount to add "
        value={inputValue}
        onChange={changeValue}
      />
      <button onClick={submitValue}>Add Amount</button>
    </div>
  );
};

export default AddAmountInput;
