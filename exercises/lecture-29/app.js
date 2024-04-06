class AuthException extends Error {
  constructor(code, message) {
    let newMessage = message ? `${code}: ${message}` : code;
    super(newMessage);
    this.message = newMessage;
  }
  toString() {
    return this.message;
  }
}

const dialogBoxId = document.getElementById("dialogBox");
const renderText = dialogBoxId.querySelector(".message");
const checkAuth = document.querySelector(".check-auth");

let isAuth = (auth) => auth ?? false;

function showDialog(e) {
  dialogBoxId.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
    }
  });

  dialogBoxId.showModal();
}

function closeDialog() {
  dialogBoxId.close();
}

checkAuth.addEventListener("click", function () {
  try {
    if (!isAuth()) {
      throw new AuthException(
        "FORBIDDEN",
        `You don't have access to this page`
      );
    } else {
      window.open("success.html");
    }
  } catch (error) {
    renderText.textContent = error;
    showDialog();
  }
});
