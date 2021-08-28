class Drop{

    constructor(x,y){

        var options = {

            isStatic:false

        }

        this.x = x 
        this.y = y
        this.radius = 5
        this.body = Bodies.circle(x,y,50,options);
        World.add(world,this.body)

    }

    updateY(){

        if(this.body.position.y>height){

            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});

        }

    }

    display(){

        var pos = this.body.position;
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius,this.radius);

    }

}
