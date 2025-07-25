let img;
let song;
let started = false;
let scaleFactor = 1;

function preload() {
  img = loadImage("krishna.png");
  // DO NOT preload the song
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
    if (!song || !song.isPlaying()) {
      song = loadSound("krishna_bg_music.mp3", () => {
        song.setVolume(0.4);
        song.loop();
      }, 
      (err) => {
        console.error("Failed to load sound:", err);
      });
    }
    started = true;
  }
}


function windowResized() {
  scaleFactor = min(windowWidth / img.width, windowHeight / (img.height + 100));
  resizeCanvas(img.width * scaleFactor, (img.height + 100) * scaleFactor);
}
function touchStarted() {
  mousePressed(); // trigger the same logic for mobile taps
}
