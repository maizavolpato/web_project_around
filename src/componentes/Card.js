import { PopupWithConfirmation } from "./PopupWithConfirmation.js";
import { PopupWithImage } from "./PopupWithImage.js";

export class Card {
  constructor({ imageUrl, title, isLiked, _id, owner, apiInstance }) {
    this.imageUrl = imageUrl;
    this.title = title;
    this.isLiked = isLiked;
    this.id = _id;
    this.owner = owner;
    this.api = apiInstance;
  }
  _getTemplate() {
    const template = document.querySelector("#elements-template").content;
    const cardElement = template.querySelector(".element").cloneNode(true);
    return cardElement;
  }

  //buttonLikeElement(evt) {
  //this.likeButton.classList.toggle("element__card-button-like-active");
  //}

  setEventListeners() {
    this.elementImage.addEventListener("click", () => {
      const popupWithImage = new PopupWithImage("#popup-image");
      popupWithImage.setEventListeners();
      popupWithImage.open(this.imageUrl, this.title);
    });

    this.removeElement.addEventListener("click", (evt) => {
      const confirmationPopup = new PopupWithConfirmation(
        "#popup-confirmation",
        this.id,
        this.api,
        this.cardElement,
        this.isLiked
      );
      confirmationPopup.setEventListeners();
      confirmationPopup.open();
    });

    this.likeButton.addEventListener("click", () => {
      if (this.isLiked === true) {
        this.api
          .likeCardOff(this.id)
          .then(() => {
            this.likeButton.classList.remove(
              "element__card-button-like-active"
            );
            this.isLiked = false;
          })
          .catch((err) => {
            console.log(err);
          });
      }
      this.api
        .likeCardOn(this.id)
        .then(() => {
          this.likeButton.classList.add("element__card-button-like-active");
          this.isLiked = true;
        })
        .catch((err) => {
          console.log(err);
        });
    }); //this.buttonLikeElement());
  }

  generateCard() {
    this.cardElement = this._getTemplate();

    this.elementImage = this.cardElement.querySelector(".element__image");
    this.elementImage.src = this.imageUrl;
    this.elementImage.alt = this.title;

    this.elementTitle = this.cardElement.querySelector(".element__card-text");
    this.elementTitle.textContent = this.title;

    this.removeElement = this.cardElement.querySelector(
      ".element__remove-button"
    );

    this.likeButton = this.cardElement.querySelector(
      ".element__card-button-like"
    );

    this.setEventListeners();

    return this.cardElement;
  }
}
