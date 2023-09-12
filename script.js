const canvasSize = 1500;
const grSize = canvasSize;
const canvas = document.createElement('canvas');
canvas.width = 1500;
canvas.height = 1500;
const ctx = canvas.getContext('2d');
ctx.fillRect(0, 0, 100, 100)
function setup() {
  createCanvas(canvasSize, canvasSize);
  frameRate(30);
  pg = createGraphics(grSize, grSize);
}

function draw() {
  //background(0);
  pg.background(0);
  pg.fill(255);
  pg.textFont("Hind");
  pg.textSize(canvasSize/6.6);
  pg.push();
  pg.translate(grSize/2, grSize/2);
  pg.textAlign(CENTER, CENTER);
  pg.textLeading(canvasSize/6.6-10);
  pg.text("gost", -canvasSize/20.5, -canvasSize/40.25, 200);
  pg.pop();

  let tilesX = 50;
  let tilesY = 8;

  let tileW = int(width/tilesX);
  let tileH = int(height/tilesY);

  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {

      // WARP
      let wave = int(sin(frameCount * 0.05 + ( x * y ) * 0.04) * 60);
      //wave = 0;
      // SOURCE
      let sx = x*tileW + wave;
      let sy = y*tileH + wave*1.25;
      let sw = tileW;
      let sh = tileH;


      // DESTINATION
      let dx = x*tileW;
      let dy = y*tileH;
      let dw = tileW;
      let dh = tileH;

      copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);

    }
  }
}