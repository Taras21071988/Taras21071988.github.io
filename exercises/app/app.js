const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".s-button-next",
    prevEl: ".s-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const tabs = document.querySelectorAll(".lecture__week-item");
const content = document.querySelectorAll(".week__content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetId = tab.getAttribute("data-target-id");
    tabs.forEach((tab) => tab.classList.remove("active"));
    content.forEach((item) => item.classList.remove("selected"));
    tab.classList.add("active");
    document
      .querySelector(`.week__content[data-id="${targetId}"]`)
      .classList.add("selected");
  });
});
