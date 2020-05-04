const Produtos = "_Produtos";

export default class ProdutoService {
  salvar = (produto) => {
    let produtos = localStorage.getItem(Produtos);

    if (!produtos) {
      produtos = [];
    } else {
      produtos = JSON.parse(produtos);
    }

    produtos.push(produto);

    localStorage.setItem(Produtos, JSON.stringify(produtos));
  };
}
