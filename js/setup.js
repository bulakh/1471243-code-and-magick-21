'use strict';

(function () {
  const COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
  const EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
  const FIREBALL_COLOR = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
  const wizardSetup = document.querySelector(`.setup-wizard`);
  const wizardCoat = wizardSetup.querySelector(`.wizard-coat`);
  const wizardEyes = wizardSetup.querySelector(`.wizard-eyes`);
  const wizardFireball = document.querySelector(`.setup-fireball-wrap`);

  const userDialog = window.render.userDialog;
  const userForm = userDialog.querySelector(`.setup-wizard-form`);
  const coatColorInput = userForm.querySelector(`.coat-color-input`);
  const eyesColorInput = userForm.querySelector(`.eyes-color-input`);
  const fireballColorInput = userForm.querySelector(`.fireball-color-input`);
  const getRandomArrElement = window.util.getRandomArrElement;

  let wizard = {
    onCoatChange(color) {
      return color;
    },
    onEyesChange(color) {
      return color;
    }
  };

  const onCoatChangeColor = function () {
    const colorOfArray = getRandomArrElement(COAT_COLOR);
    wizardCoat.style.fill = colorOfArray;
    coatColorInput.value = colorOfArray;
    wizard.onCoatChange(colorOfArray);
  };

  const onEyesChangeColor = function () {
    const colorOfArray = getRandomArrElement(EYES_COLOR);
    wizardEyes.style.fill = colorOfArray;
    eyesColorInput.value = colorOfArray;
    wizard.onEyesChange(colorOfArray);
  };

  const onFireballChangeColor = function () {
    const colorOfArray = getRandomArrElement(FIREBALL_COLOR);
    wizardFireball.style.backgroundColor = colorOfArray;
    fireballColorInput.value = colorOfArray;
  };

  window.setup = {
    COAT_COLOR,
    EYES_COLOR,
    wizardSetup,
    wizardCoat,
    wizardEyes,
    wizardFireball,
    userForm,
    onCoatChangeColor,
    onEyesChangeColor,
    onFireballChangeColor,
    wizard
  };
})();
