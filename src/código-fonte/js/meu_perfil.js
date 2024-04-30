const senha1 = document.querySelector("#senha-perfil")
const senha2 = document.querySelector("#senha2-perfil")

$(document).ready(function(){
$('#cep-perfil').mask('00000-000');
$('#telefone-perfil').mask('(00) 0000-0000');
$('#celular-perfil').mask('(00) 00000-0000');
});


senha1.addEventListener('keypress' , () =>{
    if(senha1.value.length > 20)
        senha1.style.border = "2px solid red";
});

[senha1, senha2].forEach(senha => {
    senha.addEventListener('click', function() {
        if (senha.style.backgroundImage = "url('/src/código-fonte/img/pass_Invisible.png')") {
            senha.style.backgroundImage = "url('/src/código-fonte/img/pass_open.png')";
            senha.setAttribute("type", "text");
        } else {
            senha.style.backgroundImage = "url('/src/código-fonte/img/pass_Invisible.png')";
        }
    });
});
