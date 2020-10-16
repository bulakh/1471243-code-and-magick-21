'use strict';

(function () {
  const MAX_SIMILAR_WIZARD_COUNT = 4;
  const userDialog = window.setup.userDialog;
  const getRandomSomeElementsFromArr = window.util.getRandomSomeElementsFromArr;
  const load = window.backend.load;
  const save = window.backend.save;
  const form = window.setup.userForm;

  const similarListElement = userDialog.querySelector(`.setup-similar-list`);
  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);

  const renderWizard = function (wizard) {
    const wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes;

    return wizardElement;
  };

  const successHandler = function (res) {
    const fragment = document.createDocumentFragment();
    const randomWizards = getRandomSomeElementsFromArr(MAX_SIMILAR_WIZARD_COUNT, res);

    for (let i = 0; i < randomWizards.length; i++) {
      fragment.appendChild(renderWizard(randomWizards[i]));
    }
    similarListElement.appendChild(fragment);

    userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
  };


  const errorHandler = function (errorMessage) {
    const node = document.createElement(`div`);
    node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
    node.style.position = `absolute`;
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = `30px`;

    node.textContent = errorMessage;
    document.body.insertAdjacentElement(`afterbegin`, node);
  };

  const submitHandler = function (evt) {
    save(new FormData(form), function () {
      userDialog.classList.add(`hidden`);
    }, errorHandler);
    evt.preventDefault();
  };

  load(successHandler, errorHandler);
  form.addEventListener(`submit`, submitHandler);
})();
