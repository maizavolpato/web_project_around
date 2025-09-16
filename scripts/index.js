import { resetValidation } from "./validate.js";

const editProfileButton = document.querySelector(".profile__edit-button");
const openFormProfile = document.querySelector(".form-profile");
const closeFormProfile = document.querySelector(".form-profile__button-close");
const nameProfile = document.querySelector(".profile__name");
const inputName = document.querySelector("#name");
const jobProfile = document.querySelector(".profile__job");
const inputJob = document.querySelector("#detail");
const profileFormSubmit = document.querySelector(".form-profile__edit");
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
  resetValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  });
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
editProfileButton.addEventListener("click", openProfile);
openFormProfile.addEventListener("click", checkProfile);

profileFormSubmit.addEventListener("submit", handleProfileFormSubmit);

function openElements() {
  openFormElements.classList.add("form_open");
}

function closeElements() {
  openFormElements.classList.remove("form_open");
  resetValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  });
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

  renderElements(newElements);

  inputTitle.textContent = inputTitle.value;

  closeElements();
}

function renderElements(element) {
  const elementsItem = elementsTemplate
    .querySelector(".element")
    .cloneNode(true);

  const image = elementsItem.querySelector(".element__image");
  image.src = element.imageUrl;
  image.alt = element.title;

  const title = elementsItem.querySelector(".element__card-text");
  title.textContent = element.title;

  const removeElement = elementsItem.querySelector(".element__remove-button");
  removeElement.addEventListener("click", () => {
    elementsItem.remove();
  });

  image.addEventListener("click", () => {
    openImagePopup(element.imageUrl, element.title);
  });

  const elementLikeButton = elementsItem.querySelector(
    ".element__card-button-like"
  );
  elementLikeButton.addEventListener("click", function (evt) {
    evt.target.classList.toggle("element__card-button-like-active");
  });

  elementsContainer.prepend(elementsItem);
}

initialElements.forEach((element) => {
  renderElements(element);
});

editElementsButton.addEventListener("click", openElements);
openFormElements.addEventListener("click", checkElements);
ElementsFormSubmit.addEventListener("submit", handleElementsFormSubmit);

function openImagePopup(imageUrl, title) {
  imagePopupImage.src = imageUrl;
  imagePopupImage.alt = title;
  imagePopupTitle.textContent = title;
  imagePopup.classList.add("popup-open");
  imagePopupImage.classList.add("image-popup__image");
}

function closeImagePopup() {
  imagePopup.classList.remove("popup-open");
  imagePopupImage.src = "";
  imagePopupTitle.textContent = "";
}

imagePopup.addEventListener("click", checkElementsImage);

function checkElementsImage(evt) {
  if (
    evt.target.classList.contains("image-popup") ||
    evt.target.classList.contains("image-popup__button-close")
  ) {
    closeImagePopup();
  }
}

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    closeElements();
    closeProfile();
    closeImagePopup();
  }
});
