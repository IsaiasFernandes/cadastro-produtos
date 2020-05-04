import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./views/home";
import Cadastro from "./views/produtos/cadastro";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cadastro" component={Cadastro} />
      </Switch>
    </BrowserRouter>
  );
}
