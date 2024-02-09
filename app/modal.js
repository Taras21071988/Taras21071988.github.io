const btnOpen = document.querySelector(".open__modal");
const modal = document.querySelector(".modal__bg");
const btnClose = document.querySelector(".close__btn");

btnOpen.addEventListener("click", function () {
  modal.style.display = "block";
});
btnClose.addEventListener("click", function () {
  modal.style.display = "none";
});
