const textEl = document.getElementById("text")

const totalEl = document.getElementById("total")

const reaminingEl = document.getElementById("remaining")

const x = () => {
    updateCounter();
}

textEl.addEventListener("keyup", x)

updateCounter();

function updateCounter() {
    totalEl.innerText = textEl.value.length;
    reaminingEl.innerText = textEl.getAttribute("maxlength") - textEl.value.length;
}