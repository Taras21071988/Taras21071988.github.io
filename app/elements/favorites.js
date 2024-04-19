const favorites = `
<section id="descr">
        <div class="container">
        <h2 class="favorites__title">Тут ви можете подивитися товари, які Ви додали в обране:</h2>
          <div class="descr__wrapper">
          <div class="favorites__wrapper"></div>
                       
          </div>
        </div>
      </section>
`;

function renderFavorites() {
  const favoritesData = JSON.parse(localStorage.getItem("userData"));
  const favoritesWrapper = document.querySelector(".favorites__wrapper");
  const detailFavorites = (item) => `
  <div class="product__item"  data-id="${item.id}">
        <h3 class="item__title">${item.name}</h3>
        <p class="item__price">Цена: $${item.price}</p>
        <button class="btn-delete-favorite">Delete item</button>
        <button class="item__btn-buy">Buy</button>
  </div>
  `;
  if (!favoritesData) {
    favoritesWrapper.innerHTML = `<h2>Виконайте вхід будь ласка</h2>`;
    return;
  } else if (favoritesData.favoriteList.length === 0) {
    favoritesWrapper.innerHTML = `<h2>Додайте спочатку елементи</h2>`;
  } else {
    favoritesData.favoriteList.forEach((item) => {
      favoritesWrapper.innerHTML += detailFavorites(item);
    });
  }
  if (!favoritesData) {
    return;
  } else {
    function removeFromFavorites(productId) {
      const index = favoritesData.favoriteList.findIndex(
        (product) => product.id === productId
      );
      if (index !== -1) {
        favoritesData.favoriteList.splice(index, 1);
        localStorage.setItem("userData", JSON.stringify(favoritesData));
      }
    }

    function handleDeleteButtonClick(event) {
      const button = event.target;
      const productItem = button.closest(".product__item");
      if (!productItem) return;
      const productId = parseInt(productItem.getAttribute("data-id"));
      removeFromFavorites(productId);
      productItem.remove();
    }

    document.addEventListener("click", function (event) {
      if (event.target.matches(".btn-delete-favorite")) {
        handleDeleteButtonClick(event);
      }
    });
  }
}
