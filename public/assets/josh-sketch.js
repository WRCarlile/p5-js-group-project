var sketch = function (p) {

  var x = 100;
  var y = 100;
  p.setup = function () {
    p.createCanvas(700, 410);
  };

  p.draw = function () {
    p.background(50, 49, 250);
    p.fill(230, 0, 220);
    p.rect(x, y, 100, 100);
  };
};

var joshSketch = new p5(sketch);
