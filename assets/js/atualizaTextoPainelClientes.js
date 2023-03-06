window.addEventListener(
  "load",

  () => {
    const campoTextoAdmTopo = document.getElementById("nome-usuario-topo");

    let nomeUsuario = sessionStorage.getItem("username");
    campoTextoAdmTopo.innerText = nomeUsuario;
  }
);
