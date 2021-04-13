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
    let data = response[0].productSection

    // Init Container
    let product = document.querySelector('.product')
    console.log(product)

    // Init variables
    let textBg = document.querySelector('.product--text-bg')
    let logo = document.querySelector('.product--logo')
    let title = document.querySelector('.product--title')
    let desc = document.querySelector('.product--desc')
    let btnLearnMore = document.querySelector('.btn--learn-more')
    let phoneImg = document.querySelector('.product .phone-img')

    let index = 0

    function setVal(index){
      textBg.innerHTML = data[index].leftPanel.textBg
      logo.src = data[index].leftPanel.logoURL
      title.innerHTML = data[index].leftPanel.title
      desc.innerHTML = data[index].leftPanel.paragraph
      btnLearnMore.href = data[index].leftPanel.btnLearMoreURL
      phoneImg.src = data[index].rightPanel.imgURL
    }

    setVal(index)

    function arrowClick(){
      let productChildren = product.children
      // Transition to left
      productChildren[0].style.opacity = '0'
      productChildren[0].style.transform = 'translateX(-70px)'
      productChildren[0].style.transition = 'transform 1s, opacity 1s'

      // Transition to Right
      productChildren[1].style.opacity = '0'
      productChildren[1].style.transform = 'translateX(70px)'
      productChildren[1].style.transition = 'transform 1s, opacity 1s'

      setTimeout(() => {        
        if(this.getAttribute('data-value') == '1'){
          index++
          if(index > data.length-1) index = 0
        }else {
            index--
            if(index < 0) index = data.length-1
          }

        setVal(index)

        // Transition to left
        productChildren[0].style.opacity = '1'
        productChildren[0].style.transform = 'translateX(0)'
        productChildren[0].style.transition = 'transform 1s, opacity 1s'

        // Transition to Right
        productChildren[1].style.opacity = '1'
        productChildren[1].style.transform = 'translateX(0)'
        productChildren[1].style.transition = 'transform 1s, opacity 1s'
      }, 1000);
    }

    // init click function
    let arrows = document.querySelectorAll('.slidebar--arrow .arrow')
    arrows.forEach(elmnt => {
      elmnt.addEventListener('click',arrowClick)
    })
  })

function clientSection(){
  $(document).ready(function(){
    $('.client__wrapper').slick({
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


