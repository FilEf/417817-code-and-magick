'use strict';

//  Облако
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var CLOUD_COLOR = 'rgb(255, 255, 255)';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var SHADOW_GAP = 10;

//  Гистограмма
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_SPACE_BETWEEN = 50;
var BAR_CUR_PLAYER_COLOR = 'rgba(255, 0, 0, 1)';

//  Текст
var FONT_HEIGHT = 10;
var FONT_LINE_SPACING = 20;
var FONT_COLOR = 'rgb(0, 0, 0)';
var FONT_BASELINE = 'hanging';

//  Отрисовка облака
function renderCloud(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

//  Поиск наибольшего значения
function getMaxElement(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
}

//  Генерация случайного числа
function getRandNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  ctx.fillStyle = FONT_COLOR;
  ctx.textBaseline = FONT_BASELINE;
  ctx.fillText('Ура, Вы победили!', CLOUD_X + BAR_WIDTH, CLOUD_Y + FONT_HEIGHT);
  ctx.fillText('Список результатов:', CLOUD_X + BAR_WIDTH, SHADOW_GAP + FONT_HEIGHT + FONT_LINE_SPACING);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = FONT_COLOR;
    var curTime = Math.round(times[i]);
    var positionX = CLOUD_X + BAR_SPACE_BETWEEN + (BAR_WIDTH + BAR_SPACE_BETWEEN) * i;
    var nameY = CLOUD_HEIGHT - CLOUD_Y - SHADOW_GAP;
    var timeY = CLOUD_HEIGHT - (BAR_HEIGHT * curTime) / maxTime - SHADOW_GAP - BAR_SPACE_BETWEEN;

    ctx.fillText(players[i], positionX, nameY, BAR_WIDTH, BAR_HEIGHT);
    ctx.fillText(curTime, positionX, timeY, BAR_HEIGHT);


    ctx.fillStyle = (players[i] === 'Вы') ? BAR_CUR_PLAYER_COLOR : 'rgb(0, 0,' + getRandNum(100, 255) + ')';
    ctx.fillRect(positionX, timeY + FONT_LINE_SPACING, BAR_WIDTH, nameY - timeY - FONT_LINE_SPACING - FONT_HEIGHT);
  }
};


