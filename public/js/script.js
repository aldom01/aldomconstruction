const targetDiv = document.getElementById("mobile-menu");
const btn = document.getElementById("toggler");
const hamburger = document.getElementById("hamburger")
const close = document.getElementById("close")

btn.onclick = function () {
    if (targetDiv.style.display === "none") {
        targetDiv.style.display = "grid";
    } else {
        targetDiv.style.display = "none";
    }

    /*
    if (hamburger.style.display = "none") {
        close.style.display = "block";
    } else {
        close.style.display = "none";
    }
    */

};

let delay = 10;
function timer() {
    setTimeout( function(){
        toggleText();    
    }, delay * 1000 );
}

timer();

function toggleText() {
    document.getElementById("eld").style.display = "none";
}