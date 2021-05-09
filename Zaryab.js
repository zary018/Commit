class zaryab {
    constructor(x,y,width,height){
        //JSON-> Javascript object notation format
        var options = {
            isStatic: true,
            restitution: 4,
        }
        this.body = bodies.rectangle(x,y,width,height,options);
        this.w = width
        this.h = height
        
        World.add(zworld,this.body)
        //console.log(this.body.position.x)
        
    }
    display(){
        var pos = this.body.position
        
        push();
        translate(pos.x,pos.y);
        rotate(this.body.speed);
        fill("blue");
        rectMode(CENTER);
        rect(0,0, this.w, this.h);
        pop()
    }
}