const cart = `<section id="descr">
<div class="container">
  <div class="descr__wrapper" id="contact">
    <div class="cart__wrapper">
        <div class="table">
            <div class="row row__header">
              <div class="cell">Image</div>
                <div class="cell">Product</div>
                <div class="cell">Price</div>
                <div class="cell">Quantity</div>
                <div class="cell">Total</div>
                <div class="cell">Action</div>
            </div>
        </div>
        <div class="pricing__wrapper">
            <h3 class="pricing__title">The total cost of your order :</h3>
            <div class="pricing__totat">0</div>
            
        </div>
    
    </div>
  </div>
</div>
</section>
`;

function getTotal() {
  const totalsForAllRow = document.querySelectorAll(".total");
  let sum = 0;
  totalsForAllRow.forEach((item) => {
    const value = parseFloat(item.textContent);
    if (!isNaN(value)) {
      sum += value;
    }
  });
  console.log("Total sum:", sum);
  const pricing__totat = document.querySelector(".pricing__totat");
  pricing__totat.textContent = sum;

  return sum;
}

const cartItemRender = (item, totalSum) => {
  const row = document.createElement("div");
  row.classList.add("row");
  row.dataset.id = item.id;

  row.innerHTML = `
        <div class="cell">
        <img class="cart__img" src=${item.image}>
        </div>
        <div class="cell">${item.name}</div>
        <div class="cell price">${item.price}</div>
        <div class="cell">
            <div class="quantity__wrapper">
                <button class="quan__decr">-</button>
                <span class="quantity">${item.quantity}</span>
             
                <button class="quan__incr">+</button>
             </div>
        </div>
        <div class="cell total">${totalPrice(item.price, item.quantity)}</div>
        <div class="cell">
            <button class="action__button">Remove</button>
        </div>
    `;

  function totalPrice(price, quantity) {
    let total = price * quantity;

    return total;
  }

  const tableContainer = document.querySelector(".table");

  tableContainer.appendChild(row);

  const decreaseButton = row.querySelector(".quan__decr");
  const increaseButton = row.querySelector(".quan__incr");
  const quantitySpan = row.querySelector(".quantity");
  const removeButton = row.querySelector(".action__button");

  decreaseButton.addEventListener("click", () => {
    if (item.quantity > 1) {
      item.quantity--;
      quantitySpan.textContent = item.quantity;
      updateTotalPrice();
      updateLocalStorage();
    }
    getTotal();
  });

  increaseButton.addEventListener("click", () => {
    item.quantity++;
    quantitySpan.textContent = item.quantity;
    updateTotalPrice();
    updateLocalStorage();
    getTotal();
  });

  removeButton.addEventListener("click", () => {
    row.remove();
    removeFromLocalStorage();
    getTotal();
    renderNumb();
  });

  function updateLocalStorage() {
    const cartDataItem = JSON.parse(localStorage.getItem("userData"));

    const index = cartDataItem.buyList.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (index !== -1) {
      cartDataItem.buyList[index].quantity = item.quantity;
      localStorage.setItem("userData", JSON.stringify(cartDataItem));
    }
  }

  function removeFromLocalStorage() {
    const cartDataItem = JSON.parse(localStorage.getItem("userData"));
    cartDataItem.buyList = cartDataItem.buyList.filter(
      (cartItem) => cartItem.id !== item.id
    );
    localStorage.setItem("userData", JSON.stringify(cartDataItem));
  }

  function updateTotalPrice() {
    const totalPriceCell = row.querySelector(".total");
    totalPriceCell.textContent = totalPrice(item.price, item.quantity);
  }
};

function renderCartItems() {
  const cartDataItem = JSON.parse(localStorage.getItem("userData"));
  if (!cartDataItem) {
  } else {
    let totalSum = 0;
    cartDataItem.buyList.forEach((item) => {
      totalSum += item.price * item.quantity;
      cartItemRender(item, totalSum);
    });
    getTotal();
  }
}
