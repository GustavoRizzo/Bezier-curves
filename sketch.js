var PointDraggables = [];
var show_quadratic = false;
var show_cubic = false;

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

  check_quadratic = createCheckbox('Show Quadract Lines', show_quadratic);
  check_quadratic.changed(change_quadratic);

  check_cubic= createCheckbox('Show Cubic Lines', show_cubic);
  check_cubic.changed(change_cubic);
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

function change_quadratic(){
  show_quadratic = !show_quadratic;
}

function change_cubic(){
  show_cubic = !show_cubic;
}

function draw() {
  background(0);

  for (var i = 0 ; i < PointDraggables.length ; i++ ) {
    PointDraggables[i].display();    
  }

  displayBezier(PointDraggables, 100, show_quadratic, show_cubic);
  console.log(check_quadratic.checked)

}
