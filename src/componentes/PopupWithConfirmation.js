import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector, cardId, apiInstance, cardElement) {
    super(popupSelector);
    this.cardId = cardId;
    this.api = apiInstance;
    this.cardElement = cardElement;
    this._confirmButton = this._popupElement.querySelector(
      ".popup__button-confirm"
    );
  }

  buttonDeleteElement() {
    this.api
      .deleteCard(this.cardId)
      .then(() => {
        this.cardElement.remove();
        this.close();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  setEventListeners() {
    super.setEventListeners();

    this._confirmButton.addEventListener("click", () => {
      this.buttonDeleteElement();
    });
  }
}
