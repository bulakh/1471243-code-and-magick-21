'use strict';

(function () {
  const MIN_NAME_LENGTH = 2;
  const MAX_NAME_LENGTH = 25;

  const userNameInput = window.util.userNameInput;

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
})();
