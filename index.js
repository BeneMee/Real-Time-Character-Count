
const textareaEl = document.getElementById("textarea");
const totalCharEl = document.getElementById("total-counter");
const remainingCharEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", ()=>{
    updateCounter()
})

updateCounter()

function updateCounter() {
    totalCharEl.innerText = textareaEl.value.length;
    remainingCharEl.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}

