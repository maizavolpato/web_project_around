const editProfileButton = document.querySelector(".profile__edit-button");
const openFormProfile = document.querySelector(".form-profile");
const closeFormProfile = document.querySelector(".form-profile__button-close");
const nameProfile = document.querySelector(".profile__name");
const inputName = document.querySelector("#name");
const jobProfile = document.querySelector(".profile__job");
const inputJob = document.querySelector("#detail");
const profileFormSubmit = document.querySelector(".form-profile__edit");
const editElementsButton = document.querySelector(".profile__add-image-button");
const openFormElements = document.querySelector(".form-elements");
const closeFormElements = document.querySelector(
  ".form-elements__button-close"
);
const inputTitle = document.querySelector("#title");
const inputImage = document.querySelector("#image");
const ElementsFormSubmit = document.querySelector(".form-elements__edit");
const elementsTemplate = document.querySelector("#elements-template").content;
const elementsContainer = document.querySelector(".elements");
const initialElements = [
  {
    imageUrl: "./images/photo_1.png",
    title: "Vale de Yosemite",
  },
  {
    imageUrl: "./images/photo_2.png",
    title: "Lago Louise",
  },
  {
    imageUrl: "./images/photo_3.png",
    title: "Montanhas Care",
  },
  {
    imageUrl: "./images/photo_4.png",
    title: "Latemar",
  },
  {
    imageUrl: "./images/photo_5.png",
    title: "Parque Nacional da Vanoise",
  },
  {
    imageUrl: "./images/photo_6.png",
    title: "Lago di Braies",
  },
];

function openProfile() {
  openFormProfile.classList.add("form_open");
  inputName.value = nameProfile.textContent;
  inputJob.value = jobProfile.textContent;
}

function closeProfile() {
  openFormProfile.classList.remove("form_open");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  nameProfile.textContent = inputName.value;
  jobProfile.textContent = inputJob.value;

  if (inputName.value.trim() === "" || inputJob.value.trim() == "") {
    alert("Input invalid!");
    return;
  }

  closeProfile();
}

editProfileButton.addEventListener("click", openProfile);
closeFormProfile.addEventListener("click", closeProfile);
profileFormSubmit.addEventListener("submit", handleProfileFormSubmit);

function openElements() {
  openFormElements.classList.add("form_open");
}

function closeElements() {
  openFormElements.classList.remove("form_open");
}

function handleElementsFormSubmit(evt) {
  evt.preventDefault();

  const newElements = {
    imageUrl: inputImage.value,
    title: inputTitle.value,
  };

  renderElements(newElements);

  inputTitle.textContent = inputTitle.value;

  closeElements();
}

function renderElements(element) {
  const elementsItem = elementsTemplate
    .querySelector(".element")
    .cloneNode(true);

  const image = elementsItem.querySelector(".element__image");
  image.src = element.imageUrl;
  image.alt = element.title;

  const title = elementsItem.querySelector(".element__card-text");
  title.textContent = element.title;

  elementsContainer.prepend(elementsItem);
}

initialElements.forEach((element) => {
  renderElements(element);
});

editElementsButton.addEventListener("click", openElements);
closeFormElements.addEventListener("click", closeElements);
ElementsFormSubmit.addEventListener("submit", handleElementsFormSubmit);
