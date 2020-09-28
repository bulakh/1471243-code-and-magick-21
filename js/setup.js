'use strict';

const FIRST_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SECOND_NAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];

const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

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
