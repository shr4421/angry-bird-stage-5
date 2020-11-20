class SlingShot{
    
    constructor(bodyA, pointB){//constructor takes one body and one point 
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

     fly(){//remove the bird from sling so that it can fly null mean (to remove it)

        this.sling.bodyA=null;

     }

    display(){
        if(this.sling.bodyA){//if bird is still on the sling 

            var pointA = this.sling.bodyA.position;//take the pposition of bird as pointA
            var pointB = this.pointB;// take x and y no. as point b
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);// draw a line between bird and a point

        }

        
    }
    
}