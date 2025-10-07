import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { formValidation } from "./utils.js";

const profileForm = document.querySelector(".popup__form.form-profile__edit");
const editProfileButton = document.querySelector(".profile__edit-button");
const openFormProfile = document.querySelector(".form-profile");
const closeFormProfile = document.querySelector(".form-profile__button-close");
const nameProfile = document.querySelector(".profile__name");
const inputName = document.querySelector("#name");
const jobProfile = document.querySelector(".profile__job");
const inputJob = document.querySelector("#detail");
const profileFormSubmit = document.querySelector(".form-profile__edit");
const elementForm = document.querySelector(".popup__form.form-elements__edit");
const editElementsButton = document.querySelector(".profile__add-image-button");
const openFormElements = document.querySelector(".form-elements");
const closeFormElements = document.querySelector(
  ".form-elements__button-close"
);
const inputTitle = document.querySelector("#title");
const inputImage = document.querySelector("#image");
const ElementsFormSubmit = document.querySelector(".form-elements__edit");
const elementsTemplate = document.querySelector("#elements-template").content;
const elementsContainer = document.querySelector(".elements");
const imagePopup = document.querySelector(".image-popup");
const imagePopupClose = document.querySelector(".image-popup__button-close");
const imagePopupImage = document.querySelector(".image-popup__image");
const imagePopupTitle = document.querySelector(".image-popup__title");
const initialElements = [
  {
    imageUrl: "./images/photo_1.jpg",
    title: "Vale de Yosemite",
  },
  {
    imageUrl: "./images/photo_2.jpg",
    title: "Lago Louise",
  },
  {
    imageUrl: "./images/photo_3.jpg",
    title: "Montanhas Care",
  },
  {
    imageUrl: "./images/photo_4.jpg",
    title: "Latemar",
  },
  {
    imageUrl: "./images/photo_5.jpg",
    title: "Parque Nacional da Vanoise",
  },
  {
    imageUrl: "./images/photo_6.jpg",
    title: "Lago di Braies",
  },
];

function openProfile() {
  openFormProfile.classList.add("form_open");
  inputName.value = nameProfile.textContent;
  inputJob.value = jobProfile.textContent;
}

function closeProfile() {
  openFormProfile.classList.remove("form_open");
  editProfileFormValidator.resetValidation();
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  nameProfile.textContent = inputName.value;
  jobProfile.textContent = inputJob.value;

  if (inputName.value.trim() === "" || inputJob.value.trim() == "") {
    alert("Input invalid!");
    return;
  }

  closeProfile();
}

function checkProfile(evt) {
  if (
    evt.target.classList.contains("form-profile") ||
    evt.target.classList.contains("form-profile__button-close")
  ) {
    closeProfile();
  }
}

function openElements() {
  openFormElements.classList.add("form_open");
}

function closeElements() {
  openFormElements.classList.remove("form_open");
  editElementFormValidator.resetValidation();
}

function checkElements(evt) {
  if (
    evt.target.classList.contains("form-elements") ||
    evt.target.classList.contains("form-elements__button-close")
  ) {
    closeElements();
  }
}

function handleElementsFormSubmit(evt) {
  evt.preventDefault();

  const newElements = {
    imageUrl: inputImage.value,
    title: inputTitle.value,
  };

  renderElement(newElements);

  inputTitle.textContent = inputTitle.value;

  closeElements();
}

function renderElement(element) {
  const card = new Card({
    imageUrl: element.imageUrl,
    title: element.title,
  });
  const cardElement = card.generateCard();

  const image = cardElement.querySelector(".element__image");
  image.addEventListener("click", () => {
    openImagePopup(element.imageUrl, element.title);
  });

  elementsContainer.prepend(cardElement);
}

initialElements.forEach((element) => {
  renderElement(element);
});

function openImagePopup(imageUrl, title) {
  imagePopupImage.src = imageUrl;
  imagePopupImage.alt = title;
  imagePopupTitle.textContent = title;
  imagePopup.classList.add("popup-open");
}

function closeImagePopup() {
  imagePopup.classList.remove("popup-open");
  imagePopupImage.src = "";
  imagePopupTitle.textContent = "";
}

function checkElementsImage(evt) {
  if (
    evt.target.classList.contains("image-popup") ||
    evt.target.classList.contains("image-popup__button-close")
  ) {
    closeImagePopup();
  }
}

editProfileButton.addEventListener("click", openProfile);
openFormProfile.addEventListener("click", checkProfile);

editElementsButton.addEventListener("click", openElements);
openFormElements.addEventListener("click", checkElements);
ElementsFormSubmit.addEventListener("submit", handleElementsFormSubmit);

profileFormSubmit.addEventListener("submit", handleProfileFormSubmit);

imagePopup.addEventListener("click", checkElementsImage);

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    closeElements();
    closeProfile();
    closeImagePopup();
  }
});

const editProfileFormValidator = new FormValidator(formValidation, profileForm);
editProfileFormValidator.enableValidation();

const editElementFormValidator = new FormValidator(formValidation, elementForm);
editElementFormValidator.enableValidation();
