// API de CEP
let cep;
const botao = document.getElementById("input-pesquisa");

botao.addEventListener("click", async function () {
    cep = String(document.getElementById("cep").value);
    await pesquisarCEP(cep);
});


const pesquisarCEP = async (cepe) => {
    numero = Math.floor(Math.random() * 101);
    if (cepe.trim() === "") {
        document.getElementById("resposta").innerHTML = "Digite um CEP válido";
    } else {
        await fetch(`https://viacep.com.br/ws/${cepe}/json/` , {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }).then((response) => {
            if (!response.ok){
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        }).then((data) => {
            if(data.length === 0){
                document.getElementById("resposta").innerHTML = `<h5>CEP não encontrado</h5>`
            } else {
                document.getElementById("resposta").innerHTML = `<p> Endereço: ${data.logradouro}<br> , Número: ${numero}, Bairro: ${data.bairro}<br>, Cidade: ${data.localidade}<br>, UF: ${data.uf}</p>`;
            }
        });
    }
}