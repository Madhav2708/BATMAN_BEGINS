class Umbrella{

    constructor(x,y){

        var options = {

            isStatic:true

        }

        this.x = x 
        this.y = y
        this.radius = 50
        this.body = Bodies.circle(x,y,50,options);
        this.image = loadImage("images/Walking Frame/walking_1.png");
        World.add(world,this.body)
        

    }

    display(){

        var pos = this.body.position;
        fill("blue");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);

    }

}
