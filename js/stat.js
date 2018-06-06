'use strict';

//Облако
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var CLOUD_COLOR = 'rgb(255, 255, 255)';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var SHADOW_GAP = 10;
var TEXT_WIDTH = 50;

//Гистограмма
var BAR_HEIGHT = 150;
var BAR_SPACE_BETWEEN = 50;
var BAR_WIDTH = 40;
var BAR_CUR_PLAYER_COLOR = 'rgba(255, 0, 0, 1)';

//Отступы внутри облака
var MARGIN_LEFT = 50;
var MARGIN_BOTTOM = 20;

var startX = CLOUD_X + BAR_WIDTH + BAR_SPACE_BETWEEN;
var startY = CLOUD_WIDTH - MARGIN_BOTTOM

//Шрифт
var TEXT_HEIGHT = 30;

//Отрисовка облака
var renderCloud = function(ctx, x, y, color, shadow) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x + shadow, y + shadow);
  ctx.lineTo(x + 420 + shadow, y + shadow);
  ctx.lineTo(x + 420 + shadow, y + 220 + shadow);
  ctx.lineTo(x + 50 + shadow, y + 220 + shadow);
  ctx.bezierCurveTo(x + 50 + shadow, y + 220 + shadow, x + 50 + shadow, y + 220 + shadow, x + 100 + shadow, y + 270 + shadow);
  ctx.lineTo(x + shadow, y + 220 + shadow);
  ctx.lineTo(x + shadow, y + shadow);
  ctx.closePath();
  ctx.fill();
};

//Поиск наибольшего значения
var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X, CLOUD_Y, SHADOW_COLOR, SHADOW_GAP);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR, 0);

  ctx.fillStyle = 'rgb(0, 0, 0)';
  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var positionX = startX * i;
    var nameY = startY + TEXT_HEIGHT;
    ctx.fillText(players[i], positionX, nameY);
    /*ctx.fillRect(
      CLOUD_X + MARGIN_LEFT,
      CLOUD_HEIGHT - MARGIN_BOTTOM -  ,BAR_WIDTH, BAR_HEIGHT);*/
  }
};


