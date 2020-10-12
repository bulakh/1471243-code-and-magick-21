'use strict';

(function () {
  const FIRST_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
  const SECOND_NAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
  const COAT_COLOR = window.setup.COAT_COLOR;
  const EYES_COLOR = window.setup.EYES_COLOR;

  const userDialog = window.setup.userDialog;

  const similarListElement = userDialog.querySelector(`.setup-similar-list`);
  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);

  const getRandomArrElement = window.util.getRandomArrElement;

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

})();
