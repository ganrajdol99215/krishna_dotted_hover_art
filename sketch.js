let img;
let song;
let chakraImg;
let chakraAngle = 0;
let chakraAlpha = 255;
let started = false;
let scaleFactor = 1;
let galaxyStars = [];
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

  drawGalaxyAroundKrishna();      // 🌌 Milky Way
  drawSudarshanChakra();          // 🛡️ Sudarshan Chakra (behind Krishna)

  if (started) {
    for (let dot of krishnaDots) {
      dot.update();
      dot.show(scaleFactor);
    }

    fill(255);
    textSize(22 * scaleFactor);
    let yOffset = height < 600 ? 30 : 60;

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




function mousePressed() {
  if (!started) {
    started = true;
    if (!song.isPlaying()) {
      song.play();
    }
  }
}

// 🌌 Slower elegant galaxy rotating around Krishna
function drawGalaxyAroundKrishna() {
  if (windowWidth < 768) return; // 📱 Skip Milky Way on mobile

  if (galaxyStars.length === 0) {
    const arms = 5;
    const totalStars = 1800;

    for (let i = 0; i < totalStars; i++) {
      const armOffset = TWO_PI / arms * (i % arms);
      const radius = random(160 + 30, width * 0.55);
      const spiralAngle = radius * 0.07;
      const baseAngle = spiralAngle + armOffset + random(-0.4, 0.4);

      galaxyStars.push({
        baseAngle: baseAngle,
        radius: radius,
        angle: baseAngle,
        speed: map(radius, 160 + 30, width * 0.55, 0.008, 0.002),
        size: random(1.0, 2.5),
        alpha: random(150, 255)
      });
    }
  }

  push();
  translate(width / 2, height / 2);
  blendMode(ADD);

  for (let star of galaxyStars) {
    const prevAngle = star.angle;
    star.angle += star.speed;

    const x = cos(star.angle) * star.radius;
    const y = sin(star.angle) * star.radius;
    const px = cos(prevAngle - 0.05) * star.radius;
    const py = sin(prevAngle - 0.05) * star.radius;

    stroke(255, star.alpha * 0.6);
    strokeWeight(star.size);
    line(px, py, x, y);
  }

  blendMode(BLEND);
  pop();
}


// 🔆 Divine light aura (like spotlight) behind Krishna — always active
function drawDivineSpotlight() {
  push();
  translate(width / 2, height / 2);
  noStroke();
  for (let i = 50; i > 0; i--) {
    fill(255, 240, 150, 1.8); // Soft golden glow
    ellipse(0, 0, i * 10);    // Larger spotlight
  }
  pop();
}
