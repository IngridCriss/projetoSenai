function adicionarItem() {
    //Obter valores dos campos digitados
    var nome = document.getElementById("nome").value;
    var valorE = document.getElementById("valorE").value;
    var valorS = document.getElementById("valorS").value;
    var quantidade = document.getElementById("quantidade").value;

    //Validar se todas existem
    if(!nome || !valorE || !valorS || !quantidade) {
        alert("Preencha os campos!!");
        return;
    }

    //Criar a tabela, mais precisamente uma linha da tabela
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    var novaLinha = tabela.insertRow(tabela.rows.length);
    var celulaNome = novaLinha.insertCell(0);
    var celulaValorE = novaLinha.insertCell(1);
    var celulaValorS = novaLinha.insertCell(2);
    var celulaQuantidade = novaLinha.insertCell(3);

    //Colocar valores nas células
    //celulaNome.textContent = nome


    celulaNome.innerHTML = nome;
    celulaValorE.innerHTML = valorE;
    celulaValorS.innerHTML = valorS;
    celulaQuantidade.innerHTML = quantidade;

    document.getElementById("nome").value = "";
    document.getElementById("valorE").value = "";
    document.getElementById("valorS").value = "";
    document.getElementById("quantidade").value = "";

}

function removerItem() {
    var nomeParaRemover = document.getElementById("nomeRemover").value;
    if (!nomeParaRemover) {
      alert("Digite um nome para remover.");
      return;
    }

    var tabela = document
      .getElementById("tabela")
      .getElementsByTagName("tbody")[0];
    var linhas = tabela.getElementsByTagName("tr");
  
    for (var i = 0; i < linhas.length; i++) {
      var celulaNome = linhas[i].getElementsByTagName("td")[0];
  
      if (celulaNome && celulaNome.innerHTML === nomeParaRemover) {
        tabela.deleteRow(i);
  
        return;
      }
    }
  
    alert("Nome não encontrado na tabela.");
}

function exportarParaExcel() {
    var tabela = document.getElementById("tabela");
    var nomeArquivo = "tabela_produtos.xlsx";
    var wb = XLSX.utils.table_to_book(tabela, {sheet: "Tabela de produtos"});
    XLSX.writeFile(wb, nomeArquivo);
}