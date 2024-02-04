const checkbox = document.getElementById("slider");
checkbox.addEventListener("change", function () {
  changeTheme(checkbox.checked);
});
function changeTheme(isChecked) {
  if (isChecked) {
    document.body.setAttribute("dark", "");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.removeAttribute("dark");
    localStorage.removeItem("theme");
  }
}
try {
  if (localStorage.getItem("theme") === "dark") {
    document.body.setAttribute("dark", "");
    checkbox.checked = true;
  } else {
    document.body.removeAttribute("dark");
    checkbox.checked = false;
  }
} catch (err) {}
