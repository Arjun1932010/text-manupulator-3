noseX="";
noseY="";
leftWristX="";
rightWristX="";
difference="";
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(600,100);
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotPoses);

}
function modelloaded(){
    console.log("PoseNet is initialized");
}
function gotPoses(result){
    if(result.length>0){
        console.log(result);
        leftWristX=result[0].pose.leftWrist.x;
        rightWristX=result[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}
function draw(){
    background("red");
    textSize(difference);
    text("Arjun",10,30);
    fill("yellow");
    document.getElementById("text_span").innerHTML="Size of text is "+difference;
}