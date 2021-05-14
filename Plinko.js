class Plinko{
    constructor(x,y,radius){
        var options={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius
        World.add(world,this.body)

    }
    display(){
        var position=this.body.position
        ellipseMode(CENTER)
        fill("white")
        ellipse(position.x,position.y,this.radius,this.radius)
    }
}