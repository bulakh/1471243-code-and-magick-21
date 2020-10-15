'use strict';

(function () {
  const URLdata = `https://21.javascript.pages.academy/code-and-magick/data`;
  const URL = `https://21.javascript.pages.academy/code-and-magick`;

  const xhr = new XMLHttpRequest();
  xhr.responseType = `json`;

  const StatusCode = {
    OK: 200
  };
  const TIMEOUT_IN_MS = 10000;

  const renderLoad = function (onLoad, onError) {

    xhr.addEventListener(`load`, function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError(`Статус ответа: ` + xhr.status + ` ` + xhr.statusText);
      }
    });

    xhr.addEventListener(`error`, function () {
      onError(`Произошла ошибка соединения`);
    })
    ;
    xhr.addEventListener(`timeout`, function () {
      onError(`Запрос не успел выполниться за ` + xhr.timeout + ` мс`);
    });

    xhr.timeout = TIMEOUT_IN_MS;
  };


  window.backend = {
    load(onLoad, onError) {

      renderLoad(onLoad, onError);

      xhr.open(`GET`, URLdata);
      xhr.send();
    },
    save(data, onLoad, onError) {

      renderLoad(onLoad, onError);

      xhr.open(`POST`, URL);
      xhr.send(data);
    }
  };
})();
