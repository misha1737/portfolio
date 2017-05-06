var slideIndex = 1;
showSlides(slideIndex);

function nextSlides(){
	plusSlides(1);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
	clearTimeout(timerId);
	timerId=setTimeout( nextSlides, 5000);
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("sliderButton");

    if (n >slides.length) {
        slideIndex = 1;
    }
    if (n < 1){
        slideIndex=slides.length;
    }
    for (i=0; i <slides.length ; i++){
        slides[i].style.display= "none";
    }
    for (i = 0; i < dots.length; i++){
       dots[i].className= dots[i].className.replace("active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className+= " active";
}

var timerId=setTimeout( nextSlides, 5000);