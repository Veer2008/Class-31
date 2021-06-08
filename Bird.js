class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10&&this.body.position.x>250){
      var position=[this.body.position.x,this.body.position.y];
      this.trajectory.push(position);
    }
    

    for(var i =0;i<this.trajectory.length;i++){
      image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1])
    }
  }
}





/*
this.trajectory = [[X1,Y1],[X2,Y2],[X3,Y3],....]

X1 =[0][0]   y1 = [0][1]
X2 =[1][0]   y2 = [1][1]
X3 =[2][0]   y3 = [2][1]

x = [i][0]    y = [i][1]
*/