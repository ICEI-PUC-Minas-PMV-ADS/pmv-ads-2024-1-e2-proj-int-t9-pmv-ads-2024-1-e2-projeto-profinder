const senha1 = document.querySelector("#senha-perfil")
const senha2 = document.querySelector("#senha2-perfil")
const imgPass = document.querySelector(".imgPass")
const imgPass2 = document.querySelector(".imgPass2")

$(document).ready(function(){
$('#cep-perfil').mask('00000-000');
$('#telefone-perfil').mask('(00) 0000-0000');
$('#celular-perfil').mask('(00) 00000-0000');
});


senha1.addEventListener('keypress' , () =>{
    if(senha1.value.length > 20)
        senha1.style.border = "2px solid red";
});


let isPasswordVisible1 = false;

imgPass.addEventListener('click', function() {
    if (!isPasswordVisible1) {
        imgPass.src = "/src/código-fonte/img/pass_Invisible.png";
        senha1.setAttribute("type", "text");
    } else {
        imgPass.src = "/src/código-fonte/img/pass_open.png";
        senha1.setAttribute("type", "password");
    }
    isPasswordVisible1 = !isPasswordVisible1;
});

let isPasswordVisible2 = false;

imgPass2.addEventListener('click', function() {
    if (!isPasswordVisible2) {
        imgPass2.src = "/src/código-fonte/img/pass_Invisible.png";
        senha2.setAttribute("type", "text");
    } else {
        imgPass2.src = "/src/código-fonte/img/pass_open.png";
        senha2.setAttribute("type", "password");
    }
    isPasswordVisible2 = !isPasswordVisible2;
});
