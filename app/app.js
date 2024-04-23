const buttonsConfig = [
  {
    buttons: document.querySelectorAll(".menu__about"),
    content: about,
    href: "about#",
  },
  {
    buttons: document.querySelectorAll(".menu__home"),
    content: homeContent,
    href: "home#",
  },
  {
    buttons: document.querySelectorAll(".menu__contact"),
    content: contact,
    href: "contact#",
  },
  {
    buttons: document.querySelectorAll(".menu__login"),
    content: loginPages,
    href: "login#",
  },
  {
    buttons: document.querySelectorAll(".menu__catalog"),
    content: catalog,
    href: "catalog#",
  },
  {
    buttons: document.querySelectorAll(".menu__favorite"),
    content: favorites,
    href: "favorites#",
  },
  {
    buttons: document.querySelectorAll(".cart"),
    content: cart,
    href: "cart#",
  },
];
const menuLinks = document.querySelectorAll(".nav__menu a");

let originalUrl = window.location.href.split("#")[0];

function addToURL(word) {
  let baseUrl = originalUrl.split("?")[0];
  let newUrl = baseUrl + "?" + word;
  window.history.pushState({}, "", newUrl);
}

function visibleNumb() {
  const cartNumb = document.querySelector(".cart__total");
  const user = localStorage.getItem("userData");

  if (!user) {
    cartNumb.style.display = "none";
  } else {
    cartNumb.style.display = "inline-block";
  }
}

window.addEventListener("load", function () {
  let str = window.location.href;
  let index = str.indexOf("?");
  visibleNumb();
  if (index !== -1) {
    let substr = str.substring(index + 1);
    if (substr === buttonsConfig[0].href) {
      handleButtonClick(buttonsConfig[0].buttons, buttonsConfig[0].content);
    } else if (substr === buttonsConfig[1].href) {
      handleButtonClick(buttonsConfig[1].buttons, buttonsConfig[1].content);
    } else if (substr === buttonsConfig[2].href) {
      handleButtonClick(buttonsConfig[2].buttons, buttonsConfig[2].content);
      setupModal();
    } else if (substr === buttonsConfig[3].href) {
      handleButtonClick(buttonsConfig[3].buttons, buttonsConfig[3].content);
      loginedFunc();
    } else if (substr === buttonsConfig[4].href) {
      handleButtonClick(buttonsConfig[4].buttons, buttonsConfig[4].content);
      catalogFunc();
    } else if (substr === buttonsConfig[5].href) {
      handleButtonClick(buttonsConfig[5].buttons, buttonsConfig[5].content);
      renderFavorites();
    } else if (substr === buttonsConfig[6].href) {
      handleButtonClick(buttonsConfig[6].buttons, buttonsConfig[6].content);
      renderCartItems();
    }
    renderNumb();
  }
});

window.addEventListener("popstate", function () {
  let str = window.location.href;
  let index = str.indexOf("?");
  if (index !== -1) {
    let substr = str.substring(index + 1);
    if (substr === buttonsConfig[0].href) {
      handleButtonClick(buttonsConfig[0].buttons, buttonsConfig[0].content);
    } else if (substr === buttonsConfig[1].href) {
      handleButtonClick(buttonsConfig[1].buttons, buttonsConfig[1].content);
    } else if (substr === buttonsConfig[2].href) {
      handleButtonClick(buttonsConfig[2].buttons, buttonsConfig[2].content);
      setupModal();
    } else if (substr === buttonsConfig[3].href) {
      handleButtonClick(buttonsConfig[3].buttons, buttonsConfig[3].content);
      loginedFunc();
    } else if (substr === buttonsConfig[4].href) {
      handleButtonClick(buttonsConfig[4].buttons, buttonsConfig[4].content);
      catalogFunc();
    } else if (substr === buttonsConfig[5].href) {
      handleButtonClick(buttonsConfig[5].buttons, buttonsConfig[5].content);
      renderFavorites();
    } else if (substr === buttonsConfig[6].href) {
      handleButtonClick(buttonsConfig[6].buttons, buttonsConfig[6].content);
      renderCartItems();
    }
  }
});

buttonsConfig.forEach((config) => {
  config.buttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      handleButtonClick(config.buttons, config.content, config.href);
      if (config.content === contact) {
        setupModal();
      }
      if (config.content === loginPages) {
        getAllUser();
        loginedFunc();
      }
      if (config.content === catalog) {
        catalogFunc();
      }
      if (config.content === favorites) {
        renderFavorites();
      }
      if (config.content === cart) {
        renderCartItems();
      }

      addToURL(config.href);
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

function loadData() {
  console.log("выполнилась");
  const masterKey =
    "$2a$10$3AK4oCmUXowJtaZ1b60Wi.s0Pa4RJ/uZ2rHsCLbKohxTPqQmt7dLq";
  const binId = "662621a5ad19ca34f85e175f/latest";

  fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
    method: "GET",
    headers: {
      "X-Master-Key": masterKey,
    },
  })
    .then((response) => response.json())
    .then((result) => {
      let jsonData = result.record.products;

      localStorage.setItem("ProdactsData", JSON.stringify(jsonData));
    })
    .catch((error) => console.log("error", error));
}
if (!localStorage.getItem("ProdactsData")) {
  loadData();
}
