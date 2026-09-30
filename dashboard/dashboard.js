import { listarCursos } from "../js/cursos.js";
import { criarToolbar } from "../js/toolbar.js";
criarToolbar();

console.log("dashboard js carregou!");

const usuarioLogado = JSON.parse(sessionStorage.getItem("usuarioLogado"));

console.log(usuarioLogado);

const containerCursos = document.querySelector("#cursos");

listarCursos(usuarioLogado)
  .then((cursosDoUsuario) => {
    console.log(cursosDoUsuario);

    for (let i = 0; i < cursosDoUsuario.length; i++) {
      const card = document.createElement("article");
      card.classList.add("card");

      const tituloCurso = document.createElement("h2");
      card.appendChild(tituloCurso);
      tituloCurso.textContent = cursosDoUsuario[i].nomeCurso;

      const dataInicio = document.createElement("p");

      const dataFim = document.createElement("p");
      card.appendChild(dataInicio);
      card.appendChild(dataFim);

      dataInicio.textContent = `Início: ${cursosDoUsuario[i].dataInicio}`;
      dataFim.textContent = `Término: ${cursosDoUsuario[i].dataFim}`;

      containerCursos.appendChild(card);
    }
  })
  .catch((erro) => {
    console.log(erro);
  });
