let bg = "#111111";
let fg = "#ff0000";

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(fg);
  noStroke();

  let tilesX = 4;
  let tilesY = tilesX;
  let tileW = width / tilesX;
  let tileH = height / tilesY;

  for (let x = 0; x < tilesX; x++) {
    for (let y = 0; y < tilesY; y++) {
      let posX = tileW * x;
      let posY = tileH * y;

      let wave = sin(radians(frameCount + x * 10 + y * 10));
      let mappedWave = map(wave, -1, 1, 0, 5);

      let selector = int(mappedWave);
      //selector = 1;

      push();
      translate(posX, posY);
      if (selector == 0) {
        arc(0, 0, tileW * 2, tileH * 2, radians(0), radians(90));
      } else if (selector == 1) {
        arc(0, 0, tileW * 2, tileH * 2, radians(90), radians(180));
      } else if (selector == 2) {
        arc(0, 0, tileW * 2, tileH * 2, radians(180), radians(270));
      } else if (selector == 3) {
        arc(0, 0, tileW * 2, tileH * 2, radians(270), radians(360));
      } else {
        rect(0, 0, tileW, tileH);
      }
      pop();
    }
  }
}
