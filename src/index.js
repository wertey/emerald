// JS
import './js/'
import 'jquery';
import 'slick-carousel'

// SCSS
import './assets/scss/core.scss'
require('font-awesome/css/font-awesome.css');
require('font-awesome/css/font-awesome.css');
import $ from "jquery";
require('jquery-mask-plugin/src/jquery.mask');
require('slick-carousel/slick/slick.scss');
require('slick-carousel/slick/slick-theme.scss');
require('slick-carousel/slick/slick-theme.scss');


$('.lp-review-slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesPerRow: 2,
    row: 2,
    dotsClass: 'slick-dots lp-review-slider__dots',
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                infinite: true,
                dots: true,
                arrows: false,
            }
        },
    ]
});

$(document).ready(function() {


    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });

    $('.lp-popup__form-input_tel').mask('+7 (000) 000-00-00');

});







