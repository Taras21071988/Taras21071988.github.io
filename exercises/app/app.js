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
