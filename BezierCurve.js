function bezierPonit( t, list_points) {
    var len = list_points.length;
    if (len==1) {
        return list_points[0];
    }
    else
    {
        var p1= bezierPonit( t, list_points.slice( 1, len) );
    }
    var p2 = bezierPonit( t, list_points.slice( 0, (len-1) ) );
    var nt = 1-t

    var p_result = {
        x : ( nt*p1.x + t*p2.x ) ,
        y : ( nt*p1.y + t*p2.y )
    };
    return p_result;
}



