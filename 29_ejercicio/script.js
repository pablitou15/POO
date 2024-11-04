var h1 = document.querySelector("h1");
var title = document.querySelector("#title");
var logoImg = document.querySelector(".nav img");
var h3 = document.querySelector("h3");
h3.innerText = "New Title";
var petImg = document.querySelector("#pet-img");
    
function switchImg() {
    petImg.src = "dog.jpg";  
}

function setActive(element) {
    element.style.backgroundColor = "#222222";
    element.style.color = "#ffffff";
}
function setActive(element) {
    element.classList.add("dark-mode");
}
function setActive(element) {
    if(element.classList.includes("dark-mode")) {
        element.innerText = "Cambiar al modo claro";
        element.classList.remove("dark-mode");
    } else {
        element.innerText = "Cambiar al modo oscuro";
        element.classList.add("dark-mode");
    }
}
