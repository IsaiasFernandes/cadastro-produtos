import React, { Component } from "react";

import produtoService from "../../app/produtoService";
import Alerta from "../../components/alerts";

const estadoIncial = {
  nome: "",
  sku: "",
  descricao: "",
  preco: 0,
  fornecedor: "",
  sucesso: false,
};

export default class CadastroProduto extends Component {
  state = estadoIncial;

  constructor() {
    super();
    this.service = new produtoService();
  }

  onChange = (e) => {
    const valor = e.target.value;
    const nomeDoCampo = e.target.name;
    this.setState({
      [nomeDoCampo]: valor,
    });
  };

  onSubmit = (e) => {
    const produto = {
      nome: this.state.nome,
      sku: this.state.sku,
      descricao: this.state.descricao,
      preco: this.state.preco,
      fornecedor: this.state.fornecedor,
    };
    this.service.salvar(produto);
    this.limpaCampos();
    this.setState({ sucesso: true });
  };

  limpaCampos = () => this.setState(estadoIncial);

  render() {
    return (
      <div className="card">
        <div className="card-header">Cadastro de Produtos</div>
        <div className="card-body">
          {this.state.sucesso && (
            <Alerta mensagem="Cadastro realizado com sucesso!" />
          )}
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>
                  Nome: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Digite nome"
                  name="nome"
                  value={this.state.nome}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <label>
                SKU: <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite SKU"
                name="sku"
                value={this.state.sku}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>Descrição:</label>
                <textarea
                  className="form-control"
                  name="descricao"
                  placeholder="Descrição do produto"
                  value={this.state.descricao}
                  onChange={this.onChange}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>
                  Preço: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="preco"
                  placeholder="Digite o preço"
                  value={this.state.preco}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>
                  Fornecedor: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Digite o fornecedor"
                  name="fornecedor"
                  value={this.state.fornecedor}
                  onChange={this.onChange}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-1">
              <button className="btn btn-success" onClick={this.onSubmit}>
                Salvar
              </button>
            </div>
            <div className="col-md-1">
              <button className="btn btn-primary" onClick={this.limpaCampos}>
                Limpar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
