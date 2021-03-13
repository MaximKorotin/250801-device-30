const mapButton = document.querySelector(".container-contacts-map");
const modalMap = document.querySelector(".modal-map");
const mapClose = modalMap.querySelector(".modal-map-close");

mapButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-map-open");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal-map-open");
});
