var mouseevent = "empty";
var lastpositionofx, lastpositionofy;

canvas = document.getElementById('canvas1');

ctx = canvas.getContext("2d");

color = "black";

widthofline = 1;

canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(e) {
    color = document.getElementById("color").value;

    widthofline = document.getElementById("widthofline").value;

    mouseevent = "mouseDown";
}

canvas.addEventListener("mousemove", myMouseMove);

function myMouseMove(e) {
    currentpositionofx = e.clientX - canvas.offsetLeft;
    currentpositionofy = e.clientY - canvas.offsetTop;

    if (mouseevent == "mouseDown") {
        ctx.beginPath();

        ctx.strokeStyle = color;

        ctx.lineWidth = widthofline;

        console.log("last position of x and y = ");
        console.log("x = " + lastpositionofx + ", and the position of y is = " + lastpositionofy);

        ctx.moveTo(lastpositionofx, lastpositionofy);

        console.log("current position of x and y = ");
        console.log("x = " + currentpositionofx + ", and the position of y is = " + currentpositionofy);

        ctx.lineTo(currentpositionofx, currentpositionofy);

        ctx.stroke();
    }

    lastpositionofx = currentpositionofx;
    lastpositionofy = currentpositionofy;


}

canvas.addEventListener("mouseup", myMouseUp);

function myMouseUp(e) {
    mouseevent = "mouseUp";
}

canvas.addEventListener("mouseleave", myMouseLeave);

function myMouseLeave(e) {
    mouseevent = "mouseLeave";
}

function cleararea() {
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
}