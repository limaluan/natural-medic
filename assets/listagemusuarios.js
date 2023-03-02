let listaNomes = [];
let listaCelular = [];
let listaCPF = [];
let numeroUsuarios = 15;

const listagemUsuarios = async () => {
    if (listaNomes.length === 0) {
        await fetch(`https://geradorbrasileiro.com/api/faker/usuario?limit=${numeroUsuarios}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        }).then((response) => {
            if (!response.ok) {
                throw new Error(`Erro de HTTP: ${response.status}`);
            }
            return response.json();
        }).then((usuario) => {
        listaNomes = usuario.values;
    }) 
    }
}

const listagemCelulares = async () => {
    if (listaCelular.length === 0) {
        await fetch(`https://geradorbrasileiro.com/api/faker/celular?limit=${numeroUsuarios}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        }).then((response) => {
            if (!response.ok) {
                throw new Error(`Erro de HTTP: ${response.status}`);
            }
            return response.json();
        }).then((celular) => {
        listaCelular = celular.values;
    }) 
    }
}

const listagemCPF = async () => {
    if (listaCPF.length === 0) {
        await fetch(`https://geradorbrasileiro.com/api/faker/cpf?limit=${numeroUsuarios}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        }).then((response) => {
            if (!response.ok) {
                throw new Error(`Erro de HTTP: ${response.status}`);
            }
            return response.json();
        }).then((cpf) => {
        listaCPF = cpf.values;
    }) 
    }
}
