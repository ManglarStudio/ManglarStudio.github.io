function setup() {
    const footer = document.querySelector('footer');
    const animationCanvas = createCanvas(footer.clientHeight, footer.clientHeight); // Tamaño igual al alto del footer
    animationCanvas.parent('animation-container'); // Ubica el lienzo dentro del contenedor con el ID "animation-container"
    background(74, 0, 128);
    noStroke();
  }
  
  let x = 0;
  let y = 255;
  
  function draw() {
    background(74, 0, 128);
    strokeWeight(3);
    stroke(255, 255, 255);
    noFill();
    circle(width / 2, height / 2, 30);
    stroke(255, 255, 255, y);
    circle(width / 2, height / 2, 30 + x);
    x = x + 1;
    y = y - 1;
  }
  