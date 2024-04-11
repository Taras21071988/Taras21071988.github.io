// const buttonsConfig = [
//   {
//     buttons: document.querySelectorAll(".menu__about"),
//     content: about,
//     href: "about",
//   },
//   {
//     buttons: document.querySelectorAll(".menu__home"),
//     content: homeContent,
//     href: "home",
//   },
//   {
//     buttons: document.querySelectorAll(".menu__contact"),
//     content: contact,
//     href: "contact",
//   },
// ];
// const menuLinks = document.querySelectorAll(".nav__menu a");

// var originalUrl = window.location.href.split("#")[0];

// function addWordToURL(word) {
//   var baseUrl = originalUrl.split("#")[0];
//   var newUrl = baseUrl + "#" + word;
//   window.history.replaceState({}, "", newUrl);
// }

// function getWordFromURL() {
//   var hash = window.location.hash;
//   return hash ? hash.substr(1) : null;
// }

// function displayContentByWord(word, content) {
//   // Ваша логика для отображения контента на основе слова
//   // Например:
//   if (word === "about") {
//     wrapper.innerHTML = buttonsConfig[0].content;
//     // Показать контент, соответствующий слову "word1"
//   } else if (word === "home") {
//     wrapper.innerHTML = buttonsConfig[1].content;
//     // Показать контент, соответствующий слову "word2"
//   } else if (word === "contact") {
//     wrapper.innerHTML = buttonsConfig[2].content;
//   }
// }

// // Вызываем функцию для отображения контента при загрузке страницы
// window.addEventListener("load", function () {
//   var word = getWordFromURL();
//   if (word) {
//     displayContentByWord(word);
//   }
// });

// buttonsConfig.forEach((config) => {
//   config.buttons.forEach((btn) => {
//     btn.addEventListener("click", function () {
//       handleButtonClick(config.buttons, config.content, config.href);
//       if (config.content === contact) {
//         setupModal();
//       }
//       addWordToURL(config.href);
//       displayContentByWord(config.href); // Отобразить контент при изменении URL
//     });
//   });
// });

// // var originalUrl = window.location.href.split("#")[0];

// // function addWordToURL(word) {
// //   var baseUrl = originalUrl.split("#")[0];

// //   var newUrl = baseUrl + word;

// //   window.history.replaceState({}, "", newUrl);
// // }

// // buttonsConfig.forEach((config) => {
// //   config.buttons.forEach((btn) => {
// //     btn.addEventListener("click", function () {
// //       handleButtonClick(config.buttons, config.content, config.href);
// //       if (config.content === contact) {
// //         setupModal();
// //       }
// //       addWordToURL(config.href);
// //     });
// //   });
// // });

// function handleButtonClick(buttons, content, href) {
//   removeActiveClassFromLinks();
//   buttons.forEach((btn) => {
//     btn.classList.add("active__menu");
//   });

//   wrapper.innerHTML = content;
// }

// function removeActiveClassFromLinks() {
//   menuLinks.forEach((link) => {
//     if (link.classList.contains("active__menu")) {
//       link.classList.remove("active__menu");
//     }
//   });
// }


const buttonsConfig = [
  {
    buttons: document.querySelectorAll(".menu__about"),
    content: about,
    href: "about",
  },
  {
    buttons: document.querySelectorAll(".menu__home"),
    content: homeContent,
    href: "home",
  },
  {
    buttons: document.querySelectorAll(".menu__contact"),
    content: contact,
    href: "contact",
  },
];
const menuLinks = document.querySelectorAll(".nav__menu a");

var originalUrl = window.location.href.split("#")[0];

function addWordToURL(word) {
  var baseUrl = originalUrl.split("#")[0];
  var newUrl = baseUrl + "#" + word;
  window.history.replaceState({}, "", newUrl);
}

function getWordFromURL() {
  var hash = window.location.hash;
  return hash ? hash.substr(1) : null;
}

function displayContentByWord(word, content) {
  wrapper.innerHTML = content;
}

// Вызываем функцию для отображения контента при загрузке страницы
window.addEventListener("load", function () {
  var word = getWordFromURL();
  if (word) {
    const content = buttonsConfig.find(config => config.href === word).content;
    displayContentByWord(word, content);
  }
});

buttonsConfig.forEach((config) => {
  config.buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      handleButtonClick(config.buttons, config.content, config.href);
      if (config.content === contact) {
        setupModal();
      }
      addWordToURL(config.href);
    });
  });
});

function handleButtonClick(buttons, content, href) {
  removeActiveClassFromLinks();
  buttons.forEach((btn) => {
    btn.classList.add("active__menu");
  });

  wrapper.innerHTML = content;
}

function removeActiveClassFromLinks() {
  menuLinks.forEach((link) => {
    if (link.classList.contains("active__menu")) {
      link.classList.remove("active__menu");
    }
  });
}
