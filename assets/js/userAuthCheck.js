const userPanel = document.getElementById("user-panel");
const admPanel = document.getElementById("adm-panel");
const loginButton = document.getElementById("login-button");
const admNav = document.getElementById("adm-nav");

window.addEventListener("load", () => {
  let nomeUsuario = sessionStorage.getItem("username");
  if (admPanel) {
    admPanel.innerText = nomeUsuario;
  } else if (nomeUsuario) {
    userPanel.classList.remove("hidden");
    loginButton.classList.add("hidden");
    userPanel.innerHTML = `<h3>Olá, ${nomeUsuario}!</h3>
      <a id="logout-button" onclick="logout()">Logout</a>`;
    sessionStorage.getItem("role") === "adm" &&
      admNav.classList.remove("hidden");
  } else {
    userPanel.classList.add("hidden");
    loginButton.classList.remove("hidden");
  }
});

const logout = () => {
  sessionStorage.clear();

  window.location.href = "../index.html";
};
