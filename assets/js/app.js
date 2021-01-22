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
