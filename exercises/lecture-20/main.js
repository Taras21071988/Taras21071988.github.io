// Завдання 1

const person = {
  name: "Alex",
  age: 20,
};
console.log(person);
console.log("Name:", person.name);
console.log("Age:", person.name);
//

// Завдання 2

function rename(obj) {
  obj.name = {};
  obj.name.firstName = "Alex";
  obj.name.lastName = "Pupkin";
  return console.log(obj);
}
rename(person);
//

// Завдання 3 + 4

const personNew = {
  name: {
    firstName: "Alex",
    lastName: "Pupkin",
  },
  age: 20,
  bio: function () {
    return console.log(
      "Name:",
      this.name.firstName,
      this.name.lastName,
      ",",
      "Age:",
      this.age
    );
  },
  introduceSelf: function () {
    return console.log("Hi! I'm", this.name.firstName);
  },
};
personNew.bio();
personNew.introduceSelf();
//

// Завдання 5

function createPerson(name) {
  return {
    name: name,
    introduceSelf: function () {
      return console.log("Hi! I'm", this.name);
    },
  };
}

let personAlex = createPerson("Alex!");
let personDenis = createPerson("Denis!");

personAlex.introduceSelf();
personDenis.introduceSelf();
//

//Завдання 6

// function Person(name) {
//   const obj = {};
//   obj.name = name;
//   obj.introduceSelf = function () {
//     console.log("Hi! I'm", this.name);
//   };
//   return obj;
// }
// let mary = new Person("Mery");
// let tom = new Person("Tom");

// mary.introduceSelf();
// tom.introduceSelf();
//
function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log("Hi! I'm", this.name);
  };
}
let mary = new Person("Mery");
let tom = new Person("Tom");

mary.introduceSelf();
tom.introduceSelf();

// Завдання 7 "Тут немного не понял - надеюсь что верно выполнил"
if ("prop" in mary) {
  alert("There's a prop in Mary");
} else {
  alert("There's no prop in Mary");
}
//

// Завдання 8 - сделал не вывод на консоль , а вывод на страницу при нажатии на кнопку выбора языка

const DirtyMartini = {
  gin: 6,
  vermouth: 1,
  olive_brine: 1,
  olives: 4,
  quotient: 28.4131,
  excuse_my_french() {
    return `
        <div>
            <h2>ingredients:</h2>
            <p>${this.gin * this.quotient}  ml de gin</p>
            <p>${this.vermouth} trait de vermouth sec (0.0351951ml)</p>
            <p>${
              this.olive_brine * this.quotient
            } ml de saumure du pot d'olive</p>
            <p>${this.olives} olives vertes farcies</p>
        </div>
    `;
  },
  english_please() {
    return `
        <div>
            <h2>ingredients:</h2>
            <p>${this.gin} fluid ounces gin</p>
            <p>${this.vermouth} dash dry vermouth (0.0351951ml)</p>
            <p>${this.olive_brine} fluid ounce brine from olive jar</p>
            <p>${this.olives} stuffed green olives</p>
        </div>
    `;
  },
};

const engBtn = document.getElementById("english");
const frnBtn = document.getElementById("france");
const contentWrapper = document.getElementById("content");

engBtn.addEventListener("click", function (e) {
  e.preventDefault();
  contentWrapper.innerHTML = DirtyMartini.english_please();
});
frnBtn.addEventListener("click", function (e) {
  e.preventDefault();
  contentWrapper.innerHTML = DirtyMartini.excuse_my_french();
});
//
