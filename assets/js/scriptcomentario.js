const url = "https://jsonplaceholder.typicode.com/comments";

const commentForm = document.querySelector("#comments-form");

// Carregando post
let commentsContainer = document.getElementById("comments-list");
const emailInput = document.querySelector("#email");
const bodyInput = document.querySelector("#body");

// Get all posts - pegar os dados da API
async function getAllPosts() {
  const response = await fetch(url);
  const data = await response.json();

  data.length > 0
    ? data.map((post, index) => {
        index === 0 && (commentsContainer.innerHTML = "");
        index < 4 &&
          (commentsContainer.innerHTML += `<li>
          <h3>${post.email}</h3>
          <p><i>Comentou:</i></p>
          <p>${post.body}</p>
          </li>
          `);
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

  if (!data.body) {
    alert("É necessário escrever alguma mensagem!");
  } else {
    commentsContainer.innerHTML += `<li>
          <h3>${data.email}</h3>
          <p><i>Comentou:</i></p>
          <p>${data.body}</p>
          </li>`;
  }
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
