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

const imgs = document.getElementById("img");
const  img = document.querySelector("#img img");

let id = 0;

function carrossel(){
    idx++;
    if(idx > img.lenght - 1){
        idx = 0;
    }

    imgs.style.transform = ` translateX(${-idx * 500}) ` ;
        
    }
    setInterval(carrossel, 1800)
