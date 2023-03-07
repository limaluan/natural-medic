const campoNomeContato = document.getElementById("name");
const campoSobrenomeContato = document.getElementById("last-name");
const campoTelefoneContato = document.getElementById("tel");
const campoEmailContato = document.getElementById("email");
const campoMensagemContato = document.getElementById("message");
const btnEnviarContato = document.getElementById("botao-contato");

let nomeContato;
let sobrenomeContato;
let telefoneContato;
let emailContato;
let mensagemContato;

let telefoneValido = false;
let emailValido = false;

const enviarFormulario = () => {
  console.log("enviar formulario");
  nomeContato = String(campoNomeContato.value);
  sobrenomeContato = String(campoSobrenomeContato.value);
  telefoneContato = String(campoTelefoneContato.value);
  emailContato = String(campoEmailContato.value);
  mensagemContato = String(campoMensagemContato.value);

  validarTelefone(telefoneContato);
  validarEmail(emailContato);

  !nomeContato && alert("*É necessário informar o nome!");
  !sobrenomeContato && alert("*É necessário informar o sobrenome!");
  !mensagemContato && alert("*É necessário que você escreva uma mensagem!");

  if (telefoneValido && emailValido && nomeContato) {
    const novoContato = {
      nomeContato,
      telefoneContato,
      emailContato,
      sobrenomeContato,
      mensagemContato,
    };

    //Substituir console.log por POST no futuro
    console.log(novoContato);
    alert("Em breve retornaremos seu contato!");
  }
};

const validarTelefone = (telefone) => {
  const regexTelefone =
    /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;

  if (!regexTelefone.test(telefone)) {
    alert("*Insira um número de telefone no formato (33) 3 3333-3333");

    telefoneValido = false;
  } else {
    telefoneValido = true;
  }
};

const validarEmail = (email) => {
  console.log("validar email");
  const regexEmail =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

  if (!regexEmail.test(email)) {
    alert("*Insira um email válido");

    emailValido = false;
  } else {
    emailValido = true;
  }
};
