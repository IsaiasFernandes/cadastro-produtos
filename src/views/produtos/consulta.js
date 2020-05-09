import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import produtoService from "../../app/produtoService";

class ConsultaProdutos extends Component {
  state = {
    produtos: [],
  };

  constructor() {
    super();
    this.service = new produtoService();
  }

  componentDidMount() {
    const produtos = this.service.obterProdutos();
    this.setState({ produtos });
  }

  preparaEditar = (sku) => {
    console.log(sku);

    this.props.history.push(`/cadastro/${sku}`);
  };

  deletar = (sku) => {
    const produtos = this.service.deletar(sku);
    this.setState({ produtos });
  };
  render() {
    return (
      <div className="card">
        <div className="card-header">Consulta Produtos</div>
        <div className="card-body table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Nome: </th>
                <th>SKU: </th>
                <th>Preço: </th>
                <th>Fornecedor: </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.produtos.map((produto, index) => {
                return (
                  <tr key={index}>
                    <th>{produto.nome}</th>
                    <th>{produto.sku}</th>
                    <th>{produto.preco}</th>
                    <th>{produto.fornecedor}</th>
                    <th>
                      <button
                        className="btn btn-primary mr-1"
                        onClick={() => this.preparaEditar(produto.sku)}
                      >
                        Editar
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.deletar(produto.sku)}
                      >
                        Remover
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withRouter(ConsultaProdutos);
