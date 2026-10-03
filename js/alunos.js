import { aluno } from "../dados/listagem-alunos.js";

function gerarProximoId() {
  const alunosSalvos = sessionStorage.getItem("alunos");
  const alunos = alunosSalvos ? JSON.parse(alunosSalvos) : aluno;

  const novoId = alunos[alunos.length - 1].id + 1;

  return novoId;
}

class Aluno {
  constructor(
    id,
    nome,
    genero,
    dataNascimento,
    cpf,
    telefone,
    email,
    cep,
    logradouro,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
  ) {
    this.id = id;
    this.nome = nome;
    this.genero = genero;
    this.dataNascimento = dataNascimento;
    this.cpf = cpf;
    this.telefone = telefone;
    this.email = email;
    this.cep = cep;
    this.logradouro = logradouro;
    this.numero = numero;
    this.complemento = complemento;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }
}

function cadastrarAluno(estudante) {
  return new Promise((resolve, reject) => {
    try {
      if (!estudante) {
        reject("Erro ao cadastrar o aluno");
        return;
      }

      estudante.id = gerarProximoId();

      aluno.push(estudante);

      sessionStorage.setItem("alunos", JSON.stringify(aluno));

      resolve("Aluno cadastrado com sucesso!");
    } catch (erro) {
      reject("Erro ao cadastrar o aluno");
    }
  });
}

export { Aluno, cadastrarAluno, gerarProximoId };