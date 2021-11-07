import { Provider } from "react-redux";
import "./App.css";

import Counter from "./components/index";

import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
