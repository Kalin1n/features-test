import { asyncAddOne } from "../store/index";
import { useDispatch } from "react-redux";

const AddAfterFiveSeconds = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(asyncAddOne());
  };

  return (
    <div>
      <button onClick={clickHandler}>Add 1 after 2 seconds </button>
    </div>
  );
};

export default AddAfterFiveSeconds;
