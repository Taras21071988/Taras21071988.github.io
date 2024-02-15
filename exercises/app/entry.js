const btnOpen = document.querySelector(".admin__btn");
const modal = document.querySelector(".modal__bg");
const btnClose = document.querySelector(".close__btn");
const sendBtn = document.querySelector(".send__btn");

const admin = {
  log: "admin",
  pass: "admin",
};

const login = document.querySelector(".form__inp-login");
const password = document.querySelector(".form__inp-pass");

btnOpen.addEventListener("click", function () {
  if (localStorage.getItem("admin") === "yes") {
    window.location.href = "page/admin.html";
  } else {
    modal.style.display = "block";
  }
});

btnClose.addEventListener("click", function () {
  modal.style.display = "none";
});

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  } else {
  }
});

sendBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!login.value || !password.value) {
    alert("Не все поля заполненны");
  } else {
    if (login.value === admin.log && password.value === admin.pass) {
      console.log("Вход выполнен успешно!");
      localStorage.setItem("admin", "yes");
      window.location.href = "page/admin.html";
    } else {
      alert("Неверный логин или пароль.");
    }
  }
});
