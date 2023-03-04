window.addEventListener(
  "load",

  () => {
    const campoTextoAdmTopo = document.getElementById("nome-usuario-topo");

    let nomeUsuario = sessionStorage.getItem("username");
    campoTextoAdmTopo.innerText = `Olá, ${nomeUsuario}!`;
  }
);

const logout = () => {
  sessionStorage.clear();

  window.location.href = "../index.html";
};
