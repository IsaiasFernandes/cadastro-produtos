import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar";
import Route from "./routes";

import "popper.js";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.min";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <Route />
      </div>
    </BrowserRouter>
  );
}

export default App;
