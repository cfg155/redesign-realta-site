import $ from 'jquery';
import slick from 'slick-carousel'
import "@babel/polyfill";

async function productSection(URL){
  let fetchResponse = await fetch(URL)
  return await fetchResponse.json()
}

// Product Section
productSection('./json/homepage.json')
  .then(response => {

  })

function clientSection(){
  $(document).ready(function(){
    $('.client').slick({
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 5000,
      cssEase:'linear',
      infinite: true,
      focusOnSelect: false,
      prevArrow: false,
      nextArrow: false,
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

function moduleSection(){
  $(document).ready(function(){
    $('.module__wrapper').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 3,
      dots: true,
      centerMode: true,
      nextArrow: false,
      prevArrow: false,
      variableWidth: true,
      variableHeight: true,
      customPaging: function(slider,i){
        let dotsName = ['test1','test2','test3','test4','test5']
        return `<span class="dot">${dotsName[i]}</span>`
      }
    })

  })
}
moduleSection()


