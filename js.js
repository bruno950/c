
function validarProduto(idNomeProduto, idCodProduto, idQtidadeProduto) {
  let nome = document.getElementById(idNomeProduto).value;
  let codigo = document.getElementById(idCodProduto).value;
  let qtidade = document.getElementById(idQtidadeProduto).value;

  if (nome == "")
      alert("Nome do produto não pode estar em branco. Favor preenchê-lo!");
  else if (codigo == "")
      alert("Código do produto não pode estar em branco. Favor preenchê-lo!");
  else cadastrarProduto(nome, codigo, parseInt(qtidade));
}

function cadastrarProduto(produto, codig, qtidade) {
  let novoProduto = {nome:produto, codigo:codig, quantidade:qtidade};

  if (typeof(Storage) !== "undefined") {
      let produtos = localStorage.getItem("produtos");
      if (produtos == null) produtos = []; // Nenhum produto ainda foi cadastrado
      else produtos = JSON.parse(produtos);
      produtos.push(novoProduto); // Adiciona um novo produto
      localStorage.setItem("produtos",JSON.stringify(produtos))
      alert("Foram cadastradas com sucesso "+qtidade+" unidades do produto "+ produto+"!");
      atualizarTotalEstoque("totalEstoque");
      location.reload();
  } 
  else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}
function listarEstoque() {
  if (typeof(Storage) !== "undefined") {
      let produtos = localStorage.getItem("produtos");
      document.write("<h1>Estoque:</h1>")
      if (produtos == null)
          document.write("<h3>Ainda não há nenhum item no estoque</h3>");
      else {
          produtos = JSON.parse(produtos);
          produtos.forEach(produto => {
              document.write('<div class="card" style="width: 18rem;">');
              document.write('<img src="" class="card-img-top" alt="..."></img>')
              document.write('<div class="card-body">');
              document.write('<h5 class="card-title">'+produto.nome+'</h5>')
              document.write('<p>'+produto.codigo+'</p>');
              document.write('<a href="#" class="btn btn-primary">Adicionar ao carrinho</a>')
              document.write("  </div>");
              document.write("  </div>");
          });
      }
  } 
  else alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!");    
}