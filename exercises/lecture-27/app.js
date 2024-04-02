const ul = document.querySelector("ul");
const input = document.getElementById("item");

let itemsArray = JSON.parse(localStorage.getItem("items")) || [];
console.log(itemsArray);

function addTask(text) {
  const li = document.createElement("li");
  li.classList.add("list__item");
  const checkbox = document.createElement("input");
  checkbox.classList.add("checkbox");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    span.style.color = this.checked ? "green" : "black";
    if (this.checked) {
      this.disabled = true;
    }
  });
  li.appendChild(checkbox);
  const span = document.createElement("span");
  span.classList.add("item__text");
  span.textContent = text;
  li.appendChild(span);

  const btn = document.createElement("button");
  btn.textContent = "remove";
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const index = itemsArray.findIndex((item) => (item.text = text));
    console.log(index);
    itemsArray.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    ul.removeChild(li);
  });

  li.appendChild(btn);
  ul.appendChild(li);
}

itemsArray.forEach((task) => addTask(task));

function add() {
  const taskText = input.value.trim();
  if (taskText !== "") {
    itemsArray.push(taskText);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    addTask(taskText);
    input.value = "";
    alert("Task add");
  }
}

function del() {
  localStorage.removeItem("items");
  itemsArray = [];
  ul.innerHTML = "";
}
