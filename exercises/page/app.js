const exitBtn = document.querySelector(".exit__btn");
const masterKey =
  "$2a$10$3AK4oCmUXowJtaZ1b60Wi.s0Pa4RJ/uZ2rHsCLbKohxTPqQmt7dLq";

const binId = `65d477b61f5677401f31cdd7/latest`;

exitBtn.addEventListener("click", function () {
  localStorage.removeItem("admin");
  window.location.href = "../index.html";
});

let jsonData = [];

fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
  method: "GET",
  headers: {
    "X-Master-Key": masterKey,
  },
})
  .then((response) => response.json())
  .then((data) => {
    jsonData = data.record.record;
    displayData(jsonData);
    console.log(jsonData);
  })
  .catch((error) => {
    console.error(error);
  });

function displayData(data) {
  const lectures = data[0];
  const lectureInputsContainer = document.getElementById("lectureInputs");
  for (const week in lectures) {
    if (lectures.hasOwnProperty(week)) {
      const lecturesInWeek = lectures[week];

      lecturesInWeek.forEach((lecture) => {
        const container = document.createElement("div");
        container.classList.add("lecture__wrapper");

        const input = document.createElement("input");
        input.classList.add("lecture__input");
        input.type = "text";
        input.value = lecture.url;

        const nameLabel = document.createElement("label");
        nameLabel.classList.add("lecture__label");
        nameLabel.textContent = lecture.name;

        container.appendChild(nameLabel);
        container.appendChild(input);

        input.addEventListener("input", (event) => {
          lecture.url = event.target.value;
        });

        lectureInputsContainer.appendChild(container);
      });
    }
  }
}

const saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", () => {
  fetch("https://api.jsonbin.io/v3/b/65d477b61f5677401f31cdd7", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key":
        "$2a$10$3AK4oCmUXowJtaZ1b60Wi.s0Pa4RJ/uZ2rHsCLbKohxTPqQmt7dLq",
    },
    body: JSON.stringify({ record: jsonData }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to save changes");
      }
      console.log("Changes saved successfully");
    })
    .catch((error) => {
      console.error(error);
    });
});
