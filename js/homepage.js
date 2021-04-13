import $, { data } from 'jquery';
import slick from 'slick-carousel'
import "@babel/polyfill";

async function fetchAPI(API_URL){
  let fetchResponse = await fetch(API_URL)
  return await fetchResponse.json()
}

let API_URL = './json/homepage.json'
// Product Section
fetchAPI(API_URL)
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

// Module Section
fetchAPI(API_URL)
  .then(response => {
    let data = response[2].moduleSection
    console.log(data[0].listItem)

    let moduleItem = ''
    data.forEach((item,index) => {
      let listItems = data[index].listItem

      let li = ''
      listItems.forEach(item => {
        li += `<li class="list-inline text-light">${item}l</li>`
      })

      moduleItem += 
      `
      <div class="module__wrapper--item mx-4">
        <div class="header p-3" style="background-color: ${item.headerBgColor};">
          <h4 class="text-light">${item.title}</h4>
        </div>
        <div class="body p-3" style="background-color: ${item.bgColor}">
          <ul class="list-group mb-4">
            ${li}
          </ul>
        </div>
        <div class="footer p-3" style="background-color: ${item.bgColor}">
        <a href="${item.learnMoreURL}" class="text-light text-decoration-none" style="background-color: ${item.bgColor}">Learn More</a>
      </div>

      </div>
      `
    })
    document.querySelector('.module__wrapper').innerHTML += moduleItem

    return data
  })
  .then(response => {
    console.log(response[0].title)
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
      waitForAnimate: false,
      cssEase:'linear',
      customPaging: function(slider,i){
        // let dotsName = ['test1','test2','test3','test4','test5']
        return `<span class="dot">${response[i].title}</span>`
      }
    })
  })

  // Feature Section
  fetchAPI(API_URL)
    .then(response => {
      let data = response[3].featureSection

      let card = ''
      data.forEach(item => {
        card += 
        `
        <div class="feature--card mb-3">
          <div class="header d-flex align-items-center">
            <img src="${item.imgURL}" class="me-2">
            <h4>${item.title}</h4>
          </div>
          <p class="body text-justify">${item.desc}</p>
        </div>
        `
      })
      document.querySelector('.feature__wrapper--cards').innerHTML = card

      // init variables
      let cardContainer = document.querySelectorAll('.feature--card')
      let cardDesc = document.querySelectorAll('.feature--card .body')

      console.log(cardDesc)

      cardDesc.forEach((item,index) => {
        if(index === 0){
          item.style.minHeight = item.scrollHeight + 'px'
          item.style.padding = '20px'
        }else{
          item.style.maxHeight = '0'
          item.style.padding = '0'
          item.style.overflow = 'hidden'
        }

      })
    })




