function setup() {
  createCanvas(windowWidth, windowHeight);
  p_ancor1 = createVector(100, 300);
  p_control1 = createVector(200, 100)
  p_control2 = createVector(500, 400);
  p_ancor2= createVector(700, 300);
}

function draw() {
  background(0);

  //make p_control1 dinamic
  p_control1.x= mouseX
  p_control1.y= mouseY

  //draw all points
  stroke(255);
  strokeWeight(24);
  point(p_ancor1);
  point(p_control1);
  point(p_control2);
  point(p_ancor2);  

  //draw bezier curve
  strokeWeight(4);
  noFill();
  bezier(p_ancor1.x, p_ancor1.y, p_control1.x, p_control1.y, p_control2.x, p_control2.y, p_ancor2.x, p_ancor2.y);

  //draw controls lines
  strokeWeight(2);
  line(p_ancor1.x, p_ancor1.y, p_control1.x, p_control1.y);
  line(p_ancor2.x, p_ancor2.y, p_control2.x, p_control2.y);
}
