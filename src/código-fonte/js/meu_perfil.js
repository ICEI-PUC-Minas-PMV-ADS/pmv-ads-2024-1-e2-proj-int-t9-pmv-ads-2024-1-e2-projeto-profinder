$(document).ready(function(){
$('#cep-perfil').mask('00000-000');
$('#telefone-perfil').mask('(00) 0000-0000');
$('#celular-perfil').mask('(00) 00000-0000');
});

const senha = document.querySelector("#senha-perfil")
senha.addEventListener('keypress' , () =>{
    if(senha.value.length > 20)
        senha.style.border = "2px solid red";
});