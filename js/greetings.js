const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);
  loginInput.classList.add("hidden");
  paintGrettings(username);
}

function paintGrettings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove("hidden");
}

const savedUsername = localStorage.getItem("username");

if (savedUsername == null) {
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGrettings(savedUsername);
  loginForm.classList.add("hidden");
}
