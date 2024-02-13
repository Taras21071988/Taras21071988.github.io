const section = document.getElementById("descr__wrapper");

let products = [
  {
    category: "Women's T-Shirts",
    items: [
      {
        name: "Red Women's T-Shirt",
        price: 20,
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere tempore ducimus rerum animi architecto impedit, voluptatemnecessitatibus autem distinctio tempora! Aut consectetur architecto cum quaerat minus numquam delectus, nam ipsum.",
      },
      {
        name: "Blue Women's T-Shirt",
        price: 25,
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere tempore ducimus rerum animi architecto impedit, voluptatem necessitatibus autem distinctio tempora! Aut consectetur architecto cum quaerat minus numquam delectus, nam ipsum.",
      },
      {
        name: "Green Women's T-Shirt",
        price: 22,
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere tempore ducimus rerum animi architecto impedit, voluptatemnecessitatibus autem distinctio tempora! Aut consectetur architecto cum quaerat minus numquam delectus, nam ipsum.",
      },
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
      itemTitle.classList.add("item__title");
      itemTitle.textContent = item.name;

      let itemPrice = document.createElement("p");
      itemPrice.classList.add("item__price");
      itemPrice.textContent = " Цена: $" + item.price;

      let itemText = document.createElement("p");
      itemText.classList.add("item__text");
      itemText.textContent = item.text;

      let itemBtn = document.createElement("button");
      itemBtn.classList.add("item__btn-buy");
      itemBtn.textContent = "Buy";

      itemInfo.appendChild(itemTitle);
      itemInfo.appendChild(itemPrice);
      itemInfo.appendChild(itemText);

      itemInfo.appendChild(itemBtn);
      productInfo.appendChild(productContent);
      productContent.appendChild(itemInfo);
    });
  } else {
    productInfo.textContent = "Информация о товаре не найдена.";
  }

  section.appendChild(productInfo);
}
