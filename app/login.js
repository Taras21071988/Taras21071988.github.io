let formWrapper = document.querySelector(".form__wrapper");

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
}
loginForm();
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
}
