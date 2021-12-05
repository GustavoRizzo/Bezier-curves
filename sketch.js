var PointDraggables = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  p1 = new PointDraggable(100, 500);
  p2 = new PointDraggable(100, 150);
  p3 = new PointDraggable(400, 50);
  p4 = new PointDraggable(400, 600);
  p5 = new PointDraggable(700, 500);
  p6 = new PointDraggable(700, 150);

  PointDraggables.push(p1);
  PointDraggables.push(p2);
  PointDraggables.push(p3);
  PointDraggables.push(p4);
  PointDraggables.push(p5);
  PointDraggables.push(p6);
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

  displayBezier(PointDraggables, 30);

}
