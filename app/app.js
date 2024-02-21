const checkbox = document.getElementById("slider");
const mediaBtn = document.querySelector(".media__btn-wrapper");
const navMenu = document.querySelector(".nav__menu");

checkbox.addEventListener("change", function () {
  changeTheme(checkbox.checked);
});
function changeTheme(isChecked) {
  if (isChecked) {
    document.body.setAttribute("dark", "");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.removeAttribute("dark");
    localStorage.removeItem("theme");
  }
}
try {
  if (localStorage.getItem("theme") === "dark") {
    document.body.setAttribute("dark", "");
    checkbox.checked = true;
  } else {
    document.body.removeAttribute("dark");
    checkbox.checked = false;
  }
} catch (err) {}

let li = document.querySelectorAll(".title__item");
for (let i = 0, len = li.length; i < len; i++) {
  li[i].style.animationDelay = i / 10.333 + "s";
}
mediaBtn.addEventListener("click", function () {
  navMenu.classList.toggle("actived");
});
