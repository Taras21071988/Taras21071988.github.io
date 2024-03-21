// Завдання 1

const h1El = document.getElementsByTagName("h1");
console.log("Type - ", typeof h1El);
console.log("Length - ", h1El.length);

for (let i = 0; i < h1El.length; i++) {
  console.log("Elements - ", h1El[i]);
}
// але цикл for of буде трохи коротшим і читатися краще буде

// for (const el of h1El) {
//   console.log("Elements - ", el);
// }

//

// Завдання 2

const pFirst = document.querySelector("#p1");
pFirst.style.backgroundColor = "gold";

//

// Завдання 3

const pSecond = document.querySelector("#p2");
pSecond.style.cssText = "background-color:gold; color: blue; font-size: 2rem;";

//

// Завдання 4

const pThree = document.querySelector("#p3");
pThree.classList.add("third");

//

// Завдання 5

const pFour = document.querySelector("#p4");
pFour.classList.add("fourth", "border");

//

// Завдання 6

const cont = document.querySelectorAll(".container");

for (let i = 0; i < cont.length; i++) {
  const fChild = cont[i].firstElementChild;
  console.log("First element - ", fChild);
}
//  Або можно так
// for (container of cont) {
//   let fChild = container.firstElementChild;
//   console.log("First element - ", fChild);
// }

//

// Завдання 7
// Всі елементи знайшов у рядку 50
for (let i = 0; i < cont.length; i++) {
  const firstChildContent = cont[i].firstElementChild.textContent;
  console.log("Contents: ", firstChildContent);
}

//

// Завдання 8

const headers = document.querySelectorAll(".container header");
console.log(headers);
const classes = ["first", "second", "third", "fourth"];

for (let i = 0; i < headers.length; i++) {
  const header = headers[i].querySelector("h1");
  const origId = header.id;
  const origClass = header.className;

  if (i === 0) {
    header.classList.add(classes[i]);
  } else if (i === 1) {
    header.outerHTML =
      "<h2 id='" +
      origId +
      "' class='" +
      origClass +
      " " +
      classes[i] +
      "'>" +
      header.innerHTML +
      "</h2>";
  } else if (i === 2) {
    header.outerHTML =
      "<h3 id='" +
      origId +
      "' class='" +
      origClass +
      " " +
      classes[i] +
      "'>" +
      header.innerHTML +
      "</h3>";
  } else if (i === 3) {
    header.outerHTML =
      "<h4 id='" +
      origId +
      "' class='" +
      origClass +
      " " +
      classes[i] +
      "'>" +
      header.innerHTML +
      "</h4>";
  }
}
// Залишив початкові id і class у всіх елементів, якщо буде потрібно то можна легко виправити під вимоги залишити тільки у четвертого
