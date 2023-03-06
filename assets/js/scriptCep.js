// API de CEP
let cep;
const botao = document.getElementById("search-button");

let CEPValido = false;

botao.addEventListener("click", async function () {
  cep = String(document.getElementById("search-input").value);
  await pesquisarCEP(cep);
});

const pesquisarCEP = async (cepe) => {
  numero = Math.floor(Math.random() * 101);
  validarCEP(cepe);
  if (cepe.trim() === "") {
    document.getElementById("cep-result").innerHTML = "Digite um CEP válido";
  } else if (!CEPValido){
    document.getElementById("cep-result").innerHTML = `*Insira um CEP em um formato válido (00000-000)`;
  } else{
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
        if (data.erro === true){
          document.getElementById("cep-result").innerHTML = `*CEP inexistente`;
        }else if (data.length === 0) {
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
const validarCEP = (cepe) => {
const regexCEP = /^[0-9]{5}-[0-9]{3}$/;

  if (!regexCEP.test(cepe)) {
    document.getElementById("cep-result").innerHTML = `*Insira um CEP em um formato válido (00000-000)`;
    console.log('chegou aqui');
    CEPValido = false;
  } else {
    CEPValido = true;
  }
};