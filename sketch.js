var c1img, c2img,c4img, gdimg, m1img, m2img, m3img, m4img;
var cat, mouse;

function preload() {
    //load the images here
    gdimg = loadImage("images/garden.png");
    c1img= loadAnimation("images/cat1.png");
    c2img=loadAnimation("images/cat2.png","images/cat3.png");
    c4img= loadAnimation("images/cat4.png");
    m1img=loadAnimation("images/mouse1.png");
    m2img= loadAnimation("images/mouse2.png","images/mouse3.png");
    m3img=loadAnimation("images/mouse4.png");
 
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat= createSprite (850,600);
cat.addAnimation("c1",c1img)
mouse= createSprite(200, 600);
mouse.addAnimation("m1",m1img);
mouse.scale= 0.1;
cat.scale= 0.2;
}

function draw() {

    background(gdimg);
    //Write condition here to evalute if tom and jerry collide
    if (cat.X-mouse.X < 100 && (mouse.x - cat.x < 100)){
        cat.VelocityX=0;
        cat.addAnimation("catstop",c4img);
        cat.changeAnimation("catstop");

        mouse.addAnimation("mouserun", m4img);
        mouse.changeAnimation("mouserun");

    }


    drawSprites();
}


function keyPressed(){
if (keyCode===LEFT_ARROW){
    cat.velocityX=-3;
    cat.addAnimation("catmove",c2img);
    cat.changeAnimation("catmove");
    mouse.addAnimation("mousemove",m2img);
    mouse.changeAnimation("mousemove");
}
  //For moving and changing animation write code here


}
