let img;
let song;
let started = false;
let titleOpacity = 0;
let clickOpacity = 0;
let showHint = false;

function preload() {
  img = loadImage("krishna.png");
  soundFormats('mp3', 'ogg');
  song = loadSound("krishna_bg_music.mp3");
}

function setup() {
  createCanvas(img.width, img.height + 100); // canvas taller than image
  textAlign(CENTER, CENTER);
  textFont('Georgia');
  frameRate(60);
}

function draw() {
  background(0, 0, 10, 50);

  // Animate glowing title (after start)
  if (started && titleOpacity < 255) {
    titleOpacity += 2;
  }

  // Glowing "Click to Begin" before interaction
  if (!started) {
    clickOpacity = 128 + 128 * sin(millis() / 500);
    fill(255, clickOpacity);
    textSize(22);
    text("Click anywhere to begin your divine journey", width / 2, height / 2 + 20);
    return;
  }

  // Krishna dotted image
  for (let dot of krishnaDots) {
    dot.update();
    dot.show();
  }

  // Show tooltip on hover
  if (mouseX > 0 && mouseX < width && mouseY > 100 && mouseY < height) {
    showHint = true;
  } else {
    showHint = false;
  }

  if (showHint) {
    fill(255, 220);
    textSize(16);
    text("Move cursor outside the image to see it clearly", width / 2, height - 25);  // moved up
  }

  // Spiritual Sanskrit line (moved upward)
  if (started) {
    textSize(32);
    fill(255, 204, 0, titleOpacity);
    text("कृष्णं वन्दे जगद्गुरुम्", width / 2, height - 60); // moved up
  }
}

function mousePressed() {
  if (!started) {
    extractDotsFromImage(img);
    song.loop();
    song.setVolume(0.4);
    started = true;
  } else {
    for (let dot of krishnaDots) {
      let explosion = p5.Vector.sub(dot.pos, createVector(mouseX, mouseY));
      explosion.setMag(30);
      dot.pos.add(explosion);
    }
  }
}
function windowResized() {
  scaleFactor = min(windowWidth / img.width, windowHeight / (img.height + 100));
  resizeCanvas(img.width * scaleFactor, (img.height + 100) * scaleFactor);
}

