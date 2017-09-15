var link = document.querySelector(".feedback");
var popup = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".overlay");
var close = popup.querySelector(".modal-close");
var closeonoverlay = document.querySelector(".overlay");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");
var storage = localStorage.getItem("login");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	overlay.classList.add("modal-show");

	if (storage) {
      login.value = storage;
      email.focus();
    } else {
      login.focus();
    }

	login.focus();
  });

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("modal-show");
  });

form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !message.value) {
      evt.preventDefault();
      console.log("Нужно заполнить все поля!");
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
      } else {
      localStorage.setItem("login", login.value);
    }
  });

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });
