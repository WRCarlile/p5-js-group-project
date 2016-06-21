var sketch = function (p) {

  var x = 100;
  var y = 100;
  p.setup = function () {
    p.createCanvas(700, 410);
  };

  p.draw = function () {
    p.background(100, 49, 190);
    p.fill(0, 80, 220);
    p.rect(x, y, 100, 100);
  };
};

var dariusSketch = new p5(sketch);
