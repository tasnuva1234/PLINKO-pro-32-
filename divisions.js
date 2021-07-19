class Divisions {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true
        }      
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.image=loadImage("rod.png")
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push ();
        rectMode(CENTER);
        imageMode(CENTER)
        fill(255, 204, 0);
        rect(pos.x, pos.y, this.w, this.h);
        //image(this.image,0,0,170,400)
        pop ();
    }
};