const section = document.querySelector("section");
const masterKey =
  "$2a$10$3AK4oCmUXowJtaZ1b60Wi.s0Pa4RJ/uZ2rHsCLbKohxTPqQmt7dLq";

const binId = `65d477b61f5677401f31cdd7/latest`;

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

async function fetchData() {
  try {
    const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
      method: "GET",
      headers: {
        "X-Master-Key": masterKey,
      },
    });
    const data = await response.json();
    console.log(data.record.record[0]);
    return data.record.record[0];
  } catch (error) {
    console.error(error);
  }
}

function renderButtons(data) {
  const weeks = Object.keys(data);

  weeks.forEach((week, weekIndex) => {
    let contentItem = document.querySelector(
      `.week__content[data-id="${weekIndex}"] .content__item`
    );

    if (!contentItem) {
      contentItem = document.createElement("div");
      contentItem.className = "content__item";
    }

    const ulElement = document.createElement("ul");
    ulElement.className = "lecture__list";

    data[week].forEach((item, itemIndex) => {
      const liElement = document.createElement("li");
      liElement.className = "lecture__list-item";

      if (item.url) {
        const aElement = document.createElement("a");
        aElement.className = "list__item-link";
        aElement.href = item.url;
        aElement.textContent = item.name;
        liElement.appendChild(aElement);
      } else {
        const pItem = document.createElement("p");
        pItem.textContent = "Урок пока не был проведен";
        liElement.appendChild(pItem);
      }

      ulElement.appendChild(liElement);
    });

    contentItem.appendChild(ulElement);

    const currentWeekContent = document.querySelector(
      `.week__content[data-id="${weekIndex}"]`
    );
    if (currentWeekContent) {
      currentWeekContent.appendChild(contentItem);
    }
  });
}

async function delayExecution() {
  await new Promise((resolve) => setTimeout(resolve, 100));
}
async function fetchDataAndRenderButtons() {
  await delayExecution();
  const jsonData = await fetchData();
  if (jsonData !== undefined && jsonData !== null) {
    renderButtons(jsonData);
  } else {
    console.error("Данные не были успешно загружены.");
  }
}

fetchDataAndRenderButtons();
