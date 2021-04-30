class Rubber{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.rubber = Constraint.create(options);
        World.add(world, this.rubber);
    }

    fly(){
        this.rubber.bodyA = null;
    }

    attach(body)
{
  this.rubber.bodyA=body
}

    display(){
        if(this.rubber.bodyA){
            var pointA = this.rubber.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}
//rubber.attach(stoneObj.body);