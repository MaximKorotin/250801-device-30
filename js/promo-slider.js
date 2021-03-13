const firstButton = document.querySelector(".promo-slider-button-first");
const secondButton = document.querySelector(".promo-slider-button-second");
const thirdButton = document.querySelector(".promo-slider-button-third");
const firstSlider = document.querySelector(".container-promo-info-first");
const secondSlider = document.querySelector(".container-promo-info-second");
const thirdSlider = document.querySelector(".container-promo-info-third");

firstButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  firstButton.classList.add("promo-button-current");
  firstSlider.classList.add("promo-slider-current");
  secondButton.classList.remove("promo-button-current");
  secondSlider.classList.remove("promo-slider-current");
  thirdButton.classList.remove("promo-button-current");
  thirdSlider.classList.remove("promo-slider-current");
});

secondButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  secondButton.classList.add("promo-button-current");
  secondSlider.classList.add("promo-slider-current");
  firstButton.classList.remove("promo-button-current");
  firstSlider.classList.remove("promo-slider-current");
  thirdButton.classList.remove("promo-button-current");
  thirdSlider.classList.remove("promo-slider-current");
});

thirdButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  thirdButton.classList.add("promo-button-current");
  thirdSlider.classList.add("promo-slider-current");
  firstButton.classList.remove("promo-button-current");
  firstSlider.classList.remove("promo-slider-current");
  secondButton.classList.remove("promo-button-current");
  secondSlider.classList.remove("promo-slider-current");
});
