class PointDraggable {
    constructor(x, y, r=12) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = 255;
    this.dragging = false;

    }

    appearance() {        
        strokeWeight(this.r * 2);

        if (this.dragging) {
            stroke(255);
        } else if (this.isMouseHover()) {
            stroke(200);
        } else {
            stroke(150);
        }
    }
    
    position() {
        if (this.dragging) 
        {
            this.x = mouseX;
            this.y = mouseY;
        }
        point(this.x , this.y);
    }

    display() {
        this.appearance()
        this.position()
    }

    clicked() {
        if (this.isMouseHover()) {
            this.dragging = true;
        }        
    }

    isMouseHover() {
        var d =  dist(mouseX, mouseY, this.x , this.y);
        return (d < this.r);
    }

    released() {
        this.dragging = false;
    }


  }