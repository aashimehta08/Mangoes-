class Launcher {
    constructor(A,pB){
        var options = {
            bodyA: A,
            pointB: pB,
            stiffness: 0.01,
            length: 20
        }
        this.pointB = pB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    display(){
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        } 
    }
    fly(){
        this.launcher.bodyA = null;
    }
    attach(body){
        this.launcher.bodyA = body;
    }
}