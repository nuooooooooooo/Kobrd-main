let navWrapper = document.querySelector(".nav-wrapper"),
  navToggler = document.querySelector(".nav-toggler"),
  logoToggler = document.querySelector("#logo");

navToggler.addEventListener("click", function (event) {
  navWrapper.classList.toggle("active");
  logoToggler.classList.toggle("invisible");
});
