class Box{
constructor(x,y,width,height){
var options={
restitution:1
}
this.body=Bodies.rectangle(x,y,width,height,options);
World.add(world,this.body)
}
display(){
var pos=this.body.position;
var angle=this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
fill("blue");
rect(0,0,this.widhth,this.height);
pop();
}





}











