//Створив окремі секції для виведення завдань на сторінку, щоб не навалювати все в body
const tackOne = document.getElementById("taskOne");
const taskTwo = document.getElementById("taskTwo");
const taskThree = document.getElementById("taskThree");

// Завдання 1

const list = ["html", "css", "javascript", "react.js"];
const ul = document.createElement("ul");
list.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
});

tackOne.appendChild(ul);

//

// Завдання 2

const listWithHref = [
  { html: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { css: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { "react.js": "https://react.dev" },
];
const orderedList = document.createElement("ol");
listWithHref.forEach((obj) => {
  const liItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = Object.values(obj)[0];
  link.textContent = Object.keys(obj)[0];
  liItem.appendChild(link);
  orderedList.appendChild(liItem);
});

taskTwo.appendChild(orderedList);

//

// Завдання 3

const students = [
  { firstName: "Tom", lastName: "Cat", degree: 230 },
  { firstName: "Nary", lastName: "Ann", degree: 336 },
  { firstName: "John", lastName: "Doe", degree: 400 },
  { firstName: "James", lastName: "Bond", degree: 700 },
];

function createTable() {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const headers = ["First Name", "Last Name", "Degree"];

  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);
  const tbody = document.createElement("tbody");

  students.forEach((student) => {
    const row = document.createElement("tr");
    const { firstName, lastName, degree } = student;
    row.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${degree}</td>
        `;
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
  taskThree.appendChild(table);
}
createTable();
// 