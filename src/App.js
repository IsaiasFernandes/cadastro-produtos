import React from "react";

import NavBar from "./components/navbar";
import Route from "./routes";

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <Route />
      </div>
    </>
  );
}

export default App;
