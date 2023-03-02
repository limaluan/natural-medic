// API de CEP
let cep;
const botao = document.getElementById("search-button");

botao.addEventListener("click", async function () {
  cep = String(document.getElementById("search-input").value);
  await pesquisarCEP(cep);
});

const pesquisarCEP = async (cepe) => {
  numero = Math.floor(Math.random() * 101);
  if (cepe.trim() === "") {
    document.getElementById("cep-result").innerHTML = "Digite um CEP válido";
  } else {
    await fetch(`https://viacep.com.br/ws/${cepe}/json/`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.length === 0) {
          document.getElementById(
            "cep-result"
          ).innerHTML = `<h5>CEP não encontrado</h5>`;
        } else {
          document.getElementById(
            "cep-result"
          ).innerHTML = `<p>Endereço: ${data.logradouro}, Número: ${numero}, Bairro: ${data.bairro}, Cidade: ${data.localidade}, UF: ${data.uf}</p>`;
        }
      });
  }
};
