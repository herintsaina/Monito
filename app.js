var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("custom-slider");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";
            dots[slideIndex-1].className += " active";
        }

/********* MENU SCROLL ************ */

window.addEventListener('scroll', menuScroll);

function menuScroll() {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        document.getElementById('menu-header').classList.add('menu-scroll');
    } else {
        document.getElementById('menu-header').classList.remove('menu-scroll');
    }
}

function checkedMenu() {
    location.reload();

}