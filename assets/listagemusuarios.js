let listaNomes = [];
let inputBusca;
let numeroUsuarios = 10;

const campoUsuarios = document.getElementById("campo-usuarios");
const botao = document.getElementById("botao");

botao.addEventListener("click", async function () {
  inputBusca = String(document.getElementById("input-busca").value);
  await listagemUsuarios(inputBusca);
});

const listagemUsuarios = async (paramBusca) => {
  if (listaNomes.length === 0) {
    await fetch(
      `https://geradorbrasileiro.com/api/faker/usuario?limit=${numeroUsuarios}`,

      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro de HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then((usuario) => {
        listaNomes = usuario.values;

        if (paramBusca) {
          let listaNomesFiltrada = listaNomes.filter((nome) =>
            nome.includes(paramBusca)
          );
          campoUsuarios.innerHTML = "";
          for (let nome of listaNomesFiltrada) {
            let elemento = document.createElement("li");
            elemento.innerText = nome;
            campoUsuarios.appendChild(elemento);
          }
        } else {
          campoUsuarios.innerHTML = "";
          for (let nome of listaNomes) {
            let elemento = document.createElement("li");
            elemento.innerText = nome;
            campoUsuarios.appendChild(elemento);
          }
        }

        listaNomes = [];
      });
  }
};
