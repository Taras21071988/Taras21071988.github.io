// Завдання 1
setTimeout(() => {
  const firstNameInput = document.querySelector("#demoForm [name='firstName']");
  const lastNameInput = document.querySelector("#demoForm [name='lastName']");
  let output = document.getElementById("waiting");
  if (firstNameInput && lastNameInput) {
    output.textContent =
      !firstNameInput.value && !lastNameInput.value
        ? "I'm miss You"
        : `Hello ${firstNameInput.value} ${lastNameInput.value}`;
  }
}, 10000);
//

// Завдання 2
// let url = "https://jsonplaceholder.typicode.com/posts";
// let xhr = new XMLHttpRequest();

// xhr.open("GET", url);
// xhr.onload = function () {
//   let items = JSON.parse(xhr.responseText);
//   console.log(items);// зробив консоль для того, щоб подивитися, що прилітає у змінну
//   const demo = document.getElementById("demo");
//   let template = (item) => `
//     <p>Post №: ${item.id}</p>
//     <h3>${item.title}</h3>
//     <div>${item.body}</div>
//     `;
//   let newList = items.map((item) => {
//     return template(item);
//   });
//   demo.innerHTML = newList.join("");
// };
// xhr.send();
//

let page = 1;
let itemsPage = 10;
let isLoading = false;

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight &&
    !isLoading
  ) {
    isLoading = true;
    page++;
    loadinghData();
  }
});

function loadinghData() {
  const url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${itemsPage}`;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = function () {
    const items = JSON.parse(xhr.responseText);
    displayItems(items);
    isLoading = false;
  };
  xhr.send();
}

function displayItems(items) {
  const demo = document.getElementById("demo");
  let template = (item) => `
    <p>Post №: ${item.id}</p>
    <h3>${item.title}</h3>
    <div>${item.body}</div>
  `;
  let newList = items.map((item) => {
    return template(item);
  });
  demo.innerHTML += newList.join("");
}
loadinghData();
