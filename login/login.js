import { login } from "../js/auth.js";

const formulario = document.querySelector("#formulario");

const email = document.querySelector("#email");

const senha = document.querySelector("#senha");

const submit = document.querySelector("#acessar");

const resetSenha = document.querySelector("#resetarSenha");

const mensagemErro = document.querySelector("#mensagemErro");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const usuario = email.value;

  const senhaDigitada = senha.value;

  login(usuario, senhaDigitada) 
    
  .then((usuarioLogado) => {
      
    sessionStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
         
    window.location.href = "../dashboard/dashboard.html"
    })

    .catch((erro) => {
      
      mensagemErro.textContent = erro;
      
      console.log(erro);
    });
});

resetSenha.addEventListener("click", (event) => {
  event.preventDefault();
window.alert("Estamos em construção, logo estará disponível!");
});


