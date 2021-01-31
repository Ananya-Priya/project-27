class Rope{

    constructor(body1,body2,offsetx){
        var options=
    {
        bodyA: body1,
        bodyB: body2,
        pointB:{
            x:offsetx,y:0
        },
        stiffness: 0.4,
        length: 400
    }
    this.offsetx=offsetx;
    this.chain=Constraint.create(options);
    World.add(world,this.chain); 
    }

    display(){
        var A=this.chain.bodyA.position;
        var B=this.chain.bodyB.position;
        var Ax=A.x;
        var Ay=A.y;
        var Bx=B.x+this.offsetx;
        var By=B.y;
        line(Ax,Ay,Bx,By)
    }
}