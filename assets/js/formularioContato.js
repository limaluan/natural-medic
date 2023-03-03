const campoNomeContato = document.getElementById("nome-contato");
const campoLabelNome = document.getElementById("label-nome");
const campoLabelTelefone = document.getElementById("label-telefone");
const campoTelefoneContato = document.getElementById("telefone-contato");
const campoLabelEmail = document.getElementById("label-email");
const campoEmailContato = document.getElementById("email-contato");
const campoAssuntoContato = document.getElementById("assunto-contato");
const campoMensagemContato = document.getElementById("mensagem-contato");
const btnEnviarContato = document.getElementById("botao-contato");

let nomeContato;
let telefoneContato;
let emailContato;
let assuntoContato;
let mensagemContato;

let telefoneValido = false;
let emailValido = false;

const enviarFormulario = () => {
  console.log("enviar formulario");
  nomeContato = String(campoNomeContato.value);
  telefoneContato = String(campoTelefoneContato.value);
  emailContato = String(campoEmailContato.value);
  assuntoContato = String(campoAssuntoContato.value);
  mensagemContato = String(campoMensagemContato.value);

  validarTelefone(telefoneContato);
  validarEmail(emailContato);

  !nomeContato &&
    (campoLabelNome.innerHTML =
      '<span class="error"> *É necessário informar o nome!</span>');

  if (telefoneValido && emailValido && nomeContato) {
    campoLabelNome.innerHTML = "";
    campoLabelTelefone.innerHTML = ``;
    campoLabelEmail.innerHTML = ``;

    const novoContato = {
      nomeContato,
      telefoneContato,
      emailContato,
      assuntoContato,
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
    campoLabelTelefone.innerHTML = `<span class="error"> *Insira um número no formato (33) 3 3333-3333</span>`;

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
    campoLabelEmail.innerHTML = `<span class="error">*Insira um email válido</span>`;

    emailValido = false;
  } else {
    emailValido = true;
  }
};
