const checkbox = document.getElementById("slider");
const wrapper = document.getElementById("app");
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
const homeContent = `
<section id="descr">
        <div class="container">
          <div class="descr__wrapper">
            <ul class="descr__title df tt-u">
              <ul class="descr__title-item df-dr">
                <li class="title__item">h</li>
                <li class="title__item">o</li>
                <li class="title__item">m</li>
                <li class="title__item">e</li>
              </ul>
              <ul class="descr__title-item df-dr">
                <li class="title__item">p</li>
                <li class="title__item">a</li>
                <li class="title__item">g</li>
                <li class="title__item">e</li>
              </ul>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
              tempore ducimus rerum animi architecto impedit, voluptatem
              necessitatibus autem distinctio tempora! Aut consectetur
              architecto cum quaerat minus numquam delectus, nam ipsum.
            </p>
          </div>
        </div>
      </section>
`;
wrapper.innerHTML = homeContent;

mediaBtn.addEventListener("click", function () {
  navMenu.classList.toggle("actived");
  let mainElement = document.querySelector(".main");
  mainElement.classList.toggle("active", navMenu.classList.contains("actived"));
});
function renderNumb() {
  let userData = JSON.parse(localStorage.getItem("userData"));
  if (!userData) {
  } else {
    const cartNumb = document.querySelector(".cart__total");
    cartNumb.textContent = userData.buyList.length;
  }
}
