function criarToolbar () {

    const usuarioLogado = JSON.parse(
    sessionStorage.getItem("usuarioLogado")
);


const cabecalho = document.createElement("header");
cabecalho.classList.add("toolbar");

const logoMarcaDagua = document.createElement("img");

const nomeDoUsuarioLogado = document.createElement("span");
nomeDoUsuarioLogado.textContent = usuarioLogado.nome;
logoMarcaDagua.src = "../assets/img/logo-marca-d'agua.png";
cabecalho.appendChild(logoMarcaDagua);
cabecalho.appendChild(nomeDoUsuarioLogado);
document.body.prepend(cabecalho);


const menu = document.createElement("nav");
menu.classList.add("menu-lateral");
document.body.prepend(menu);



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
sair.addEventListener("click", function () {
   sessionStorage.removeItem("usuarioLogado");
   window.location.href = "../login/login.html";
});
menu.appendChild(sair);

const cursos = document.createElement("button");

cursos.textContent = "Cursos";

cursos.disabled = true;

menu.appendChild(cursos);



}

export { criarToolbar };