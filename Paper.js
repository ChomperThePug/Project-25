class Paper {
    constructor(x, y) {
      var options = {
        'density': 1.2,
        'friction': 1.0,
        'restitution': 0.5
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      noStroke();
      fill(255,255,255,0)
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
			imageMode(CENTER);
			image(this.image, 0,this.height - 50,this.width, this.height)
      pop();
    };
  };
  