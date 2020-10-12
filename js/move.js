'use strict';

(function () {
  const userDialog = window.setup.userDialog;

  const dialogHandle = userDialog.querySelector(`.upload`);

  window.move = {
    dialogHandle,
    toZeroCoordsDialog() {
      userDialog.removeAttribute(`style`);
    },
    onIconMoveDialog(evt) {
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
    }
  };
})();
