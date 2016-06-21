var sketch = function (p) {

  var x = 100;
  var y = 100;
  p.setup = function () {
    p.createCanvas(700, 410);
  };

  p.draw = function () {
    p.background(23, 100, 98);
    p.fill(200, 100, 0);
    p.rect(x, y, 100, 100);
  };
};

var catherineSketch = new p5(sketch);
