export const formValidation = {
  formSelector: ".popup",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export const profileForm = document.querySelector(".popup__profile-edit");
export const editProfileButton = document.querySelector(
  ".profile__edit-button"
);
export const editElementsButton = document.querySelector(
  ".profile__add-image-button"
);
export const elementForm = document.querySelector(".popup__elements-edit");
export const nameProfile = document.querySelector(".profile__name");
export const jobProfile = document.querySelector(".profile__job");
export const inputName = document.querySelector("#name");
export const inputJob = document.querySelector("#detail");
export const initialElements = [
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
