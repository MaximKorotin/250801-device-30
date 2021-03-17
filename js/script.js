const inputLinkH = document.querySelector(".input-link-header");
const containerOutputH = document.querySelector(".container-output-header");
const outputLinkH = document.querySelector(".output-link-header");
const inputLinkF = document.querySelector(".input-link-footer");
const containerOutputF = document.querySelector(".container-output-footer");
const outputLinkF = document.querySelector(".output-link-footer");
const feedbackButton = document.querySelector(".feedback-button");
const modalFeedback = document.querySelector(".modal-feedback");
const mapButton = document.querySelector(".container-contacts-map");
const modalMap = document.querySelector(".modal-map");
const firstButton = document.querySelector(".promo-slider-button-first");
const secondButton = document.querySelector(".promo-slider-button-second");
const thirdButton = document.querySelector(".promo-slider-button-third");
const firstSlider = document.querySelector(".container-promo-info-first");
const secondSlider = document.querySelector(".container-promo-info-second");
const thirdSlider = document.querySelector(".container-promo-info-third");
const firstServicesButton = document.querySelector(".services-slider-button-first");
const secondServicesButton = document.querySelector(".services-slider-button-second");
const thirdServicesButton = document.querySelector(".services-slider-button-third");
const firstServicesSlider = document.querySelector(".service-item-first");
const secondServicesSlider = document.querySelector(".service-item-second");
const thirdServicesSlider = document.querySelector(".service-item-third");

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

if (feedbackButton) {
  feedbackButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalFeedback.classList.add("madal-feedback-open");
  });
}

if (modalFeedback) {
  const feedbackClose = modalFeedback.querySelector(".modal-feedback-close");
  if (feedbackClose) {
    feedbackClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      modalFeedback.classList.remove("madal-feedback-open");
    });
  }
}

if (mapButton) {
  mapButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.add("modal-map-open");
  });
}

if (modalMap) {
  const mapClose = modalMap.querySelector(".modal-map-close");
  if (mapClose) {
    mapClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      modalMap.classList.remove("modal-map-open");
    });
  }
}

if (firstButton) {
  firstButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    firstButton.classList.add("promo-button-current");
    firstSlider.classList.add("promo-slider-current");
    secondButton.classList.remove("promo-button-current");
    secondSlider.classList.remove("promo-slider-current");
    thirdButton.classList.remove("promo-button-current");
    thirdSlider.classList.remove("promo-slider-current");
  });
}

if (secondButton) {
  secondButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    secondButton.classList.add("promo-button-current");
    secondSlider.classList.add("promo-slider-current");
    firstButton.classList.remove("promo-button-current");
    firstSlider.classList.remove("promo-slider-current");
    thirdButton.classList.remove("promo-button-current");
    thirdSlider.classList.remove("promo-slider-current");
  });
}

if (thirdButton) {
  thirdButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    thirdButton.classList.add("promo-button-current");
    thirdSlider.classList.add("promo-slider-current");
    firstButton.classList.remove("promo-button-current");
    firstSlider.classList.remove("promo-slider-current");
    secondButton.classList.remove("promo-button-current");
    secondSlider.classList.remove("promo-slider-current");
  });
}

if (firstServicesButton) {
  firstServicesButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    firstServicesButton.classList.add("services-slider-button-current");
    firstServicesSlider.classList.add("service-item-current");
    secondServicesButton.classList.remove("services-slider-button-current");
    secondServicesSlider.classList.remove("service-item-current");
    thirdServicesButton.classList.remove("services-slider-button-current");
    thirdServicesSlider.classList.remove("service-item-current");
  });
}

if (secondServicesButton) {
  secondServicesButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    secondServicesButton.classList.add("services-slider-button-current");
    secondServicesSlider.classList.add("service-item-current");
    firstServicesButton.classList.remove("services-slider-button-current");
    firstServicesSlider.classList.remove("service-item-current");
    thirdServicesButton.classList.remove("services-slider-button-current");
    thirdServicesSlider.classList.remove("service-item-current");
  });
}

if (thirdServicesButton) {
  thirdServicesButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    thirdServicesButton.classList.add("services-slider-button-current");
    thirdServicesSlider.classList.add("service-item-current");
    firstServicesButton.classList.remove("services-slider-button-current");
    firstServicesSlider.classList.remove("service-item-current");
    secondServicesButton.classList.remove("services-slider-button-current");
    secondServicesSlider.classList.remove("service-item-current");
  });
}
