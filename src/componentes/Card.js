export class Card {
  constructor({ imageUrl, title }) {
    this.imageUrl = imageUrl;
    this.title = title;
  }
  _getTemplate() {
    const template = document.querySelector("#elements-template").content;
    const cardElement = template.querySelector(".element").cloneNode(true);
    return cardElement;
  }

  buttonLikeElement(evt) {
    this.likeButton.classList.toggle("element__card-button-like-active");
  }

  buttonRemoveElement() {
    this.cardElement.remove();
  }

  setEventListeners() {
    this.removeElement.addEventListener("click", () =>
      this.buttonRemoveElement()
    );
    this.likeButton.addEventListener("click", () => this.buttonLikeElement());
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
