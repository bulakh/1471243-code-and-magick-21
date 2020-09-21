'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const CLOUD_GAP = 10;
const GAP = 40;
const FONT_GAP = 20;
const TITLE_GAP_X = 120;
const TITLE_GAP_Y = 30;
const TITLE_GAP_Y_BETWEEN = 21;
const TITLE_HEIGHT = TITLE_GAP_Y + FONT_GAP + TITLE_GAP_Y_BETWEEN;
const BAR_GAP = 50;
const TEXT_WIDTH = 40;
const BAR_WIDTH = 40;
const BAR_MAX_HEIGHT = 150;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const renderText = function (ctx, text, y) {
  ctx.fillStyle = `#000`;
  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;
  ctx.fillText(text, TITLE_GAP_X, y);
};

const getMaxElement = function (arr) {
  let maxElement = -1;
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (value > maxElement) {
      maxElement = value;
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(
      ctx,
      CLOUD_X + CLOUD_GAP,
      CLOUD_Y + CLOUD_GAP,
      `rgba(0, 0, 0, 0.7)`
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      `#fff`
  );
  renderText(
      ctx,
      `Ура вы победили!`,
      TITLE_GAP_Y
  );
  renderText(
      ctx,
      `Список результатов:`,
      TITLE_GAP_Y + TITLE_GAP_Y_BETWEEN
  );
  const maxTime = getMaxElement(times);
  const getBarColor = function (namePlayer) {
    let randomSaturation = Math.random() * 100;
    if (namePlayer === `Вы`) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    } else {
      ctx.fillStyle = `hsl(240, ` + randomSaturation + `%, 50%)`;
    }
  };

  for (let i = 0; i < names.length; i++) {
    let barHeight = (BAR_MAX_HEIGHT * times[i]) / maxTime;
    ctx.fillStyle = `#000`;
    ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + GAP + (TEXT_WIDTH + BAR_GAP) * i,
        CLOUD_Y + TITLE_HEIGHT + (BAR_MAX_HEIGHT - barHeight)
    );
    ctx.fillText(
        names[i],
        CLOUD_X + GAP + (TEXT_WIDTH + BAR_GAP) * i,
        CLOUD_Y + TITLE_HEIGHT + FONT_GAP + BAR_MAX_HEIGHT + FONT_GAP / 4
    );
    ctx.fillStyle = getBarColor(names[i]);
    ctx.fillRect(
        CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i,
        CLOUD_Y + TITLE_HEIGHT + FONT_GAP + BAR_MAX_HEIGHT,
        BAR_WIDTH,
        -barHeight
    );
  }
};
