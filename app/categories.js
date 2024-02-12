const section = document.getElementById("descr__wrapper");

let products = [
  {
    category: "Women's T-Shirts",
    items: [
      { name: "Red Women's T-Shirt", price: 20 },
      { name: "Blue Women's T-Shirt", price: 25 },
      { name: "Green Women's T-Shirt", price: 22 },
    ],
  },
  {
    category: "Men's T-Shirts",
    items: [
      { name: "Black Men's T-Shirt", price: 30 },
      { name: "White Men's T-Shirt", price: 28 },
      { name: "Gray Men's T-Shirt", price: 26 },
    ],
  },
  {
    category: "Dresses",
    items: [
      { name: "Summer Dress", price: 50 },
      { name: "Evening Dress", price: 60 },
      { name: "Casual Dress", price: 45 },
    ],
  },
  {
    category: "Novelty socks",
    items: [
      { name: "Funny Novelty Socks", price: 5 },
      { name: "Colorful Novelty Socks", price: 4 },
      { name: "Patterned Novelty Socks", price: 6 },
    ],
  },
  {
    category: "Women's sunglasses",
    items: [
      { name: "Cat Eye Sunglasses", price: 30 },
      { name: "Aviator Sunglasses", price: 35 },
      { name: "Round Sunglasses", price: 32 },
    ],
  },
  {
    category: "Men's sunglasses",
    items: [
      { name: "Wayfarer Sunglasses", price: 40 },
      { name: "Polarized Sunglasses", price: 45 },
      { name: "Sport Sunglasses", price: 38 },
    ],
  },
];

function handleItemClick(categoryName) {
  section.innerHTML = "";
  let selectedCategory = products.find(
    (category) => category.category === categoryName
  );

  let productInfo = document.createElement("div");
  productInfo.classList.add("product__wrapper");
  let productContent = document.createElement("div");
  productContent.classList.add("product__content");
  if (selectedCategory) {
    let categoryHeading = document.createElement("h2");
    categoryHeading.textContent = selectedCategory.category;
    productInfo.appendChild(categoryHeading);

    selectedCategory.items.forEach((item) => {
      let itemInfo = document.createElement("div");
      itemInfo.classList.add("product__item");
      let itemTitle = document.createElement("h3");
      itemTitle.textContent = item.name;
      let itemPrice = document.createElement("p");
      itemPrice.textContent = " Цена: $" + item.price;

      itemInfo.appendChild(itemTitle);
      itemInfo.appendChild(itemPrice);
      productInfo.appendChild(productContent);
      productContent.appendChild(itemInfo);
    });
  } else {
    productInfo.textContent = "Информация о товаре не найдена.";
  }

  section.appendChild(productInfo);
}
