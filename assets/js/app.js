var logado = false;
var mostraFormProduto = false;

if(localStorage.getItem("acesso") == "true"){
    logado = true;
    console.log("entrou");
}


if(logado != true){
    alert("Você não está autenticado!");
    window.location.href = "login.html";
}

function controlformProduto(){
    mostraFormProduto = !mostraFormProduto;
    var form = document.getElementById("formProduto");

    if(mostraFormProduto){        
        form.style.display = "block";
    }else{
        form.style.display = "none";
    }
}


function cadastraProduto(){
    var produtoDescricao = document.getElementById("produtoDescricao");
    var produtoQuantidade = document.getElementById("produtoQuantidade");


    var dados = JSON.parse(localStorage.getItem("dadosProduto"));

    if(dados == null){
        localStorage.setItem("dadosProdutos", "[]");
        dados = [];
    }

    var outsRegistro = {
        nome: produtoDescricao.value,
        quantitade: produtoQuantidade.value
    }

    dados.push(outsRegistro);

    localStorage.setItem("dadosProduto", JSON.stringify(dados));
    alert("Item incluido com sucesso!");
    produtoDescricao.value = "";
    produtoQuantidade.value = "";
}