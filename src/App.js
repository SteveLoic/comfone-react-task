import "./App.css";
import "bulma";

import Dashboard from "./components/dashboard.component";

import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
