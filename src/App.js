import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store";

import Error404 from "./containers/errors/Error404";
import Home from "./containers/pages/Home";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "containers/pages/About";
import Destination from "containers/pages/Destination";
import Tour from "containers/pages/Tour";
import Blog from "containers/pages/Blog";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Error404 />} />

          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Tour" element={<Tour />} />
          <Route path="/Blog" element={<Blog />} />

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
