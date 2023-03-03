const url = "https://jsonplaceholder.typicode.com/comments";

const commentForm = document.querySelector("#form-comentarios");

// Carregando post
let commentsContainer = document.getElementById("lista-comentarios");
const emailInput = document.querySelector("#email");
const bodyInput = document.querySelector("#body");

// Get all posts - pegar os dados da API
async function getAllPosts() {
  const response = await fetch(url);
  const data = await response.json();
  
  data.length > 0
    ? data.map((post, index) => {
        index === 0 && (commentsContainer.innerHTML = "");
        commentsContainer.innerHTML += `<div class="comentario">
        <p class="email">${post.email}</p>
        <p><i>Comentou:</i></p>
        <p>${post.body}</p>
        </div>`;
      })
    : "";
}

// Async - inserir comentário
async function postComment(comment) {
  const response = await fetch(url, {
    method: "POST",
    body: comment,
    headers: {
      "Content-type": "application/json",
    },
  });

  const data = await response.json();
  
  commentsContainer.innerHTML += `<div class="comentario">
        <p class="email">${data.email}</p>
        <p><i>Comentou:</i></p>
        <p>${data.body}</p>
        </div>`;
}

getAllPosts();

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let comment = {
    email: emailInput.value,
    body: bodyInput.value,
  };

  comment = JSON.stringify(comment);
  postComment(comment);
});
