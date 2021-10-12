$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        easing: 'ease',
        infinite: false,
    });
});