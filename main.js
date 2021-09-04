var video;

function setup() {
    canvas = createCanvas(500, 400);
    canvas.parent("center");

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    background("#43C09A");
    translate(width, 0);
    scale(-1, 1);
    image(video, 10, 10, 480, 380);
}