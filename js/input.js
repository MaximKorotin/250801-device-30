const inputLinkH = document.querySelector(".input-link-header");
const containerOutputH = document.querySelector(".container-output-header");
const outputLinkH = document.querySelector(".output-link-header");
const inputLinkF = document.querySelector(".input-link-footer");
const containerOutputF = document.querySelector(".container-output-footer");
const outputLinkF = document.querySelector(".output-link-footer");

inputLinkH.addEventListener("click", function (evt) {
  evt.preventDefault();
  inputLinkH.classList.add("hide-input");
  containerOutputH.classList.add("display-output");
  inputLinkF.classList.add("hide-input");
  containerOutputF.classList.add("display-output");
});

inputLinkF.addEventListener("click", function (evt) {
  evt.preventDefault();
  inputLinkF.classList.add("hide-input");
  containerOutputF.classList.add("display-output");
  inputLinkH.classList.add("hide-input");
  containerOutputH.classList.add("display-output");
});

outputLinkH.addEventListener("click", function (evt) {
  evt.preventDefault();
  containerOutputH.classList.remove("display-output");
  inputLinkH.classList.remove("hide-input");
  containerOutputF.classList.remove("display-output");
  inputLinkF.classList.remove("hide-input");
});

outputLinkF.addEventListener("click", function (evt) {
  evt.preventDefault();
  containerOutputF.classList.remove("display-output");
  inputLinkF.classList.remove("hide-input");
  containerOutputH.classList.remove("display-output");
  inputLinkH.classList.remove("hide-input");
});
