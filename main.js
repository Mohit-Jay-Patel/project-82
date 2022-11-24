var mouseEvent="empty";

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var last_x,last_y;
var current_x,current_y;
var colour="blue";
var width_of_line=1;

canvas.addEventListener("mousedown",mouse_down);
function mouse_down(e){
colour=document.getElementById("colour").value;
width_of_line=document.getElementById("width_of_line").value;
mouseEvent="mousedown";

}

canvas.addEventListener("mouseup", mouse_up);
function mouse_up(e){
    mouseEvent="mouseup";

}
canvas.addEventListener("mouseleave", mouse_leave);
function mouse_leave(e){
    mouseEvent="mouseleave";

}

canvas.addEventListener("mousemove", mouse_move);
function mouse_move(e){
 current_x=e.clientX-canvas.offsetLeft;
 current_y=e.clientY-canvas.offsetTop;
 
 if(mouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=width_of_line;
    ctx.arc(current_x,current_y,40,0,2*Math.PI);
    ctx.stroke();
 }
 last_x=current_x;
 last_y=current_y;

}
function clear_area(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}