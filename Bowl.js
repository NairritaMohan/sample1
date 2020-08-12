class Bowl{
    constructor(x,y,w,h){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h
      
        World.add(world,this.body)
    }
    display(){
        angleMode(DEGREES)
        var pos = this.body.position
       var angle = this.body.angle
       push()
       translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.w,this.h)
        pop()
       

      

    }

    
}
