"use strict;"

document.addEventListener("scroll", function() {
    var parallax = document.querySelector("body");
    var scrollPosition = window.scrollY;
    parallax.style.backgroundPositionY = (scrollPosition * 0.5) + "px";
});
