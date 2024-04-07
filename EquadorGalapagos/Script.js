function login(){
    var email = document.getElementById('iemail')
    var senha = document.getElementById('isenha')
    var entrar =  document.getElementById('ientrar')

    if(email === "admin" && senha === "admin" ){
        alert("Sucesso!!")
        location.href = "GetEnvolved.html"
    }

    else{
        alert("Tente Novamente! Usuário ou Senha estão errados!!")
    }

}