alert("Avoid the red lines");
alert("Tap the screen to jump.");
var hop = 0;
var score = 0;
var timer = 0;
var accel = 0;
//calling the function in window.onload to make sure the HTML is loaded
window.onload = function () {
    var pos = 0;
    //our box element
    var box = document.getElementById("box");
    var t = setInterval(move, 10);

    function move() {
        if (pos < 0) {
            clearInterval(t);
            document.write("<h1>GAME OVER</h1><br> score:" + score + "000");
        }
        if (pos > 240) {
            clearInterval(t);
            document.write("<h1>GAME OVER</h1><br> score:" + score + "000");
        } else {
            if (hop === 1) {
                accel = 0;
                pos -= 5;
                timer += 1;
                if (timer === 15) {
                    hop = 0;
                    timer = 0;
                }
            }
            accel += 0.05;
            pos += accel;
            box.style.top = pos + "px";
        }
    }
};
