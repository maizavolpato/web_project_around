import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imagePopUp = this._popupElement.querySelector(".popup__image");
    this._titleImagePopup = this._popupElement.querySelector(
      ".popup__image-title"
    );
  }

  open(imageUrl, title) {
    this._imagePopUp.src = imageUrl;
    this._imagePopUp.alt = title;
    this._titleImagePopup.textContent = title;

    super.open();
  }
}

//function openImagePopup(imageUrl, title) {
// imagePopupImage.src = imageUrl;
//imagePopupImage.alt = title;
// imagePopupTitle.textContent = title;
// imagePopup.classList.add("popup-open");
//}

//function closeImagePopup() {
//imagePopup.classList.remove("popup-open");
//imagePopupImage.src = "";
//imagePopupTitle.textContent = "";
//}
