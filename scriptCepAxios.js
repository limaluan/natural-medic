// API de CEP com Axios

var endereco = document.querySelector("#endereco");

function pesquisaCEP(){
    axios
        .get(`https://viacep.com.br/ws/${cep.value}/json/`)
        .then((response) => {
            const cepes = response.data;
            console.log(cepes);

            var listaCEP = document.querySelector("#listaCEP");
            
            for (i in cepes) {
                console.log(cepes[i]);
                var elemento = document.createElement("li");
                elemento.innerHTML = JSON.stringify(cepes[i].url);

                listaCEP.appendChild(elemento);
                
            }
        })

        .catch((error) => console.error(error));
}