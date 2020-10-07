'use strict';

const FIRST_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SECOND_NAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
const FIREBALL_COLOR = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];

const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 25;

const userDialog = document.querySelector(`.setup`);
const userForm = userDialog.querySelector(`.setup-wizard-form`);
const userDialogOpen = document.querySelector(`.setup-open`);
const userDialogIcon = document.querySelector(`.setup-open-icon`);
const userDialogClose = userDialog.querySelector(`.setup-close`);
const userNameInput = userDialog.querySelector(`.setup-user-name`);

const wizardSetup = document.querySelector(`.setup-wizard`);
const wizardCoat = wizardSetup.querySelector(`.wizard-coat`);
const wizardEyes = wizardSetup.querySelector(`.wizard-eyes`);
const wizardFireball = document.querySelector(`.setup-fireball-wrap`);

const coatColorInput = userForm.querySelector(`.coat-color-input`);
const eyesColorInput = userForm.querySelector(`.eyes-color-input`);
const fireballColorInput = userForm.querySelector(`.fireball-color-input`);

const similarListElement = userDialog.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);

const getRandomArrElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

const wizards = [
  {
    name: getRandomArrElement(FIRST_NAMES) + ` ` + getRandomArrElement(SECOND_NAMES),
    coatColor: getRandomArrElement(COAT_COLOR),
    eyesColor: getRandomArrElement(EYES_COLOR)
  },
  {
    name: getRandomArrElement(FIRST_NAMES) + ` ` + getRandomArrElement(SECOND_NAMES),
    coatColor: getRandomArrElement(COAT_COLOR),
    eyesColor: getRandomArrElement(EYES_COLOR)
  },
  {
    name: getRandomArrElement(FIRST_NAMES) + ` ` + getRandomArrElement(SECOND_NAMES),
    coatColor: getRandomArrElement(COAT_COLOR),
    eyesColor: getRandomArrElement(EYES_COLOR)
  },
  {
    name: getRandomArrElement(FIRST_NAMES) + ` ` + getRandomArrElement(SECOND_NAMES),
    coatColor: getRandomArrElement(COAT_COLOR),
    eyesColor: getRandomArrElement(EYES_COLOR)
  }
];

// Создание похожих персонажей

const renderWizard = function (wizard) {
  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

const fragment = document.createDocumentFragment();
for (let i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);


// Изменение цвета

const renderColor = function (thing, color, inputColor) {
  const colorOfArray = getRandomArrElement(color);
  thing.style.fill = colorOfArray;
  inputColor.value = colorOfArray;
};

const onCoatChangeColor = function () {
  renderColor(wizardCoat, COAT_COLOR, coatColorInput);
};

const onEyesChangeColor = function () {
  renderColor(wizardEyes, EYES_COLOR, eyesColorInput);
};

const onFireballChangeColor = function () {
  const colorOfArray = getRandomArrElement(FIREBALL_COLOR);
  wizardFireball.style.backgroundColor = colorOfArray;
  fireballColorInput.value = colorOfArray;
};


// Открытие/закрытие окна настроек персонажа

const onPopupEscPress = function (evt) {
  if (evt.key === `Escape` && !(userNameInput === document.activeElement)) {
    evt.preventDefault();
    closePopup();
  }
};

const onPopupEnterPress = function (evt) {
  if (evt.key === `Enter`) {
    closePopup();
  }
};

const openPopup = function () {
  userDialog.classList.remove(`hidden`);

  document.addEventListener(`keydown`, onPopupEscPress);
  userDialogClose.addEventListener(`keydown`, onPopupEnterPress);
  wizardCoat.addEventListener(`click`, onCoatChangeColor);
  wizardEyes.addEventListener(`click`, onEyesChangeColor);
  wizardFireball.addEventListener(`click`, onFireballChangeColor);
};

const closePopup = function () {
  userDialog.classList.add(`hidden`);

  document.removeEventListener(`keydown`, onPopupEscPress);
  userDialogClose.removeEventListener(`keydown`, onPopupEnterPress);
  wizardCoat.removeEventListener(`click`, onCoatChangeColor);
  wizardEyes.removeEventListener(`click`, onEyesChangeColor);
  wizardFireball.removeEventListener(`click`, onFireballChangeColor);
};

userDialogIcon.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    openPopup();
  }
});

userDialogOpen.addEventListener(`click`, function () {
  openPopup();
});

userDialogClose.addEventListener(`click`, function () {
  closePopup();
});


// Валидация имени игрока

userNameInput.addEventListener(`input`, function () {
  const valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Ещё ` + (MIN_NAME_LENGTH - valueLength) + ` симв.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Удалите лишние ` + (valueLength - MAX_NAME_LENGTH) + ` симв.`);
  } else {
    userNameInput.setCustomValidity(``);
  }
});

