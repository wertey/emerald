// JS
import './js/'
import 'jquery';
import 'slick-carousel'

// SCSS
import './assets/scss/core.scss'
require('font-awesome/css/font-awesome.css');
require('font-awesome/css/font-awesome.css');
import $ from "jquery";
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
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                centerMode: true,
                centerPadding: '20px',
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
