import { criarToolbar } from "../js/toolbar.js";
import { Aluno, cadastrarAluno } from "../js/alunos.js";

criarToolbar();

const formulario = document.querySelector("#formCadastroAluno");

const cep = document.querySelector("#cep");

const logradouro = document.querySelector("#logradouro");

const bairro = document.querySelector("#bairro");

const cidade = document.querySelector("#cidade");

const estado = document.querySelector("#estado");

cep.addEventListener("blur", function () {
  fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
    .then((resposta) => resposta.json())
    .then((dadosEndereco) => {
      if (dadosEndereco.erro) {
        window.alert("CEP não encontrado!");
        return;
      }

      logradouro.value = dadosEndereco.logradouro;
      bairro.value = dadosEndereco.bairro;
      cidade.value = dadosEndereco.localidade;
      estado.value = dadosEndereco.uf;
    })
    .catch(() => {
      window.alert("Não foi possível consultar o CEP.");
    });
});

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
const nome = document.querySelector("#nome");

const genero = document.querySelector("#genero");

const dataNascimento = document.querySelector("#dataNascimento");

const data = moment(dataNascimento.value, "DD/MM/YYYY", true);

  if (
    data.isValid() &&
    data.isAfter(moment("01/01/1900", "DD/MM/YYYY", true)) &&
    data.isBefore(moment())
  ) {
  } else {
    window.alert("Por favor, digite uma data válida!");
    return;
  }

const cpf = document.querySelector("#cpf");

  if (cpf.value.length !== 11) {
    window.alert("Digite um CPF válido!");
    return;
  }

const telefone = document.querySelector("#telefone");

const telefoneNumerico = telefone.value.replace(/\D/g, "");

  if (telefoneNumerico.length < 10 || telefoneNumerico.length > 11) {
    window.alert("Digite um telefone válido!");
    return;
  }

const email = document.querySelector("#email");

const numero = document.querySelector("#numero");

const complemento = document.querySelector("#complemento");

const aluno = new Aluno(
    null,
    nome.value,
    genero.value,
    dataNascimento.value,
    cpf.value,
    telefone.value,
    email.value,
    cep.value,
    logradouro.value,
    numero.value,
    complemento.value,
    bairro.value,
    cidade.value,
    estado.value,
  );

  cadastrarAluno(aluno)
    .then((mensagem) => {
      
      window.alert(mensagem);
      formulario.reset();
    })
    .catch((erro) => {
      window.alert(erro);
    });
   
});
