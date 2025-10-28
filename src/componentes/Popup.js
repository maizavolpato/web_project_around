export class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _handleClosePopup(evt) {
    if (
      evt.target.classList.contains("popup") ||
      evt.target.classList.contains("popup__button-close") ||
      evt.target.classList.contains("popup__image-button-close")
    ) {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener("click", (evt) =>
      this._handleClosePopup(evt)
    );
  }

  open() {
    this._popupElement.classList.add("popup_open");
    document.addEventListener("keyup", (evt) => this._handleEscClose(evt));
  }

  close() {
    this._popupElement.classList.remove("popup_open");
    document.removeEventListener("keyup", (evt) => this._handleEscClose(evt));
  }
}
