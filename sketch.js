let img;
let song;
let chakraImg;
let chakraAngle = 0;
let chakraAlpha = 255;
let started = false;
let scaleFactor = 1;
let safeZoneRadius = 160;

function preload() {
  img = loadImage("krishna.png");
  song = loadSound("krishna_bg_music.mp3");
  chakraImg = loadImage("sudarshana-chakra-fiery-disc-attribute-weapon-lord-krishna-religious-symbol-hinduism-vector-illustration-95286952-removebg-preview.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textFont('Georgia');
  frameRate(60);
  scaleFactor = min(windowWidth / img.width, windowHeight / (img.height + 100));
  extractDotsFromImage(img);
}

function draw() {
  background(0);

       // 🌌 Milky Way
  drawSudarshanChakra();          // 🛡️ Sudarshan Chakra (behind Krishna)

  if (started) {
    for (let dot of krishnaDots) {
      dot.update();
      dot.show(scaleFactor);
    }

    fill(255);
    textSize(28 * scaleFactor);
    let yOffset = height < 600 ? 30 : 40;

text("कृष्णं वन्दे जगद्गुरुम्", width / 2, height  - yOffset * scaleFactor);
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
    tint(255, chakraAlpha); // Alpha fade
    const chakraSize = min(width, height) * 0.55;
    image(chakraImg, 0, 0, chakraSize, chakraSize);
    pop();

    chakraAngle += 0.01; // Slightly faster rotation

    if (started) {
      chakraAlpha -= 2.5; // Fade out after tap
    }
  }
}




//function mousePressed() {
//  if (!started) {
    //started = true;

    // Resume audio context for mobile/iOS
  //if (getAudioContext().state !== 'running') {
     // getAudioContext().resume();
   // }

   // if (!song.isPlaying()) {
  //song.setVolume(0.9);      // ✅ Ensure volume is audible
      //song.loop();              // ✅ Looping behavior here
    //}}
//}
function touchStarted() {
  if (!started) {
    started = true;

    if (getAudioContext().state !== 'running') {
      getAudioContext().resume();
    }

    if (!song.isPlaying()) {
      song.setVolume(0.9);
      song.loop();
    }
  }

  return false; // Prevent scrolling
}
function mousePressed() {
  touchStarted(); // Reuse touch handler for desktop
}




