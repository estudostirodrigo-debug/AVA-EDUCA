function criarToolbar() {

    const usuarioLogado = JSON.parse(
        sessionStorage.getItem("usuarioLogado")
    );

    const cabecalho = document.querySelector("header");
    cabecalho.classList.add("toolbar");

    const caixaLogo = document.createElement("div");
    caixaLogo.classList.add("caixa-logo");

    const logoMarcaDagua = document.createElement("img");
    logoMarcaDagua.src = "../assets/img/logo-marca-d'agua.png";
    caixaLogo.appendChild(logoMarcaDagua);

    const nomeDoUsuarioLogado = document.createElement("span");
    nomeDoUsuarioLogado.textContent = usuarioLogado.nome;
    cabecalho.appendChild(caixaLogo);
    cabecalho.appendChild(nomeDoUsuarioLogado);

    const menu = document.createElement("nav");
    menu.classList.add("menu-lateral");

    const main = document.querySelector("main");
    document.body.insertBefore(menu, main);

    const dashboard = document.createElement("a");
    dashboard.textContent = "Dashboard";
    dashboard.href = "../dashboard/dashboard.html";
    menu.appendChild(dashboard);

    const cadastroAluno = document.createElement("a");

    cadastroAluno.textContent = "Cadastro de Alunos";
    cadastroAluno.href = "../cadastro-novo-aluno/cadastro-novo-aluno.html";

    menu.appendChild(cadastroAluno);

    const sair = document.createElement("button");

    sair.textContent = "Sair";

    menu.appendChild(sair);

    sair.addEventListener("click", function () {

        sessionStorage.removeItem("usuarioLogado");

        window.location.href = "../login/login.html";
    });

    const containerCursos = document.createElement("div");

    containerCursos.classList.add("container-cursos");

    const cursos = document.createElement("button");

    cursos.textContent = "Cursos";
    cursos.disabled = true;

    const avisoCursos = document.createElement("span");

    avisoCursos.textContent = "Acesso aos cursos estará disponível em breve.";

    avisoCursos.classList.add("aviso-cursos");

    containerCursos.appendChild(cursos);
    containerCursos.appendChild(avisoCursos);

    menu.appendChild(containerCursos);
}

export { criarToolbar };