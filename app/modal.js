const btnOpen = document.querySelector(".open__modal");
const modal = document.querySelector(".modal__bg");
const btnClose = document.querySelector(".close__btn");
const sendBtn = document.querySelector(".send__btn");
const modalWindow = document.querySelector(".modal__window");

const email = document.getElementById("mail");
const text = document.getElementById("text");

btnOpen.addEventListener("click", function () {
  modal.style.display = "block";
});
btnClose.addEventListener("click", function () {
  modal.style.display = "none";
});
sendBtn.addEventListener("click", function (e) {
  if (!email.value || !text.value) {
    alert("Не все поля запонены");
  } else {
    e.preventDefault();
    alert(`Спасибо за обращение
  Ваш email ${email.value}
  Ваше сообщение ${text.value}`);
    modal.style.display = "none";
    email.value = "";
    text.value = "";
  }
});
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  } else {
    e.preventDefault();
  }
});
