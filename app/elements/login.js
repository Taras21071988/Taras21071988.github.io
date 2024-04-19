const loginPages = `
<section id="descr">
    <div class="container">
        <div class="descr__wrapper" id="login__wrapper">
            <div class="form__wrapper"></div>
        </div>
     </div>
</section>
`;

const cartNumb = document.querySelector(".cart__total");
const template = (element) => ({
  id: element.id,
  name: element.name,
  password: element.password,
  favoriteList: element.favoriteList,
  buyList: element.buyList,
});
function getAllUser() {
  console.log("выполнилась");
  const masterKey =
    "$2a$10$3AK4oCmUXowJtaZ1b60Wi.s0Pa4RJ/uZ2rHsCLbKohxTPqQmt7dLq";
  const binId = "661909c5acd3cb34a83735e3/latest";

  fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
    method: "GET",
    headers: {
      "X-Master-Key": masterKey,
    },
  })
    .then((response) => response.json())
    .then((result) => {
      let jsonData = result.record.record;
      let transformedData = jsonData.map(template);
      localStorage.setItem("Data", JSON.stringify(transformedData));
    })
    .catch((error) => console.log("error", error));
}

function loginedFunc() {
  let formWrapper = document.querySelector(".form__wrapper");
  function logined() {
    renderNumb();
    const user = JSON.parse(localStorage.getItem("userData"));
    formWrapper.innerHTML = "";
    formWrapper.innerHTML = `
        <h2 class="logined mb-25"> Ви успішно авторизувалися</h2>
        <p class="logined__text mb-25">Добрий день <span> ${user.name}</span></p>
        <button class="btn exit__btn">Exit</button>
      `;
    const exitBtn = document.querySelector(".exit__btn");
    exitBtn.addEventListener("click", function (e) {
      e.preventDefault();
      cartNumb.style.display = "none";
      const userInfo = JSON.parse(localStorage.getItem("userData"));
      const allUsers = JSON.parse(localStorage.getItem("Data"));
      const index = allUsers.findIndex((user) => user.id === userInfo.id);

      if (index !== -1) {
        allUsers[index].favoriteList = userInfo.favoriteList;
        allUsers[index].buyList = userInfo.buyList;

        localStorage.setItem("Data", JSON.stringify(allUsers));
      } else {
        console.log("Об'єкт із таким самим id не знайдено");
      }

      fetch("https://api.jsonbin.io/v3/b/661909c5acd3cb34a83735e3", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key":
            "$2a$10$3AK4oCmUXowJtaZ1b60Wi.s0Pa4RJ/uZ2rHsCLbKohxTPqQmt7dLq",
        },
        body: JSON.stringify({ record: allUsers }),
      });

      localStorage.removeItem("userData");
      loginForm();
    });
  }

  function loginForm() {
    formWrapper.innerHTML = `
      <form class="login__form df-dc gp-2">
      <h2 class="form__title mb-25">Login</h2>
      <div class="name__wrapper df-dc gp-2">
        <label for="name__login"
          >Please enter your name <span style="color: red">*</span></label
        >
        <input
          class="inp"
          type="text"
          id="name__login"
          placeholder="Enter your name"
          required
        />
      </div>
      <div class="password__wrapper df-dc gp-2 mb-25">
        <label for="password"
          >Please enter your password
          <span style="color: red">*</span></label
        >
        <input
          class="inp"
          id="password"
          type="password"
          placeholder="Enter your password"
          required
        />
      </div>
      <div class="btn__wrapper">
        <button class="btn btn__send">Send</button>
        <p class="btn__text">
          If you are not registered, please click on the
          <span class="switch__register">Registration</span>  to register.
        </p>
      </div>
    </form>
      `;

    const switchLogin = document.querySelector(".switch__register");
    switchLogin.addEventListener("click", function () {
      registerForm();
    });
    const loginInp = document.getElementById("name__login");
    const passwordInp = document.getElementById("password");
    const sendLogin = document.querySelector(".btn__send");
    sendLogin.addEventListener("click", async function (e) {
      e.preventDefault();
      let storedData = JSON.parse(localStorage.getItem("Data"));
      if (!storedData) {
        alert(
          "Дані користувача не знайдено. Увійдіть знову або зареєструйтеся."
        );
        return;
      }
      let foundUser = storedData.find(function (user) {
        return (
          user.name === loginInp.value && user.password === passwordInp.value
        );
      });

      if (foundUser) {
        const userData = {
          id: foundUser.id,
          name: foundUser.name,
          favoriteList: foundUser.favoriteList,
          buyList: foundUser.buyList,
        };

        cartNumb.style.display = "inline-block";
        localStorage.setItem("userData", JSON.stringify(userData));
        logined();
        console.log("Удачно");
      } else {
        alert("Невірний логін або пароль.");
      }
    });
  }

  function registerForm() {
    formWrapper.innerHTML = "";
    formWrapper.innerHTML = `<form class="login__form df-dc gp-2">
      <h2 class="form__title mb-25">Registration</h2>
      <div class="name__wrapper df-dc gp-2">
        <label for="register"
          >Please select your login <span style="color: red">*</span></label
        >
        <input
          class="inp"
          type="text"
          id="register"
          placeholder="Enter your login"
          required
        />
      </div>
      <div class="password__wrapper df-dc gp-2 mb-25">
        <label for="register__password"
          >Please select your password
          <span style="color: red">*</span></label
        >
        <input
          class="inp"
          type="password"
          id="register__password"
          placeholder="Enter your password"
          required
        />
      </div>
      <div class="btn__wrapper">
        <button class="btn btn__send">Register</button>
        <p class="btn__text">
          If you are not registered, please click on the
          <span class="switch__register">login</span>  to login.
        </p>
      </div>
    </form>`;
    const switchRegister = document.querySelector(".switch__register");
    switchRegister.addEventListener("click", function () {
      formWrapper.innerHTML = "";
      loginForm();
    });
    const registerName = document.getElementById("register");
    const passwordRegister = document.getElementById("register__password");
    const sendLogin = document.querySelector(".btn__send");
    sendLogin.addEventListener("click", function (e) {
      e.preventDefault();
      const newUser = {
        id: Date.now(),
        name: registerName.value,
        password: passwordRegister.value,
        favoriteList: [],
        buyList: [],
      };
      let storedData = JSON.parse(localStorage.getItem("Data"));
      storedData.push(newUser);

      fetch("https://api.jsonbin.io/v3/b/661909c5acd3cb34a83735e3", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key":
            "$2a$10$3AK4oCmUXowJtaZ1b60Wi.s0Pa4RJ/uZ2rHsCLbKohxTPqQmt7dLq",
        },
        body: JSON.stringify({ record: storedData }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Network response was not ok");
          }
        })
        .then((data) => {
          localStorage.setItem("Data", JSON.stringify(storedData));
          alert(
            "Реєстрація пройшла успішно, будь ласка, увійдіть у свій акаунт"
          );
          loginForm();
        })
        .catch((error) => {
          console.error("Error registering user:", error);
        });
    });
  }

  function entry() {
    if (localStorage.getItem("userData")) {
      formWrapper.innerHTML = "";
      logined();
    } else {
      loginForm();
    }
  }
  entry();
}
