var PointDraggables = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  p_ancor1 = new PointDraggable(100, 300);
  p_control1 = new PointDraggable(200, 100);
  p_control2 = new PointDraggable(500, 500);
  p_ancor2= new PointDraggable(700, 300);

  PointDraggables.push(p_ancor1);
  PointDraggables.push(p_control1);
  PointDraggables.push(p_control2);
  PointDraggables.push(p_ancor2);
}

function mousePressed() {
  for (var i = 0 ; i < PointDraggables.length ; i++ ) {
    PointDraggables[i].clicked();   
  }
}

function mouseReleased () {
  for (var i = 0 ; i < PointDraggables.length ; i++ ) {
    PointDraggables[i].released();   
  }
}

function draw() {
  background(0);

  for (var i = 0 ; i < PointDraggables.length ; i++ ) {
    PointDraggables[i].display();    
  }

  //draw bezier curve as a sum of lines
  let parts = 30;
  let delta = 1/parts;
  stroke(255);
  noFill();
  beginShape();
  for(let t=0; t<=1.001; t+=delta) {
    vectf = cubic(t, p_ancor1, p_control1, p_control2, p_ancor2);

    //print curve
    strokeWeight(4)
    vertex(vectf.x, vectf.y);
  }
  endShape();
}

function lerp2D(t, vector1 , vector2) {
  let x = lerp(vector1.x, vector2.x, t);
  let y = lerp(vector1.y, vector2.y, t);
  return createVector(x, y);
}

function quadratic(t, p0, p1 , p2) {
  let vect1 = lerp2D(t, p0 , p1);
  let vect2 = lerp2D(t, p1 , p2);
  let vectf = lerp2D(t, vect1 , vect2);

  //print mesh
  strokeWeight(1)
  line(vect1.x, vect1.y , vect2.x, vect2.y);

  return vectf
}

function cubic(t, p0, p1, p2, p3) {
  let vect1 = quadratic(t, p0 , p1, p2);
  let vect2 = quadratic(t, p1 , p2, p3);
  let vectf = lerp2D(t, vect1 , vect2);
  return vectf
}