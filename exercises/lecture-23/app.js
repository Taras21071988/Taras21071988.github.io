// Завдання 1
const alertOne = document.querySelector(".alert");
//
function Check() {
  while (alertOne.classList.length > 0) {
    alertOne.classList.remove(alertOne.classList.item(0));
  }
  alertOne.classList.add("alert", "mt-5");
  alertOne.textContent = "";
}

let alOne = function () {
  Check();
  alertOne.classList.add("alert-primary");
  alertOne.textContent = "A simple primary alert—check it out!";
};
//

// Завдання 2
const taskTwo = document.getElementsByClassName("btn-secondary");
taskTwo[0].addEventListener("click", function () {
  Check();
  alertOne.classList.add("alert-primary");
  alertOne.textContent = "A simple secondary alert—check it out!";
});
//

// Завдання 3
const taskThree = document.getElementsByClassName("btn-success");

taskThree[0].addEventListener("mouseover", function () {
  Check();
  alertOne.classList.add("alert-success");
  alertOne.textContent = "A simple success alert—check it out!";
});

taskThree[0].addEventListener("mouseout", function () {
  alertOne.classList.remove("alert-success");
  alertOne.textContent = "";
});
// Під час виконання третього завдання зробив невелику функцію, яку додав у кожне завдання для очищення непотрібних класів (щоб візуально на сторінці бачити ефекти від класів, які використовуються в кожному окремому завданні).
//

// Завдання 4
const taskFour = document.getElementsByClassName("btn-danger");
taskFour[0].addEventListener("focus", function () {
  Check();
  alertOne.classList.add("alert-danger");
  alertOne.textContent = "A simple danger alert—check it out!";
});
taskFour[0].addEventListener("focusout", function () {
  Check();
  alertOne.classList.remove("alert-danger");
  alertOne.textContent = "";
});
//

// Завдання 5
const btnDark = document.querySelector(".btn-dark");
const btnLight = document.querySelector(".btn-light");
btnLight.style.display = "none";
function toggleMode() {
  document.body.classList.toggle("dark-mode");

  const isDarkMode = document.body.classList.contains("dark-mode");

  if (isDarkMode) {
    btnDark.style.display = "none";
    btnLight.style.display = "inline-block";
  } else {
    btnDark.style.display = "inline-block";
    btnLight.style.display = "none";
  }
}

btnDark.addEventListener("click", toggleMode);
btnLight.addEventListener("click", toggleMode);
//

// Завдання 6
const btnInfo = document.querySelector(".btn-info");
btnInfo.addEventListener("keypress", function (e) {
  Check();
  if (e.key === "Enter") {
    e.preventDefault();
    alertOne.classList.add("alert-info");
    alertOne.textContent = "A simple info alert—check it out!";
  } else {
    Check();
  }
});
//

// Завдання 7
const cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {
  const cardTitle = cards[i].querySelector(".card-title");
  console.log(cardTitle.textContent);
}
// а можна ще таким чином
// const cards = document.querySelectorAll(".card");
// for (const card of cards) {
//   console.log(card.querySelector(".card-title").textContent);
// }
//

// Завдання 8
// Селектори знайшов на рядку 95
for (let i = 0; i < cards.length; i++) {
  const btnAddToCard = cards[i].querySelector(".add-to-cart");
  btnAddToCard.addEventListener("click", function () {
    console.log(cards[i].querySelector(".card-title").textContent);
  });
}
