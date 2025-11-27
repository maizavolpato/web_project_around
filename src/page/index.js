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
  editIcon,
  popupUpdateAvatar,
  popupAvatarButtonClose,
  profileImage,
} from "../utils/Utils.js";
import { PopupWithForm } from "../componentes/PopupWithForm.js";
import { Section } from "../componentes/Section.js";
import { UserInfo } from "../componentes/UserInfo.js";
import { api } from "../componentes/Api.js";
import { PopupWithConfirmation } from "../componentes/PopupWithConfirmation.js";
import { PopupWithImage } from "../componentes/PopupWithImage.js";

function openUpdateAvatar() {
  popupUpdateAvatar.classList.add("popup_open");
}

function closeUpdateAvatar() {
  popupUpdateAvatar.classList.remove("popup_open");
}

const updateAvatarPopup = new PopupWithForm(
  "#popup-avatar",
  (data) => {
    api
      .updateProfilePhoto(data.avatar)
      .then((info) => {
        userInformation.setUserInfo(info.name, info.about, info.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  () => editProfileFormValidator.resetValidation()
);
updateAvatarPopup.setEventListeners();

editIcon.addEventListener("click", openUpdateAvatar);
popupAvatarButtonClose.addEventListener("click", closeUpdateAvatar);

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
        _id: element._id,
        apiInstance: api,
        handleClickImage: (cardClick) => {
          const popupWithImage = new PopupWithImage("#popup-image");
          popupWithImage.setEventListeners();
          popupWithImage.open(cardClick.imageUrl, cardClick.title);
        },
        handleDeleteCard: (cardDeleted) => {
          const confirmationPopup = new PopupWithConfirmation(
            "#popup-confirmation",
            cardDeleted.id,
            cardDeleted.api,
            cardDeleted.cardElement,
            cardDeleted.isLiked
          );
          confirmationPopup.setEventListeners();
          confirmationPopup.open();
        },
      });
      const cardElement = card.generateCard();
      cardSection.addItem(cardElement);
    },
  },
  ".elements"
);

cardSection.renderItems();

const editProfilePopup = new PopupWithForm(
  "#popup-profile",
  (formValues) => {
    editProfilePopup.renderLoading(true);

    api
      .updateUserInfo({
        name: formValues.name,
        about: formValues.detail,
        avatar: formValues.avatar,
      })

      .then((updatedUserData) => {
        userInformation.setUserInfo(
          updatedUserData.name,
          updatedUserData.about,
          updatedUserData.avatar
        );
      })

      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        editProfilePopup.renderLoading(false);
      });
  },
  () => editProfileFormValidator.resetValidation()
);

const editElementsPopup = new PopupWithForm(
  "#popup-elements",
  (formValues) => {
    api
      .updateCardInfo({
        name: formValues.title,
        link: formValues.image,
      })

      .then((updatedCardData) => {
        const card = new Card({
          imageUrl: updatedCardData.link,
          title: updatedCardData.name,
          _id: updatedCardData._id,
          apiInstance: api,
          handleClickImage: (cardClick) => {
            const popupWithImage = new PopupWithImage("#popup-image");
            popupWithImage.setEventListeners();
            popupWithImage.open(cardClick.imageUrl, cardClick.title);
          },
          handleDeleteCard: (cardDeleted) => {
            const confirmationPopup = new PopupWithConfirmation(
              "#popup-confirmation",
              cardDeleted.id,
              cardDeleted.api,
              cardDeleted.cardElement,
              cardDeleted.isLiked
            );
            confirmationPopup.setEventListeners();
            confirmationPopup.open();
          },
        });
        const cardElement = card.generateCard();

        cardSection.addItem(cardElement);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  () => editProfileFormValidator.resetValidation()
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
  avatar: profileImage,
});

editProfileButton.addEventListener("click", openProfile);
editElementsButton.addEventListener("click", openElements);

api
  .getInitialData()

  .then(([userInfo, inicialCards]) => {
    userInformation.setUserInfo(userInfo.name, userInfo.about, userInfo.avatar);
    console.log(userInfo);
    inicialCards.reverse().forEach((cardData) => {
      const card = new Card({
        imageUrl: cardData.link,
        title: cardData.name,
        _id: cardData._id,
        apiInstance: api,
        handleClickImage: (cardClick) => {
          const popupWithImage = new PopupWithImage("#popup-image");
          popupWithImage.setEventListeners();
          popupWithImage.open(cardClick.imageUrl, cardClick.title);
        },
        handleDeleteCard: (cardDeleted) => {
          const confirmationPopup = new PopupWithConfirmation(
            "#popup-confirmation",
            cardDeleted.id,
            cardDeleted.api,
            cardDeleted.cardElement,
            cardDeleted.isLiked
          );
          confirmationPopup.setEventListeners();
          confirmationPopup.open();
        },
      });
      const cardElement = card.generateCard();

      cardSection.addItem(cardElement);
    });
  })
  .catch((err) => {
    console.log(err);
  });
