let img;
let song;
let started = false;
let scaleFactor = 1;

function preload() {
  img = loadImage("krishna.png");
  soundFormats('mp3', 'ogg');
  song = loadSound("krishna_bg_music.mp3");
}

function setup() {
  scaleFactor = min(windowWidth / img.width, windowHeight / (img.height + 100));
  createCanvas(img.width * scaleFactor, (img.height + 100) * scaleFactor);
  textAlign(CENTER, CENTER);
  textFont('Georgia');
  frameRate(60);
}

function draw() {
  background(0, 0, 10, 50);

  if (!started) {
    fill(255);
    textSize(24 * scaleFactor);
    text("Tap anywhere to begin", width / 2, height / 2);
    return;
  }

  for (let dot of krishnaDots) {
    dot.update();
    dot.show(scaleFactor);
  }

  fill(255);
  textSize(22 * scaleFactor);
  text("कृष्णं वन्दे जगद्गुरुम्", width / 2, height - 60 * scaleFactor);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    textSize(16 * scaleFactor);
    text("Move cursor outside the image to see it clearly", width / 2, height - 30 * scaleFactor);
  }
}

function mousePressed() {
  if (!started) {
    extractDotsFromImage(img);
    song.setVolume(0.4);
    song.loop();
    started = true;
  } else {
    for (let dot of krishnaDots) {
      let explosion = p5.Vector.sub(dot.pos, createVector(mouseX / scaleFactor, mouseY / scaleFactor));
      explosion.setMag(30);
      dot.pos.add(explosion);
    }
  }
}

function windowResized() {
  scaleFactor = min(windowWidth / img.width, windowHeight / (img.height + 100));
  resizeCanvas(img.width * scaleFactor, (img.height + 100) * scaleFactor);
}
