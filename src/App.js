import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";


import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import AnimatedRoutes from "./AnimatedRoutes";

function App() {

  return (
    <Provider store={store}>
      <Router>
        <AnimatedRoutes />
      </Router>
    </Provider>
  );
}

export default App;
