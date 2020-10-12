'use strict';

(function () {
  const userNameInput = document.querySelector(`.setup-user-name`);


  window.util = {
    isEscEvent(evt, action) {
      if (evt.key === `Escape` && !(userNameInput === document.activeElement)) {
        evt.preventDefault();
        action();
      }
    },
    isEnterEvent(evt, action) {
      if (evt.key === `Enter`) {
        action();
      }
    },
    getRandomArrElement(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },
    getMaxElement(arr) {
      let maxElement = arr[0];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
          maxElement = arr[i];
        }
      }
      return maxElement;
    },
    userNameInput
  };
})();


