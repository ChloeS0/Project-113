function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(110, 250);
    video=createCapture(VIDEO);
    video.hide();

        
}

function draw(){
    image(video, 200, 150, 220, 200);

    fill(0,0,100);
    stroke(0,0,100);
    circle(50,50,80);

    fill(100,0,0);
    stroke(100,0,0);
    rect(90,40,460,20);

    rect(90,420,460,20);
    
    fill(0,0,100);
    stroke(0,0,100);
    circle(50,430,80);

    fill(100,0,0);
    stroke(100,0,0);
    rect(40,88,20,302);

    fill(0,0,100);
    stroke(0,0,100);
    circle(590,430,80);

    fill(0,0,100);
    stroke(0,0,100);
    circle(590,50,80);

    fill(100,0,0);
    stroke(100,0,0);
    rect(580,88,20,302);
}

function take_snapshot()
{
    save('Image');
}

