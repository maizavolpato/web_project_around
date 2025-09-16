function showError(input, errorMessage, inputErrorClass, errorClass) {
  input.classList.add(inputErrorClass);
  errorMessage.classList.add(errorClass);
  errorMessage.textContent = input.validationMessage;
}

function hideError(input, errorMessage, inputErrorClass, errorClass) {
  input.classList.remove(inputErrorClass);
  errorMessage.classList.remove(errorClass);
}

function checkInputValid(input, inputErrorClass, errorClass) {
  const isValid = input.validity.valid;
  console.log(isValid);
  const errorMessage = document.querySelector(`#${input.name}-error`);
  if (!isValid) {
    showError(input, errorMessage, inputErrorClass, errorClass);
  } else {
    hideError(input, errorMessage, inputErrorClass, errorClass);
  }
}

function hasInvalidInput(inputList) {
  const hasInvalidInput = inputList.some((input) => !input.validity.valid);
  return hasInvalidInput;
}

function toggleButtonState(
  inputList,
  submitButtonElement,
  inactiveButtonClass
) {
  if (hasInvalidInput(inputList)) {
    submitButtonElement.disabled = true;
    submitButtonElement.classList.add(inactiveButtonClass);
  } else {
    submitButtonElement.disabled = false;
    submitButtonElement.classList.remove(inactiveButtonClass);
  }
}

function resetValidation({
  formSelector,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass,
}) {
  const formsElement = document.querySelectorAll(formSelector);
  formsElement.forEach((form) => {
    form.reset();
    const inputList = Array.from(form.querySelectorAll(inputSelector));
    const submitButtonElement = form.querySelector(submitButtonSelector);

    inputList.forEach((input) => {
      const errorMessage = document.querySelector(`#${input.name}-error`);
      hideError(input, errorMessage, inputErrorClass, errorClass);
      toggleButtonState(inputList, submitButtonElement, inactiveButtonClass);
    });
  });
}

function enableValidation({
  formSelector,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass,
}) {
  const formsElement = document.querySelectorAll(formSelector);
  formsElement.forEach((form) => {
    const inputList = Array.from(form.querySelectorAll(inputSelector));
    const submitButtonElement = form.querySelector(submitButtonSelector);
    toggleButtonState(inputList, submitButtonElement, inactiveButtonClass);

    inputList.forEach((input) => {
      input.addEventListener("input", () => {
        checkInputValid(input, inputErrorClass, errorClass);
        toggleButtonState(inputList, submitButtonElement, inactiveButtonClass);
      });
    });
  });
}

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});

export { resetValidation };
