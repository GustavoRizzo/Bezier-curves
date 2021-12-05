function bezierPonit( t, list_points, show_quadratic=false, show_cubic=false) {
    var len = list_points.length;
    if (len==1) {
        return list_points[0];
    }
    else
    {
        var p1= bezierPonit( t, list_points.slice( 1, len), show_quadratic, show_cubic );
    }
    var p2 = bezierPonit( t, list_points.slice( 0, (len-1)), show_quadratic, show_cubic );
    var nt = 1-t

    if (show_quadratic==true) {
        if (len==3) {
            strokeWeight(1);
            line(p1.x, p1.y , p2.x, p2.y);
        }
    }

    if (show_cubic==true) {
        if (len==4) {
            strokeWeight(1);
            line(p1.x, p1.y , p2.x, p2.y);
        }
    }

    var p_result = {
        x : ( nt*p1.x + t*p2.x ) ,
        y : ( nt*p1.y + t*p2.y )
    };
    return p_result;
}


function displayBezier (list_points, precision, show_quadratic=false, show_cubic=false) {
    let delta = 1/precision;

    noFill();
    beginShape();
    for(let t=0; t<=1.001; t+=delta) {
        vectf = bezierPonit(t, list_points, show_quadratic, show_cubic);
      
        //print curve
        stroke(255);
        strokeWeight(4);
        vertex(vectf.x, vectf.y);
      }
    endShape();
}





