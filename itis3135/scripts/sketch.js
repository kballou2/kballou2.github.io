function setup() {
    createCanvas(800, 800);
    background(255); 
}

function draw() {
    if (mouseIsPressed) {
        fill(0, 102, 153); 
        noStroke();
        ellipse(mouseX, mouseY, 20, 20); 
    }
}
