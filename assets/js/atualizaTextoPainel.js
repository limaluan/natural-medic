const iconeLogout = document.getElementById("icone-logout");

iconeLogout.addEventListener("click", () => {
  logout();
});

window.addEventListener(
  "load",

  () => {
    const campoTextoAdmTopo = document.getElementById("nome-usuario-topo");
    const campoTextoSaudacaoAdm = document.getElementById("texto-saudacao-adm");

    let nomeUsuario = sessionStorage.getItem("username");
    campoTextoAdmTopo.innerText = nomeUsuario;
    campoTextoSaudacaoAdm.innerText = `Seja bem vindo(a), ${nomeUsuario}!`;
  }
);

const logout = () => {
  sessionStorage.clear();

  window.location.href = "../index.html";
};
