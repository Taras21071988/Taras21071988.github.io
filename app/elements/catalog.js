const catalog = `
<section id="descr">
<div class="container">
  <aside>
    <h2 class="text-uppercase">Categories</h2>
    <div class="text-white">
      <strong class="text-uppercase">Fashion &amp; Acc</strong>
    </div>
    <ul class="list-unstyled categories gp-2">
      <li>
        <a
          class="categories__link"
          href="#"
          
          >Women's T-Shirts</a
        >
      </li>
      <li>
        <a
          class="categories__link"
          href="#"
          
          >Men's T-Shirts</a
        >
      </li>
      <li>
        <a
          class="categories__link"
          href="#"
          
          >Dresses</a
        >
      </li>
      <li>
        <a
          class="categories__link"
          href="#"
          
          >Novelty socks</a
        >
      </li>
      <li>
        <a
          class="categories__link"
          href="#"
          
          >Women's sunglasses</a
        >
      </li>
      <li>
        <a
          class="categories__link"
          href="#"
          
          >Men's sunglasses</a
        >
      </li>
      <li>
        <a
          class="reset__all"
          href="#"
          
          >Reset All</a
        >
      </li>
    </ul>
  </aside>
  <div class="descr__wrapper" id="descr__wrapper">
    <div class="products__wrapper" id="products__wrapper">
    </div>
            
</div>
 </div>
</section>
<dialog id="details">
      <a href="#!" title="Close" class="close fas fa-times"></a>
      <span class="dialog-main"></span> 
    </dialog>
`;

function catalogFunc() {
  const itemInfo = (item) => `
      <div class="product__item"  data-id="${item.id}">
        <div class="icons__wrapper">
            <i class="far fa-heart item__favorite"></i>
            <i class="far fa-eye item__info-icon"></i>
        </div>
        <img class="card__img" src=${item.image}>
        <div class="item__text-wrapper">
        <h3 class="item__title">${item.name}</h3>
        <p class="item__price">Цена: $${item.price}</p></div>
        
        <button class="item__btn-buy">Buy</button>
      </div>
    `;

  class NewProduct {
    constructor(item) {
      this.id = item.id;
      this.name = item.name;
      this.image = item.image;
      this.price = item.price;
      this.category = item.category;
      this.text = item.text;
      this.quantity = 1;
    }
  }

  class NewProductForCart {
    constructor(item) {
      this.id = item.id;
      this.name = item.name;
      this.price = item.price;
      this.quantity = item.quantity;
    }
  }

  let products = [];
  function getData() {
    let productsData = JSON.parse(localStorage.getItem("ProdactsData"));
    console.log(productsData);
    productsData.forEach((item) => {
      let product = new NewProduct(item);
      products.push(product);
    });
    renderAll(products);
  }
  function addToCart(item) {
    const newItem = new NewProductForCart(item);
    let userData = JSON.parse(localStorage.getItem("userData"));

    if (!userData) {
      alert("Для початку потрібно увійти під своїм логіном");
    } else {
      let itemExists = false;
      userData.buyList.forEach((cartItem) => {
        if (cartItem.id === newItem.id) {
          cartItem.quantity += newItem.quantity;
          itemExists = true;
        }
      });

      if (!itemExists) {
        userData.buyList.push(newItem);
      }
      localStorage.setItem("userData", JSON.stringify(userData));
      renderNumb();
    }
  }

  function showProductDetails(item) {
    const dialogMain = document.querySelector(".dialog-main");
    dialogMain.innerHTML = `
      <h2>${item.name}</h2>
      <p>Price: $${item.price}</p>
      <p>Description: ${item.text}</p>
      <div class="buttons__wrapper">
      <button id="decr">-</button>
      <input class="quantity-result"
          type="number" 
          value="${item.quantity}"
          min="1"
          max="10"
          required 
          />
      <button id="incr">+</button>
      <button id ="btnBuy">Buy</button>
      </div>
      
    `;
    const decr = document.getElementById("decr");
    const incr = document.getElementById("incr");
    const quantityResult = document.querySelector(".quantity-result");
    const btnBuy = document.getElementById("btnBuy");

    decr.addEventListener("click", () => handleValueQuanty("decrease"));
    incr.addEventListener("click", () => handleValueQuanty("increase"));
    quantityResult.addEventListener("change", () => updateItemQuantity());

    function handleValueQuanty(method) {
      const quantityResult = document.querySelector(".quantity-result");
      let currentValue = parseInt(quantityResult.value);
      if (method === "increase" && currentValue < 10) {
        quantityResult.value = currentValue + 1;
      } else if (method === "decrease" && currentValue > 1) {
        quantityResult.value = currentValue - 1;
      }
      updateItemQuantity();
    }
    function updateItemQuantity() {
      item.quantity = parseInt(quantityResult.value);
    }
    function resetItemQuantity() {
      item.quantity = 1;
    }
    btnBuy.addEventListener("click", () => {
      addToCart(item);
      resetItemQuantity();
      closeDialog();
    });
  }
  const dialog = document.getElementById("details");
  const closeButton = dialog.querySelector(".close");
  function openDialog() {
    dialog.showModal();
  }

  function closeDialog() {
    dialog.close();
  }
  const descrWrapper = document.getElementById("products__wrapper");
  function handleCategoryFilter(event) {
    const category = event.target.textContent.trim();
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    descrWrapper.innerHTML = "";
    renderAll(filteredProducts);
  }
  function renderAll(products) {
    products.forEach((product) => {
      descrWrapper.innerHTML += itemInfo(product);
    });
    const detailsShow = document.querySelectorAll(".item__info-icon");
    detailsShow.forEach((item) => {
      item.addEventListener("click", function () {
        const productId =
          this.closest(".product__item").getAttribute("data-id");
        const selectedProduct = products.find(
          (product) => product.id === parseInt(productId)
        );
        showProductDetails(selectedProduct);
        openDialog();
      });
    });
    closeButton.addEventListener("click", function (e) {
      e.preventDefault();
      closeDialog();
    });

    let addToFavorite = document.querySelectorAll(".item__favorite");
    let loginedUser = JSON.parse(localStorage.getItem("userData"));

    let btnBuyProduct = document.querySelectorAll(".item__btn-buy");

    btnBuyProduct.forEach((item) => {
      const productId = item.closest(".product__item").getAttribute("data-id");
      const selectedProduct = products.find(
        (product) => product.id === parseInt(productId)
      );
      item.addEventListener("click", function (e) {
        e.preventDefault();

        addToCart(selectedProduct);
      });
    });

    addToFavorite.forEach((item) => {
      const productId = item.closest(".product__item").getAttribute("data-id");
      const selectedProduct = products.find(
        (product) => product.id === parseInt(productId)
      );

      if (loginedUser && loginedUser.favoriteList) {
        loginedUser.favoriteList.forEach((favoriteProduct) => {
          if (favoriteProduct.id === selectedProduct.id) {
            item.classList.add("added");
          }
        });
      }

      item.addEventListener("click", function (e) {
        e.preventDefault();
        if (!loginedUser) {
          alert(
            "Для того чтобы добавить в избранное, пожалуйста, войдите под своим логином."
          );
          return;
        }

        const productId = item
          .closest(".product__item")
          .getAttribute("data-id");
        const selectedProduct = products.find(
          (product) => product.id === parseInt(productId)
        );

        loginedUser.favoriteList = loginedUser.favoriteList || [];
        const isAlreadyAdded = loginedUser.favoriteList.some(
          (product) => product.id === selectedProduct.id
        );

        if (isAlreadyAdded) {
          alert("Цей елемент уже додано до вибраного");
          return;
        }

        loginedUser.favoriteList.push(selectedProduct);
        localStorage.setItem("userData", JSON.stringify(loginedUser));
        this.classList.add("added");
      });
    });

    let btnSort = document.querySelectorAll(".categories__link");
    btnSort.forEach((btn) => {
      btn.removeEventListener("click", handleCategoryFilter);
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        handleCategoryFilter(e);
      });
    });
  }
  getData();
}
