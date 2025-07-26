
let krishnaDots = [];

class Dot {
  constructor(x, y, c) {
    this.origin = createVector(x, y);
    this.pos = createVector(x, y);
    this.color = c;
    this.velocity = p5.Vector.random2D().mult(random(3, 7));
    this.exploded = false;
  }

  update() {
    if (!this.exploded && started) {
      this.pos.add(this.velocity);
      this.velocity.mult(0.95);
      if (this.velocity.mag() < 0.2) {
        this.exploded = true;
      }
    } else {
      let towardOrigin = p5.Vector.sub(this.origin, this.pos);
      this.pos.add(towardOrigin.mult(0.08));
    }
  }

  show(scale) {
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, 2 * scale);
  }
}

function extractDotsFromImage(img) {
  img.loadPixels();
  let offsetX = (width - img.width) / 2;
  let offsetY = (height - img.height) / 2;
  for (let y = 0; y < img.height; y += 4) {
    for (let x = 0; x < img.width; x += 4) {
      let index = (x + y * img.width) * 4;
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      let a = img.pixels[index + 3];
      if (a > 100) {
        let c = color(r, g, b);
        krishnaDots.push(new Dot(x + offsetX, y + offsetY, c));
      }
    }
  }
}
