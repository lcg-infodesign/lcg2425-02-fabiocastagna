function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(255);
  let cols = 10; // Numero di colonne
  let rows = 5;  // Numero di righe
  let padding = 100; // Padding intorno ai glifi
  let glyphSize = (width - padding * (cols + 1)) / cols; // Calcolo della dimensione di ogni glifo

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = padding + i * (glyphSize + padding) + glyphSize / 2;
      let y = padding + j * (glyphSize + padding) + glyphSize / 2;
      drawGlyph(x, y, glyphSize);
    }
  }
}

function drawGlyph(x, y, size) {
  push();
  translate(x, y);
  strokeWeight(1.5);
  stroke(0);
  noFill();
  beginShape();
  for (let i = 0; i < TWO_PI; i += random(0.2, 0.5)) {
    let r = random(size * 0.5, size);
    let x = r * cos(i);
    let y = r * sin(i);
    vertex(x, y);
  }
  endShape(CLOSE);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}