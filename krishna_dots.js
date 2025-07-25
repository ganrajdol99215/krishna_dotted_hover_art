let krishnaDots = [];

class Dot {
  constructor(x, y, c) {
    this.pos = createVector(random(width), random(height));
    this.target = createVector(x, y);
    this.color = c;
    this.r = 2;
  }

  update() {
    let mouse = createVector(mouseX, mouseY);
    let dir = p5.Vector.sub(this.pos, mouse);
    let d = dir.mag();
    if (d < 50) {
      dir.setMag(10);
      this.pos.add(dir);
    } else {
      let toTarget = p5.Vector.sub(this.target, this.pos);
      this.pos.add(toTarget.mult(0.1));
    }
  }

  show() {
    noStroke();
    fill(this.color);
    circle(this.pos.x, this.pos.y, this.r * 2);
  }
}

function extractDotsFromImage(img, stepSize = 6) {
  img.loadPixels();
  for (let y = 0; y < img.height; y += stepSize) {
    for (let x = 0; x < img.width; x += stepSize) {
      let index = (x + y * img.width) * 4;
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      let a = img.pixels[index + 3];
      if (a > 100) {
        let col = color(r, g, b);
        krishnaDots.push(new Dot(x, y, col));
      }
    }
  }
}
