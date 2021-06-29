class Trash {
    constructor(x,y,width,height)
    {
        var options={
            restituion:0.3,
            friction:0,
            density:1.2,

        }

      this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        this.image=loadImage("paper.png")
       World.add(world,this.body);

    }
    display()
    {
        var pos= this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        strokeWeight(4);
        fill("black");
       
        imageMode(CENTER)
        image(this.image,500,640,50,50);
        pop()
    }
}