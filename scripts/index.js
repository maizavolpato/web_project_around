//Abrir o formulario para editar o perfil
//Ao clicar abrir a janela
//Fazer o formulario aparecer

const editProfileButton = document.querySelector(".profile__edit-button");
const openFormProfile = document.querySelector(".form");
const closeFormProfile = document.querySelector(".form__button-close");
const nameProfile = document.querySelector(".profile__name");
const inputName = document.querySelector("#name");
const jobProfile = document.querySelector(".profile__job");
const inputJob = document.querySelector("#detail");
const profileFormSubmit = document.querySelector(".form__edit");

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
  if (inputName.value.trim === "" || inputJob.value.trim == "") {
    alert("Input invalid!");
    return;
  }
  closeProfile();
}

editProfileButton.addEventListener("click", openProfile);
closeFormProfile.addEventListener("click", closeProfile);
profileFormSubmit.addEventListener("submit", handleProfileFormSubmit);
