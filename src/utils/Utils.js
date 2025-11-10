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
export const profileImage = document.querySelector(".profile__image");
export const initialElements = [];
export const editIcon = document.querySelector(".profile__image-icon");
export const popupUpdateAvatar = document.querySelector("#popup-avatar");
export const popupAvatarButtonClose = popupUpdateAvatar.querySelector(
  ".popup__button-close"
);
