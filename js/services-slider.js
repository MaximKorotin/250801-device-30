const firstServicesButton = document.querySelector(".services-slider-button-first");
const secondServicesButton = document.querySelector(".services-slider-button-second");
const thirdServicesButton = document.querySelector(".services-slider-button-third");
const firstServicesSlider = document.querySelector(".service-item-first");
const secondServicesSlider = document.querySelector(".service-item-second");
const thirdServicesSlider = document.querySelector(".service-item-third");

firstServicesButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  firstServicesButton.classList.add("services-slider-button-current");
  firstServicesSlider.classList.add("service-item-current");
  secondServicesButton.classList.remove("services-slider-button-current");
  secondServicesSlider.classList.remove("service-item-current");
  thirdServicesButton.classList.remove("services-slider-button-current");
  thirdServicesSlider.classList.remove("service-item-current");
});

secondServicesButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  secondServicesButton.classList.add("services-slider-button-current");
  secondServicesSlider.classList.add("service-item-current");
  firstServicesButton.classList.remove("services-slider-button-current");
  firstServicesSlider.classList.remove("service-item-current");
  thirdServicesButton.classList.remove("services-slider-button-current");
  thirdServicesSlider.classList.remove("service-item-current");
});

thirdServicesButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  thirdServicesButton.classList.add("services-slider-button-current");
  thirdServicesSlider.classList.add("service-item-current");
  firstServicesButton.classList.remove("services-slider-button-current");
  firstServicesSlider.classList.remove("service-item-current");
  secondServicesButton.classList.remove("services-slider-button-current");
  secondServicesSlider.classList.remove("service-item-current");
});
