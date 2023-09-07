const cursor = document.getElementById('cursor');
var timeout;
document.addEventListener('mousemove' , function(e){
   let x = e.clientX;
    let y = e.clientY;
cursor.style.left = x + "px";
cursor.style.top = y + "px";
cursor.style.display = "block";

function mouseStopped(){
    cursor.style.display = "none"
}
timeout = setTimeout(mouseStopped, 400);
})