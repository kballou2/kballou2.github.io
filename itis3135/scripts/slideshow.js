$(document).ready(function() {
    let currentSlide = 1;
    const totalSlides = $('.slideshow-images img').length;

    function showSlide(slideIndex) {
        $('.slideshow-images img').hide();
        
        $('#slide-' + slideIndex).fadeIn();

        const captionText = $('#slide-' + slideIndex).attr('alt');
        $('#caption').text(captionText);
    }

    // Initialize the first slide
    showSlide(currentSlide);

    $('#next').click(function() {
        currentSlide = (currentSlide % totalSlides) + 1;
        showSlide(currentSlide);
    });

    $('#prev').click(function() {
        currentSlide = (currentSlide - 2 + totalSlides) % totalSlides + 1;
        showSlide(currentSlide);
    });

    $('.image-list a').click(function(event) {
        event.preventDefault();
        const slideIndex = $(this).data('slide');
        showSlide(slideIndex);
    });
});
