const section = document.querySelector("section");
// поки не зміг розв'язати проблему з тим, щоб не створювати фіксовану кількість елементів
for (let i = 0; i < 250; i++) {
  const span = document.createElement("span");
  section.appendChild(span);
}

const swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 3,
  loop: true,
  navigation: {
    nextEl: ".s-button-next",
    prevEl: ".s-button-prev",
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
