const userName = document.querySelector(".user__name");
if (!localStorage.getItem("name")) {
  alert("Не надо хитрить!");
  window.location.href = "/index.html";
} else {
}

let nameUser = localStorage.getItem("name");
userName.innerHTML = `Ваши товары ${nameUser}`;

let products = [
  { name: "Product 1", price: 10, quantity: 2 },
  { name: "Product 2", price: 20, quantity: 1 },
  { name: "Product 3", price: 15, quantity: 3 },
  { name: "Product 4", price: 25, quantity: 4 },
];
let tableWrapper = document.getElementById("table__wrapper");

products.forEach(function (product) {
  let row = document.createElement("div");
  row.classList.add("row");

  row.innerHTML = `
  <div class="cell">${product.name}</div>
  <div class="cell">${product.price}</div>
  <div class="cell">${product.quantity}</div>
  <div class="cell">${product.price * product.quantity}</div>
  `;
  tableWrapper.appendChild(row);
});

console.log(products);
