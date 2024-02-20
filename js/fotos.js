document.addEventListener("DOMContentLoaded", function() {

    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-image");
    var modalTitle = document.getElementById("modal-title");
    var modalDescription = document.getElementById("modal-description");


    var galleryImages = document.querySelectorAll(".gallery-item img");


    galleryImages.forEach(function(image) {
        image.addEventListener("click", function() {

            modal.style.display = "block";

            modalImg.src = this.src;

            modalTitle.textContent = this.parentElement.dataset.title;
            modalDescription.textContent = this.parentElement.dataset.description;
        });
    });


    var span = document.getElementsByClassName("close")[0];


    span.onclick = function() {
        modal.style.display = "none";
    };


    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});
