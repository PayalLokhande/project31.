class Particles{
    constructor(x,y,radius){
        var options={
            'restitution':0.4,
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.color=color(random(0,255),random(0,255),random(0,255));
        this.radius=radius
        World.add(world,this.body)

    }
    display(){
        var position=this.body.position
        ellipseMode(CENTER)
        fill(this.color)
        ellipse(position.x,position.y,this.radius,this.radius)
    }
}