let counter = document.getElementById("counter");
const btnMais = document.querySelector(".adicionar");
const btnMenos = document.querySelector(".menos");
const btnReset = document.querySelector(".reset");

let count = 0;

function atualizarDisplay() {
  if (count > 0) {
    counter.style.color = "green";
  } else if (count < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "gray";
  }

    counter.textContent = count;

}

btnMais.addEventListener("click", () => {
  count++
  atualizarDisplay()
})

btnMenos.addEventListener('click', () => {
    count--
    atualizarDisplay()
})


btnReset.addEventListener("click", () => {
  count = 0
atualizarDisplay()
});

atualizarDisplay()