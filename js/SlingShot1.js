class SlingShot1 {
    constructor(x, y, body) {
      const options = {
        pointA: {
          x: x,
          y: y
        },
        bodyB: body,
        stiffness: 0.02,
        length: 10
      };
      this.sling = Constraint.create(options);
      World.add(world, this.sling);
    }
  
    fly() {
      this.sling.bodyB = null;
    }
  
    show() {
      if (this.sling.bodyB) {
        stroke(rgb(48,22,8));
        strokeWeight(4);
        const posA = this.sling.pointA;
        const posB = this.sling.bodyB.position;
        line(posA.x, posA.y, posB.x, posB.y);
      }
    }
  
    attach(body) {
      this.sling.bodyB = body;
    }
  }