import TileMap from "./TileMap.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const tileSize = 32;

const tileMap = new TileMap(tileSize);

function gameLoop() {
  tileMap.draw(canvas, ctx);
}

setInterval(gameLoop, 1000 / 60);
