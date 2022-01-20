
   
var status = ""
var object

function setup() {
    canvas = createCanvas(420, 420)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()
    video.size(420, 420)
}

function draw() {
    image(video, 0, 0, 420, 420)
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "Status - Detecting Objects"
    
    object = document.getElementById("object").value
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true
}