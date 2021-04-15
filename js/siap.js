import $ from 'jquery';
import slick from 'slick-carousel';


function clientSection(){
    $('document').ready(function(){
      $('.client__wrapper').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        variableWidth:true,
        responsive: [{
          breakpoint: 768,
          settings: {
              arrows: false,
              slidesToShow: 2
          }
      }]
      })
    })
  }
  
  clientSection()