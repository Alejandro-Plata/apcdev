const modal = document.querySelector(".modal");
const hamburger = document.querySelector(".material-symbols-outlined");
const hamburger2 = document.querySelectorAll(".material-symbols-outlined")[1]

hamburger.addEventListener("click", ()=> {
    modal.classList.toggle("open-modal")
    hamburger2.textContent = "⨉"
})

hamburger2.addEventListener("click", ()=> {
    modal.classList.toggle("open-modal")
    hamburger2.textContent = "menu"
})