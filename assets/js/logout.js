function logout() {

    document.getElementById('sair').click(

        function (){
            Parse.User.logOut();               
            var currentUser = Parse.User.current();
            window.location.replace("./login.html");              
        }          
    );
}