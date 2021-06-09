class Iron {
    constructor(x, y) {
      var options = {
        'density':30,
        'friction': 3,
        'restitution':0.8,
      }
      this.body = Bodies.rectangle(x, y, 60, 30, options);
    this.width = 60;
    this.height = 30;
    World.add(world, this.body);
		

    }
	display()
	{
			var ironpos=this.body.position;	
            var angle = this.body.angle;	
			push()
			translate(ironpos.x, ironpos.y);
            rotate(angle)
            
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("grey");
			rect(0, 0, this.width, this.height);

			pop()
	}

}