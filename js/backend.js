'use strict';

(function () {
  const URL_DATA = `https://21.javascript.pages.academy/code-and-magick/data`;
  const URL = `https://21.javascript.pages.academy/code-and-magick`;


  const StatusCode = {
    OK: 200
  };
  const TIMEOUT_IN_MS = 10000;

  window.backend = {
    load(onLoad, onError) {

      const xhr = new XMLHttpRequest();
      xhr.responseType = `json`;

      xhr.addEventListener(`load`, function () {
        if (xhr.status === StatusCode.OK) {
          onLoad(xhr.response);
        } else {
          onError(`Статус ответа: ` + xhr.status + ` ` + xhr.statusText);
        }
      });

      xhr.addEventListener(`error`, function () {
        onError(`Произошла ошибка соединения`);
      });
      xhr.addEventListener(`timeout`, function () {
        onError(`Запрос не успел выполниться за ` + xhr.timeout + ` мс`);
      });

      xhr.timeout = TIMEOUT_IN_MS;

      xhr.open(`GET`, URL_DATA);
      xhr.send();
    },

    save(data, onLoad, onError) {

      const xhr = new XMLHttpRequest();
      xhr.responseType = `json`;

      xhr.addEventListener(`load`, function () {
        if (xhr.status === StatusCode.OK) {
          onLoad(xhr.response);
        } else {
          onError(`Статус ответа: ` + xhr.status + ` ` + xhr.statusText);
        }
      });

      xhr.addEventListener(`error`, function () {
        onError(`Произошла ошибка соединения`);
      });
      xhr.addEventListener(`timeout`, function () {
        onError(`Запрос не успел выполниться за ` + xhr.timeout + ` мс`);
      });

      xhr.timeout = TIMEOUT_IN_MS;

      xhr.open(`POST`, URL);
      xhr.send(data);

    }
  };
})();
