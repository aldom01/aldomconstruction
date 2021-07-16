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
    setTimeout(function () {
        toggleText();
    }, delay * 1000);
}

timer();

function toggleText() {
    document.getElementById("eld").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}