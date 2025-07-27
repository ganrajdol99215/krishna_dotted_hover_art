let audioElem;
let img;
let chakraImg;
let chakraAngle = 0;
let chakraAlpha = 255;
let started = false;
let scaleFactor = 1;
let safeZoneRadius = 160;

function preload() {
  img = loadImage("krishna.png");
  chakraImg = loadImage("sudarshana-chakra-fiery-disc-attribute-weapon-lord-krishna-religious-symbol-hinduism-vector-illustration-95286952-removebg-preview.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  audioElem = document.getElementById("bgMusic");
  textAlign(CENTER, CENTER);
  textFont('Georgia');
  frameRate(60);
  scaleFactor = min(windowWidth / img.width, windowHeight / (img.height + 100));
  extractDotsFromImage(img);
}

function draw() {
  background(0);
  drawSudarshanChakra();

  if (started) {
    for (let dot of krishnaDots) {
      dot.update();
      dot.show(scaleFactor);
    }

    fill(255);
    textSize(28 * scaleFactor);
    let yOffset = height < 600 ? 30 : 40;
    text("कृष्णं वन्दे जगद्गुरुम्", width / 2, height - yOffset * scaleFactor);
  }

  if (!started) {
    fill(255);
    textSize(17 * scaleFactor);
    text("Tap or click anywhere to begin", width / 2, height / 1.3);
  }
}

function drawSudarshanChakra() {
  if (chakraAlpha > 0) {
    push();
    translate(width / 2, height / 2 - 20);
    rotate(chakraAngle);
    imageMode(CENTER);
    tint(255, chakraAlpha);
    const chakraSize = min(width, height) * 0.55;
    image(chakraImg, 0, 0, chakraSize, chakraSize);
    pop();

    chakraAngle += 0.01;

    if (started) {
      chakraAlpha -= 2.5;
    }
  }
}

function mousePressed() {
  if (!started) {
    audioElem.volume = 0.9;
    audioElem.loop = true;
    audioElem.play().then(() => {
      console.log("🎵 Playing");
    }).catch(err => {
      console.warn("⚠️ Playback blocked:", err);
    });

    extractDotsFromImage(img);
    started = true;
  }
}

function touchStarted() {
  mousePressed();
}
