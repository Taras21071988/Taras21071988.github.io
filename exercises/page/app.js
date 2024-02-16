const exitBtn = document.querySelector(".exit__btn");

exitBtn.addEventListener("click", function () {
  localStorage.removeItem("admin");
  window.location.href = "../index.html";
  console.log("hi");
});
