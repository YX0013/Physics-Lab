class Iron{
	constructor(x,y)
	{
	var options = {
		restitution: 0.8,
		friction: 3,
		density: 30
	}
		this.x=x;
		this.y=y;
		this.width = 50;
        this.height = 50;
		this.body=Bodies.rectangle(this.x, this.y, 50, 50, options);
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push();
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER);
			strokeWeight(2);
			stroke("black");
			fill("black");
            rect(0,0, this.width. this.height);
			pop();
	}

}