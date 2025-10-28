import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit, handleResetForm) {
    super(popupSelector);

    this._popupForm = this._popupElement.querySelector("#form");
    this._handleFormSubmit = handleFormSubmit;
    this._handleResetForm = handleResetForm;
  }

  _getInputValues() {
    this._inputList = this._popupForm.querySelectorAll(".popup__input");

    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();

      const formValues = this._getInputValues();
      this._handleFormSubmit(formValues);
      this.close();
    });

    super.setEventListeners();
  }

  close() {
    super.close();
    this._handleResetForm();
  }
}
