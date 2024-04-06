let errorMessages = document.getElementById("errorMessages");
let formRegister = document.getElementById("registrationForm");

formRegister.addEventListener("submit", function (e) {
  e.preventDefault();
  errorMessages.innerHTML = "";

  let userName = document.getElementById("username").value.trim();
  let mail = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  if (userName === "") {
    renderError("Ім'я користувача не може бути порожнім");
    return;
  }

  let mailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!mailValid.test(mail)) {
    renderError("Невірний формат адреси едектронної пошти");
  }

  let passwordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
  if (password.length < 8) {
    renderError("Пароль не може бути коротшим за 8 символів");
    return;
  } else if (!passwordValid.test(password)) {
    renderError(
      "Пароль має містити принаймні одну велику літеру, одну малу літеру, одну цифру та один спеціальний символ."
    );
  }
  renderSuccess("Pеєстрація пройшла успішно");

  this.reset();
});

let errorDiv = document.createElement("div");
function renderError(errormsg) {
  errorDiv.textContent = errormsg;
  errorMessages.appendChild(errorDiv);
}
// трохи від себе додав, щоб було зрозуміло, що все пройшло успішно, а то якийсь порожній вигляд має, коли форма скидається без будь-якого повідомлення

function renderSuccess(successMsg) {
  errorDiv.textContent = successMsg;
  errorMessages.appendChild(errorDiv);
}
