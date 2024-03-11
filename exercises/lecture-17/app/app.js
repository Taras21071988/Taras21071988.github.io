// Завдання 1
let x = 3;
let y = 4;

x == 3; // true
x === "3"; // false
x != 5; // true
x !== "5"; // true
// X !== 3; // true  - закоментил чтобы в дальнейшем не выкидывало ошибку
y > 5; // false
y >= 3; // true
y < 5; // true
y <= 2; // false
1 == true; // true
null == undefined; //true
NaN == NaN; // false
//

// Завдання 2

{
  let x = 3;
  let y = 4;
  let z = 5;

  x ||= y; // x=3
  x || (y = z); //x=3
  x &&= y; // x=4
  x && (y = z); // Bираз повертає 5
  x ??= y; // x остается =4
  x ?? (y = z); // Bираз повертає 5
}
//

// Завдання 3

function guesscheck() {
  let chosed = 3;
  let number = prompt("Введіть число:");
  if (number > chosed) {
    alert("The number is too long");
  } else if (number < chosed) {
    alert("The number is short");
  } else {
    alert("Congratulations, You did it!");
  }
}
const btnGuess = document.getElementById("guess");
btnGuess.addEventListener("click", function (e) {
  e.preventDefault();
  guesscheck();
});
//

// Завдання 3.1 більш схоже на гру з вгадуванням числа
let numbChose;
function nRand() {
  return (numbChose = Math.floor(Math.random() * 10) + 1);
}
nRand();
function numberCheck() {
  console.log(numbChose);
  let number = prompt("Введіть число:");
  if (number > numbChose) {
    alert("The number is too long");
  } else if (number < numbChose) {
    alert("The number is short");
  } else {
    alert("Congratulations, You did it!");
    nRand();
  }
}
const btnGame = document.getElementById("game");
btnGame.addEventListener("click", function (e) {
  e.preventDefault();
  numberCheck();
});

const btnGenerator = document.getElementById("rand");
btnGenerator.addEventListener("click", function (e) {
  e.preventDefault();
  nRand();
  console.log(numbChose);
});
//

// Завдання 4
let week = [
  "monday",
  "понеділок",
  "tuesday",
  "вівторок",
  "wednesday",
  "середа",
  "thursday",
  "четвер",
  "friday",
  "п'ятниця",
  "saturday",
  "субота",
  "sunday",
  "неділя",
];
function dayIf(week) {
  let day = prompt("Please enter the day of the week:");
  day = day.toLowerCase();
  if (day === "monday" || day === "понеділок") {
    alert("Start of the work week!");
  } else if (day === "friday" || day === "П'ятниця") {
    alert("End of the work week!");
  } else if (week.includes(day)) {
    alert("A regular day");
  } else {
    alert("This is not a day of the week");
  }
}
const btnDay = document.getElementById("dayOfWeek");
btnDay.addEventListener("click", function (e) {
  e.preventDefault();
  dayIf(week);
});
// друга частина

function daySwitch(week) {
  let day = prompt("Please enter the day of the week:");
  day = day.toLowerCase();

  switch (day) {
    case "monday":
    case "понеділок":
      alert("Start of the work week!");
      break;
    case "friday":
    case "п'ятниця":
      alert("End of the work week!");
      break;
    default:
      if (week.includes(day)) {
        alert("A regular day");
      } else {
        alert("This is not a day of the week");
      }
  }
}
const btnDaySwitch = document.getElementById("dayOfWeekSwitch");
btnDaySwitch.addEventListener("click", function (e) {
  e.preventDefault();
  daySwitch(week);
});
// Додав перевірку того що ввів користувач, і якщо введені дані не є днем тижня - додав ще один alert
//

// Завдання 5
const inp = document.getElementById("scope");
const btnResult = document.getElementById("result");
function counting() {
  if (inp.value < 50) {
    alert("Ваша ступiнь - F");
  } else if (inp.value < 70) {
    alert("Ваша ступiнь - D");
  } else if (inp.value < 80) {
    alert("Ваша ступiнь - C");
  } else if (inp.value < 90) {
    alert("Ваша ступiнь - B");
  } else {
    alert("Ваша ступiнь - A");
  }
}
btnResult.addEventListener("click", function (e) {
  e.preventDefault();
  counting();
});

// Ternary operator
const inpTern = document.getElementById("scopeTern");
const btnResultTern = document.getElementById("resultTern");
function countingTern() {
  let level =
    inpTern.value < 50
      ? "Ваша ступiнь - F"
      : inpTern.value < 70
      ? "Ваша ступiнь - D"
      : inpTern.value < 80
      ? "Ваша ступiнь - C"
      : inpTern.value < 90
      ? "Ваша ступiнь - B"
      : "Ваша ступiнь - A";
  alert(level);
}
btnResultTern.addEventListener("click", function (e) {
  e.preventDefault();
  countingTern();
});
//

// Завдання 6
let firstName = null;
let lastName = undefined;
let username = (firstName || lastName) ?? "Guest";

console.log(username); // "Guest"
