
import { aluno } from "../dados/listagem-alunos.js" ;

  function gerarProximoId() {
    const novoId = aluno[aluno.length - 1].id + 1;

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
aluno.push(estudante);
}

export { Aluno, cadastrarAluno, gerarProximoId };