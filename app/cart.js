let products = [
  { name: "Продукт 1", price: 10, quantity: 2 },
  { name: "Продукт 2", price: 20, quantity: 1 },
  { name: "Продукт 3", price: 15, quantity: 3 },
  { name: "Продукт 4", price: 25, quantity: 4 },
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
