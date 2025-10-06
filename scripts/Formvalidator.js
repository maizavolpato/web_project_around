export class FormValidator {
  constructor(
    {
      formSelector,
      inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      inputErrorClass,
      errorClass,
    },

    formElement
  ) {
    this._formSelector = formSelector;
    this._inputSelector = inputSelector;
    this._submitButtonSelector = submitButtonSelector;
    this._inactiveButtonClass = inactiveButtonClass;
    this._inputErrorClass = inputErrorClass;
    this._errorClass = errorClass;

    this._formElement = formElement;
  }

  _hasInvalidInput() {
    const hasInvalidInput = this._inputList.some(
      (input) => !input.validity.valid
    );
    return hasInvalidInput;
  }

  _disableSubmitButton() {
    this._submitButtonElement.disabled = true;
    this._submitButtonElement.classList.add(this._inactiveButtonClass);
  }

  _enableSubmitButton() {
    this._submitButtonElement.disabled = false;
    this._submitButtonElement.classList.remove(this._inactiveButtonClass);
  }

  _toggleButtonState() {
    this._submitButtonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );
    if (this._hasInvalidInput()) {
      this._disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  }

  _showError(input) {
    this._errorElement = formElement.querySelector(`#${input.name}-error`);

    input.classList.add(inputErrorClass);
    this._errorElement.classList.add(errorClass);
    this._errorElement.textContent = input.validationMessage;
  }

  _hideError(input) {
    this._errorElement = formElement.querySelector(`#${input.name}-error`);

    input.classList.remove(inputErrorClass);
    this._errorElement.classList.remove(errorClass);
  }

  _checkInputValid(input) {
    if (input.validity.valid) {
      this._hideError(input);
    } else {
      this._showError(input);
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._formElement.querySelector(this._inputSelector)
    );
    this._inputList.forEach((input) => {
      checkInputValid(input);
      toglleButtonState();
    });
  }

  resetValidation() {
    this._formElement.reset();

    this._inputList.forEach((input) => {
      this._hideError(input);
    });

    this._toggleButtonState();
  }

  enableValidation() {
    this._setEventListeners();
    this._toggleButtonState();
  }
}
