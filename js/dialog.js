'use strict';

(function () {
  const userDialog = window.render.userDialog;
  const userDialogOpen = document.querySelector(`.setup-open`);
  const userDialogIcon = document.querySelector(`.setup-open-icon`);
  const userDialogClose = userDialog.querySelector(`.setup-close`);
  const wizardCoat = window.setup.wizardCoat;
  const wizardEyes = window.setup.wizardEyes;
  const wizardFireball = window.setup.wizardFireball;
  const onCoatChangeColor = window.setup.onCoatChangeColor;
  const onEyesChangeColor = window.setup.onEyesChangeColor;
  const onFireballChangeColor = window.setup.onFireballChangeColor;
  const dialogHandle = window.move.dialogHandle;
  const toZeroCoordsDialog = window.move.toZeroCoordsDialog;
  const onIconMoveDialog = window.move.onIconMoveDialog;

  const onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  const onPopupEnterPress = function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  };

  const onPopupEnterPressClose = function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  };

  const openPopup = function () {
    toZeroCoordsDialog();
    userDialog.classList.remove(`hidden`);
    document.addEventListener(`keydown`, onPopupEscPress);
    userDialogClose.addEventListener(`keydown`, onPopupEnterPressClose);
    wizardCoat.addEventListener(`click`, onCoatChangeColor);
    wizardEyes.addEventListener(`click`, onEyesChangeColor);
    wizardFireball.addEventListener(`click`, onFireballChangeColor);
    dialogHandle.addEventListener(`mousedown`, onIconMoveDialog);
  };

  const closePopup = function () {
    userDialog.classList.add(`hidden`);
    document.removeEventListener(`keydown`, onPopupEscPress);
    userDialogClose.removeEventListener(`keydown`, onPopupEnterPress);
    wizardCoat.removeEventListener(`click`, onCoatChangeColor);
    wizardEyes.removeEventListener(`click`, onEyesChangeColor);
    wizardFireball.removeEventListener(`click`, onFireballChangeColor);
    dialogHandle.removeEventListener(`mosedown`, onIconMoveDialog);
  };

  userDialogIcon.addEventListener(`keydown`, onPopupEnterPress);

  userDialogOpen.addEventListener(`click`, openPopup);

  userDialogClose.addEventListener(`click`, closePopup);
})();
