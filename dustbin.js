class Dustbin  {
    constructor(x, y, width, height) {
      var options = {
        isStatic : true
    }
    this.dustbin = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.dustbin);
  }
  display(){
    var pos =this.dustbin.position;
    var angle = this.dustbin.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("white");
    rect(0, 0, this.width, this.height);
    pop();
  
    }
  }