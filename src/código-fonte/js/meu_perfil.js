const senha1 = document.querySelector("#senha-perfil")
const senha2 = document.querySelector("#senha2-perfil")
const imgPass = document.querySelector(".imgPass")

$(document).ready(function(){
$('#cep-perfil').mask('00000-000');
$('#telefone-perfil').mask('(00) 0000-0000');
$('#celular-perfil').mask('(00) 00000-0000');
});


senha1.addEventListener('keypress' , () =>{
    if(senha1.value.length > 20)
        senha1.style.border = "2px solid red";
});


    imgPass.addEventListener('click', function() {
        if (imgPass.src.endsWith('/src/código-fonte/img/pass_open.png')) {
            imgPass.src = "/src/código-fonte/img/pass_Invisible.png";
            senha1.setAttribute("type", "text");
        } else {
            imgPass.src = "/src/código-fonte/img/pass_open.png";
        }
    });
    