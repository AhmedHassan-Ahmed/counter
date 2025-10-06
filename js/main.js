const reset = document.querySelector(".reset");
const rotateMark = document.querySelector(".fa-arrows-rotate");

reset.addEventListener("mouseenter", () => {
  rotateMark.classList.add("fa-spin");
});

reset.addEventListener("mouseleave", () => {
  rotateMark.classList.remove("fa-spin");
});

const add = document.querySelector(".add");
const minus = document.querySelector(".minus");
const number = document.querySelector(".number");

add.onclick = function () {
  number.innerHTML = parseInt( number.innerHTML)+1;
};
reset.onclick = function () {
  number.innerHTML = 0;
};
minus.onclick = function () {
    if (!parseInt( number.innerHTML)==0)
    number.innerHTML = parseInt( number.innerHTML)-1;
};
