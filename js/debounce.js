'use strict';

(function () {
  const DEBOUNCE_INTERVAL = 500;


  window.debounce = {
    setDebounce(cb) {
      let lastTimeout = null;

      return function (...parameters) {
        if (lastTimeout) {
          window.clearTimeout(lastTimeout);
        }
        lastTimeout = window.setTimeout(function () {
          cb(...parameters);
        }, DEBOUNCE_INTERVAL);
      };
    }
  };
})();
