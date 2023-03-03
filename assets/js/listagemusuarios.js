let listaNomes = [];
let inputBusca;
let numeroUsuarios = 10;
let listaCarregada = false;

const campoUsuarios = document.getElementById("clients-list");
const botao = document.getElementById("search-button");

botao.addEventListener("click", async function () {
  inputBusca = String(
    document.getElementById("clients-search").value.toLowerCase()
  );
  await listagemUsuarios(inputBusca);
});

async function listagemUsuarios(paramBusca) {
  if (!listaCarregada) {
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
        listaCarregada = true;
      });
  }

        if (paramBusca) {
          let listaNomesFiltrada = listaNomes.filter((nome) =>
            nome.includes(paramBusca)
          );
          campoUsuarios.innerHTML = "";
          for (let nome of listaNomesFiltrada) {
            let newNome = nome.replace("-", " ");
            const words = newNome.split(" ");

            for (let i = 0; i < words.length; i++) {
              words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            }

            campoUsuarios.innerHTML += `<li><p>Nome: ${words
              .toString()
              .replace(",", " ")}<br/>Telefone: 79 9 9999-31167</p></li>`;

          }
        } else {
          campoUsuarios.innerHTML = "";
          for (let nome of listaNomes) {
            let newNome = nome.replace("-", " ");
            const words = newNome.split(" ");

            for (let i = 0; i < words.length; i++) {
              words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            }

            campoUsuarios.innerHTML += `<li><p>Nome: ${words
              .toString()
              .replace(",", " ")}<br/>Telefone: 79 9 9999-31167</p></li>`;
    }
  }
}
