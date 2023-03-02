// API de CEP



const pesquisarCEP = async () => {
    let cep = document.getElementById("cep").value;

    if (cep.trim() === "") {
        document.getElementById("resposta").innerHTML = "Digite um CEP válido";
    } else {
        await fetch(`https://viacep.com.br/ws/${cep}/json/` , {
            method: "GET",
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
                document.getElementById('resposta').innerHTML = `<h5>CEP não encontrado</h5>`
            } else {
                document.getElementById("resposta").innerHTML = `CEP: ${data[0].cep} <br> , Logradouro: ${data[0].logradouro}<br> , Número: Math.random().toString(99), Bairro: ${data[0].bairro}<br>, Cidade: ${data[0].localidade}<br>, UF: ${data[0].uf}`;
            }
        });
    }
}





// Código da Cris
/*`<div class="card" style="width: 18rem;">
                <div class="card=body">
                    <h5 class="card-title"><b>${data[0]['name']}</h5>
                    </div>
                    <ul class="list-group list-group-flush"
                        <li class="list-group-item"><b>Logradouro: ${data[0]['logradouro']}</li>
                        <li class="list-group-item"><b>Bairro: ${data[0]['bairro']}</li>
                        <li class="list-group-item"><b>Cidade: ${data[0]['localidade']}</li>
                        <li class="list-group-item"><b>Estado: ${data[0]['uf']}</li>
                        <li class="list-group-item"><b>Numero: Math.random()}</li>
                    </ul>
                    </div>
                </div> <hr/>` */