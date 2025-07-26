let krishnaDots = [];

class Dot {
  constructor(x, y, c) {
    this.origin = createVector(x, y);
    this.pos = createVector(x, y);
    this.color = c;
  }

 update() {
  let towardOrigin = p5.Vector.sub(this.origin, this.pos);
  this.pos.add(towardOrigin.mult(0.1)); // Snap back to origin

  let isInteracting = false;

  // Detect if mouse is over the canvas on desktop
  if (windowWidth > 768) {
    isInteracting = mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height;
  }

  // Detect touch on mobile
  if (windowWidth <= 768 && touches.length > 0) {
    isInteracting = true;
  }

  // If user interacting, float the dot randomly
  if (isInteracting) {
    this.pos.x += random(-1.5, 1.5);
    this.pos.y += random(-1.5, 1.5);
  }
}





  show(scale) {
    noStroke();
    fill(this.color);
    ellipse(this.pos.x * scale, this.pos.y * scale, 2 * scale);
  }
}

function extractDotsFromImage(img) {
  img.loadPixels();
  for (let y = 0; y < img.height; y += 4) {
    for (let x = 0; x < img.width; x += 4) {
      let index = (x + y * img.width) * 4;
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      let a = img.pixels[index + 3];
      if (a > 100) {
        let c = color(r, g, b);
        krishnaDots.push(new Dot(x, y, c));
      }
    }
  }
}
