const btnLogin = document.getElementById("botao-login");
const campoUsuario = document.getElementById("usuario-login");
const campoSenha = document.getElementById("senha-login");

const emailAdm = "atuny0@sohu.com";

let usuarioLogin;
let senhaLogin;

let usuarioValido = false;

btnLogin.addEventListener("click", () => {
  usuarioLogin = String(campoUsuario.value);
  senhaLogin = String(campoSenha.value);

  if (usuarioLogin === "") {
    alert("Insira um usuário!");
  } else if (senhaLogin === "") {
    alert("Insira uma senha!");
  } else {
    fazerLogin(usuarioLogin, senhaLogin);
  }
});

const fazerLogin = async (usuario, senha) => {
  const urlLogin = "https://dummyjson.com/auth/login";

  await fetch(urlLogin, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: usuarioLogin,
      password: senhaLogin,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        alert(
          "Erro na solicitação! Verifique seus dados ou contacte o suporte!"
        );
      } else {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      if (data.message && data.message.includes("Invalid credentials")) {
        alert("Usuário ou senha inválidos!");
      } else {
        sessionStorage.setItem("username", data.firstName);
        redirecionaLogin(data);
      }
    });
};

const redirecionaLogin = (data) => {
  sessionStorage.setItem("username", data.firstName);

  if (data.email === emailAdm) {
    window.location.href = "../admin/index.html";
  } else {
    window.location.href = "../logado/index.html";
  }
};
