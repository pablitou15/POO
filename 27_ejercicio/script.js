let isLoggedIn = false;

function login(button) {
  if (!isLoggedIn) {
    button.innerHTML = "Logout";
    isLoggedIn = true;
  } else {
    button.innerHTML = "Login";
    isLoggedIn = false;
  }
}
function message() {
  alert("¡Gracias por dar like!");
}

function hide(button) {
  button.style.display = "none";
  
}

function addDefinition() {
  const newDefinition = document.createElement("div");
  newDefinition.classList.add("box", "definition");
  newDefinition.innerHTML = `
    <div class="left">
      <h1>nuevo término</h1>
      <p><em>noun</em></p>
      <p>Plural: <em>nuevos términos</em></p>
      <button class="btn like" onclick="message()">0 likes</button>
    </div>
    <p class="definition-text">Nueva definición</p>
  `;
  document.querySelector(".flex-2").appendChild(newDefinition);
}

document.querySelector(".btn.add").addEventListener("click", addDefinition);