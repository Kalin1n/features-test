import { Provider } from "react-redux";
import "./App.css";

import Counter from "./components/index";
import AddAmountInput from "./components/InputGroup";
import AddAfterFiveSeconds from "./components/AddAfterFiveSeconds";

import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <AddAmountInput />
        <AddAfterFiveSeconds />
      </div>
    </Provider>
  );
}

export default App;
