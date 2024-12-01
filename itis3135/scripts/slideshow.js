$(document).ready(function() {
    var currentSlide = 1;
    var totalSlides = $(".slide").length;

    function showSlide(slideIndex) {
        $(".slide").hide();  
        $("#slide-" + slideIndex).show();  
        currentSlide = slideIndex;  
    }

    function moveSlide(direction) {
        currentSlide += direction;  
        if (currentSlide > totalSlides) currentSlide = 1;  
        if (currentSlide < 1) currentSlide = totalSlides;  
        showSlide(currentSlide);  
    }

    showSlide(currentSlide);

    $(".prev").click(function() {
        moveSlide(-1);  
    });

    $(".next").click(function() {
        moveSlide(1);  
    });

    $(".nav-link").click(function() {
        var slideIndex = $(this).data("slide");  
        showSlide(slideIndex);  
    });
});