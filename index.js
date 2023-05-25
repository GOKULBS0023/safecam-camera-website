// Owl Carousel Initiate
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
})
$(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('#back-to-top').fadeIn('slow');
        } else {
            $('#back-to-top').fadeOut('slow');
        }
    });
