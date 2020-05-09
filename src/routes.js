import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./views/home";
import Cadastro from "./views/produtos/cadastro";
import Consulta from "./views/produtos/consulta";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cadastro/:sku?" component={Cadastro} />
      <Route path="/consulta" component={Consulta} />
    </Switch>
  );
}
