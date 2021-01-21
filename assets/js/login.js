function logar(){
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    if(email.value == "admin@admin" && senha.value == "admin"){
        localStorage.setItem("acesso", true);
        alert("Usuário autenticado");
        window.location.href = "index.html";
    }else{
        alert("Usuário ou senha inaválidos!");
    }

}