import { curso } from "../dados/listagem-cursos.js";
function listarCursos(usuario) {
  const cursosDoUsuario = curso.filter((item) => {
    return usuario.email === item.emailProfessor;
  });
  if (cursosDoUsuario.length > 0) {
    return Promise.resolve(cursosDoUsuario);
  } else {
    return Promise.reject("Não há cursos cadastrados para esse usuário");
  }
}

export { listarCursos };
