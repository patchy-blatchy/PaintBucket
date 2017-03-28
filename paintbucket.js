var PaintBucket = (function() {

  var changeCellColor = function(pic, x, y, c) {
    pic[y][x] = c;
    var changedMatrix =  pic;
    changeAdjacentCellColor(changedMatrix, x, y, c);
    console.log(pic);

  };

  var changeAdjacentCellColor = function(pic, x, y, c) {

    // ---- Change vertical neighbours ----
        if( y-1 >=0 ) {
          pic[y-1][x] = c;
        };

        if( y+1 <= pic.length-1) {
          pic[y+1][x] = c;
        };

    // ---- Change horizontal neighbours ----
        if( x-1 >=0 ){
          pic[y][x-1] = c;
        };

        if( x+1 <= pic[y].length-1) {
          pic[y][x+1] = c;
        };

    // ---- Change corner neighbours ----
        if( y-1 >=0 && x-1 >=0 ) {
          pic[y-1][x-1] = c;
        };

        if( y-1 >=0 && x+1 <= pic[y].length-1) {
          pic[y-1][x+1] = c;
        }

        if( y+1 <= pic.length-1 && x-1 >=0) {
          pic[y+1][x-1] = c;
        };

        if( y+1 <= pic.length-1 && x+1 <= pic[y].length-1) {
          pic[y+1][x+1] = c;
        };

        return pic;
  };

  return {
    changeColor: changeCellColor
  };

}) ();

var Image = [
  [2, 7, 4, 5, 6],
  [1, 4, 7, 3, 6],
  [3, 2, 4, 3, 6],
  [1, 5, 1, 3, 5],
  [7, 3, 4, 4, 6]
];

PaintBucket.changeColor(Image, 3, 2, 0);
