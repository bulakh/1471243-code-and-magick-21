'use strict';

(function () {
  const userDialog = window.render.userDialog;
  const userForm = window.setup.userForm;
  const load = window.backend.load;
  const save = window.backend.save;
  const renderWizards = window.render.renderWizards;
  const setDebounce = window.debounce.setDebounce;

  let coatColor = `rgb(101, 137, 164)`;
  let eyesColor = `black`;
  let wizards = [];

  const getRank = function (wizard) {
    let rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  const updateWizards = function () {
    renderWizards(wizards.slice().
    sort(function (left, right) {
      let rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
      }
      return rankDiff;
    }));
  };

  window.setup.wizard.onCoatChange = setDebounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  window.setup.wizard.onEyesChange = setDebounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  const successHandler = function (data) {
    wizards = data;
    updateWizards();
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
    save(new FormData(userForm), function () {
      userDialog.classList.add(`hidden`);
    }, errorHandler);
    evt.preventDefault();
  };

  load(successHandler, errorHandler);
  userForm.addEventListener(`submit`, submitHandler);
})();
