const feedbackButton = document.querySelector(".feedback-button");
const modalFeedback = document.querySelector(".modal-feedback");
const feedbackClose = modalFeedback.querySelector(".modal-feedback-close");

feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.add("madal-feedback-open");
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.remove("madal-feedback-open");
});
