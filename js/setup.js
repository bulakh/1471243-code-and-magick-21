'use strict';

(function () {
  const COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
  const EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
  const FIREBALL_COLOR = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
  const wizardSetup = document.querySelector(`.setup-wizard`);
  const wizardCoat = wizardSetup.querySelector(`.wizard-coat`);
  const wizardEyes = wizardSetup.querySelector(`.wizard-eyes`);
  const wizardFireball = document.querySelector(`.setup-fireball-wrap`);

  const userDialog = document.querySelector(`.setup`);
  const userForm = userDialog.querySelector(`.setup-wizard-form`);
  const coatColorInput = userForm.querySelector(`.coat-color-input`);
  const eyesColorInput = userForm.querySelector(`.eyes-color-input`);
  const fireballColorInput = userForm.querySelector(`.fireball-color-input`);
  const getRandomArrElement = window.util.getRandomArrElement;

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

  window.setup = {
    COAT_COLOR,
    EYES_COLOR,
    wizardSetup,
    wizardCoat,
    wizardEyes,
    wizardFireball,
    userDialog,
    onCoatChangeColor,
    onEyesChangeColor,
    onFireballChangeColor
  };
})();
