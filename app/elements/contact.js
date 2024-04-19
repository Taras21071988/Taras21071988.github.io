const contact = `
<section id="descr">
        <div class="container">
          <div class="descr__wrapper" id="contact">
            <ul class="descr__title df tt-u">
              <ul class="descr__title-item df-dr">
                <li class="title__item">c</li>
                <li class="title__item">o</li>
                <li class="title__item">n</li>
                <li class="title__item">t</li>
                <li class="title__item">a</li>
                <li class="title__item">c</li>
                <li class="title__item">t</li>
              </ul>
              <ul class="descr__title-item df-dr">
                <li class="title__item">p</li>
                <li class="title__item">a</li>
                <li class="title__item">g</li>
                <li class="title__item">e</li>
              </ul>
            </ul>
            <button class="open__modal">Форма для зворотного зв'язку</button>
           
          </div>
        </div>
      </section>
`;

function setupModal() {
  const btnOpen = document.querySelector(".open__modal");
  const modal = document.querySelector(".modal__bg");
  const btnClose = document.querySelector(".close__btn");
  const sendBtn = document.querySelector(".send__btn");
  const modalWindow = document.querySelector(".modal__window");
  const email = document.getElementById("mail");
  const text = document.getElementById("text");
  const checkPolis = document.getElementById("checkPolis");

  btnOpen.addEventListener("click", function () {
    modal.style.display = "block";
  });
  btnClose.addEventListener("click", function () {
    modal.style.display = "none";
  });

  checkPolis.addEventListener("change", function (e) {
    sendBtn.disabled = !e.target.checked;
  });

  sendBtn.addEventListener("click", function (e) {
    if (email.value && text.value) {
      e.preventDefault();
      alert(`Дякую за звернення
              Ваш email ${email.value}
              Ваше повідомлення ${text.value}`);
      modal.style.display = "none";
      email.value = "";
      text.value = "";
      return;
    } else {
      alert("Не всі поля заповнені");
      e.preventDefault();
    }
  });
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    } else {
    }
  });
}
