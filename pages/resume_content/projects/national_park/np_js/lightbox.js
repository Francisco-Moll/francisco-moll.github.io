"use strict;"

document.addEventListener("DOMContentLoaded", function() {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox_img");
    var closeBtn = document.getElementsByClassName("close")[0];

    var images = document.querySelectorAll(".img_cluster .column img");
    images.forEach(function(img) {
        img.addEventListener("click", function() {
            lightbox.style.display = "block";
            lightboxImg.src = this.src;
        });
    });

    closeBtn.addEventListener("click", function() {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function(event) {
        if (event.target == lightbox) {
            lightbox.style.display = "none";
        }
    });
});