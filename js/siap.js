import $ from 'jquery';
import slick from 'slick-carousel';


function clientSection(){
    $('document').ready(function(){
      $('.client__wrapper').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3
      })
    })
  }
  
  clientSection()