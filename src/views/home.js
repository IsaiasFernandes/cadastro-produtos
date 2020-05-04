import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="jumbotron">
      <h1 className="display-3">Bem vindo!</h1>
      <p className="lead">
        Este é seu sistema, utilize a bara de navegação para acessar as páginas
      </p>
      <hr className="my-4" />
      <p className="lead">
        <Link to="/cadastro" className="btn btn-primary btn-lg" role="button">
          Cadastrar
        </Link>
      </p>
    </div>
  );
}
