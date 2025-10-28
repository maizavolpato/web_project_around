import { Card } from "../componentes/Card.js";
import { FormValidator } from "../componentes/FormValidator.js";
import {
  formValidation,
  jobProfile,
  nameProfile,
  initialElements,
  editElementsButton,
  editProfileButton,
  profileForm,
  elementForm,
  inputName,
  inputJob,
} from "../utils/utils.js";
import { PopupWithForm } from "../componentes/PopupWithForm.js";
import { Section } from "../componentes/Section.js";
import { PopupWithImage } from "../componentes/PopupWithImage.js";
import { UserInfo } from "../componentes/UserInfo.js";

function openProfile() {
  editProfilePopup.open();
  const profileUserInfo = userInformation.getUserInfo();
  inputName.value = profileUserInfo.name;
  inputJob.value = profileUserInfo.job;
}

function openElements() {
  editElementsPopup.open();
}

const cardSection = new Section(
  {
    items: initialElements,
    renderer: (element) => {
      const card = new Card({
        imageUrl: element.imageUrl,
        title: element.title,
      });
      const cardElement = card.generateCard();

      const image = cardElement.querySelector(".element__image");
      image.addEventListener("click", () => {
        popupWithImage.open(element.imageUrl, element.title);
      });
      cardSection.addItem(cardElement);
    },
  },
  ".elements"
);

cardSection.renderItems();

const editProfilePopup = new PopupWithForm(
  "#popup-profile",
  (formValues) => {
    userInformation.setUserInfo(inputName.value, inputJob.value);
  },
  () => editProfileFormValidator.resetValidation()
);
const editElementsPopup = new PopupWithForm(
  "#popup-elements",
  (formValues) => {
    const newElements = {
      imageUrl: formValues["image"],
      title: formValues["title"],
    };

    const card = new Card({
      imageUrl: newElements.imageUrl,
      title: newElements.title,
    });

    const cardElement = card.generateCard();

    const image = cardElement.querySelector(".element__image");
    image.addEventListener("click", () => {
      popupWithImage.open(newElements.imageUrl, newElements.title);
    });

    cardSection.addItem(cardElement);
  },
  () => editElementFormValidator.resetValidation()
);

editProfilePopup.setEventListeners();
editElementsPopup.setEventListeners();

const editProfileFormValidator = new FormValidator(formValidation, profileForm);
editProfileFormValidator.enableValidation();

const editElementFormValidator = new FormValidator(formValidation, elementForm);
editElementFormValidator.enableValidation();

const userInformation = new UserInfo({
  userName: nameProfile,
  userJob: jobProfile,
});

const popupWithImage = new PopupWithImage("#popup-image");
popupWithImage.setEventListeners();

editProfileButton.addEventListener("click", openProfile);
editElementsButton.addEventListener("click", openElements);
