'use strict';

(function () {
  const userDialog = window.setup.userDialog;
  const userDialogOpen = document.querySelector(`.setup-open`);
  const userDialogIcon = document.querySelector(`.setup-open-icon`);
  const userDialogClose = userDialog.querySelector(`.setup-close`);
  const wizardCoat = window.setup.wizardCoat;
  const wizardEyes = window.setup.wizardEyes;
  const wizardFireball = window.setup.wizardFireball;
  const onCoatChangeColor = window.setup.onCoatChangeColor;
  const onEyesChangeColor = window.setup.onEyesChangeColor;
  const onFireballChangeColor = window.setup.onFireballChangeColor;
  const dialogHandle = userDialog.querySelector(`.upload`);

  const onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  const onPopupEnterPress = function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  };

  const onPopupEnterPressClose = function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  };

  const onIconMoveDialog = function (evt) {
    evt.preventDefault();

    let startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    let dragged = false;

    const onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      const shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      userDialog.style.top = (userDialog.offsetTop - shift.y) + `px`;
      userDialog.style.left = (userDialog.offsetLeft - shift.x) + `px`;
    };

    const onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mouseup`, onMouseUp);

      if (dragged) {
        const onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener(`click`, onClickPreventDefault);
        };
        dialogHandle.addEventListener(`click`, onClickPreventDefault);
      }
    };

    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);
  };

  const toZeroCoordsDialog = function () {
    userDialog.removeAttribute(`style`);
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
