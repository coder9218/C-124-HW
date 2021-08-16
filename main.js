function setup()
{
    video = createCapture (VIDEO);
    video.size(500,500);

    canvas = createCanvas (0,0,500,500);
    canvas.position(560,150);

    poseNet = ml5.posenet (video, modelLoaded);
    poseNet.on ('pose', gotPoses);    
}

video = "0";

function draw()
{
    Image(video, 0, 0, 500, 500);
}

function preLoad()
{}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
    }
}
