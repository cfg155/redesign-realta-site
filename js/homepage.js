import Swiper, {Navigation,Pagination,Autoplay} from 'swiper';
import homepageData from './homepageData';

function productSection(){
  let title = document.querySelector('.product-section__left .title')
  let desc = document.querySelector('.product-section__left .desc')
  let count = 0
  
  function setData(count){
    let productData = {
      title : homepageData[0].productSsection[count].title,
      desc : homepageData[0].productSsection[count].desc,
      textBg : homepageData[0].productSsection[count].textBg,
      youtube : homepageData[0].productSsection[count].youtube,
      link : homepageData[0].productSsection[count].link,
    }

    title.innerHTML = productData.title
    desc.innerHTML = productData.desc
    document.querySelector('.product-section__left .text-bg').innerHTML = productData.textBg
    document.querySelector('.product-section__left .btn-learn-more').href = productData.link

  }

  setData(count)

  function productTransition(){
    count = this.classList.contains('arrow-right') ? ++count : --count
    if(count > homepageData[0].productSsection.length-1){
      count = 0
    }else if(count < 0){
      count = homepageData[0].productSsection.length-1
    }
    title.style.opacity = '0'
    title.style.transform = 'translateX(100px)'
    desc.style.opacity = '0'
    
    setTimeout(() => {
      setData(count)
      title.style.opacity = '1'
      title.style.transform = 'translateX(0)'
      desc.style.opacity = '1'
    }, 1000);
  }

  document.querySelectorAll('.arrow-left, .arrow-right').forEach(item => {
    item.addEventListener('click',productTransition)
  })
}

productSection()

function clientSection(){
  Swiper.use([Navigation,Pagination,Autoplay])
  const swiper = new Swiper('.section-client__wrapper .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 5,
    breakpoints : {
      576 : {
        slidesPerView : 3
      },

      768 : {
        slidesPerView : 4
      },
      
      992 : {
        slidesPerView : 5
      }
    },
    allowTouchMove:false,
    autoplay: {
      delay:1000
    },

  })

}

clientSection()

function moduleSection(){
  Swiper.use([Navigation,Pagination])

  let menu = ['Property','People','Manufacturing','IT Service & Asset','Hospitality','Distribution']
  const swiper = new Swiper('.section-module .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    slidesPerView : 5,
    breakpoints : {
      320: {
        slidesPerView: 2
      }
      
    },
  
    // If we need pagination
    pagination: {
      el: '.section-module .swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },
  
    // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  
    // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  });
}

moduleSection()

function featureSection(){
  let card = document.querySelectorAll('.section-feature__wrapper__left .card')

  function dropdown(){
    let isCollapsed = this.getAttribute('data-collapsed') === 'true'

    if(isCollapsed){
      this.setAttribute('data-collapsed','false')
      console.log('not collpsed')
      let getTextHeight = this.lastElementChild.firstElementChild.scrollHeight
      this.lastElementChild.firstElementChild.style.maxHeight = `0`
      this.lastElementChild.style.padding = `0`
    }else {
      this.setAttribute('data-collapsed','true')
      console.log('collapsed')
      let getTextHeight = this.lastElementChild.firstElementChild.scrollHeight
      this.lastElementChild.firstElementChild.style.maxHeight = `${getTextHeight}px`
      this.lastElementChild.style.padding = `1em 0`
    }
  }

  if(card[0].getAttribute('data-collapsed') === 'true' ){
    card[0].lastElementChild.style.padding = '1em 0'
    card[0].lastElementChild.firstElementChild.style.maxHeight = '100px'
  }

  card.forEach((item,index) => {
    item.addEventListener('click',dropdown)
  })
}

featureSection()

function aboutUs(){
  let aboutUs = document.querySelector('.section-about-us__wrapper')
  let aboutUsCount = homepageData[4].aboutUs.length

  let count = 0

  let data = []
  data.push(homepageData[4].aboutUs)
  
  document.querySelector('.section-about-us__wrapper__left .title').innerHTML = data[0][count].title
  document.querySelector('.section-about-us__wrapper__left .desc').innerHTML = data[0][count].desc
  document.querySelector('.section-about-us__wrapper__left .btn-about-us').href = data[0][count].linkURL
  document.querySelector('.section-about-us__wrapper__right').style.backgroundImage = `url(${data[0][count].imageURL})`

  if(aboutUsCount > 1){
    function aboutUsTransition(){
      let leftPanel = document.querySelector('.section-about-us__wrapper__left')
      let rightPanel = document.querySelector('.section-about-us__wrapper__right')
      
      setTimeout(() => {
        leftPanel.style.opacity = '0'
        rightPanel.style.opacity = '0'

        setTimeout(() => {
          count++
          if(count > aboutUsCount-1) count = 0
  
          document.querySelector('.section-about-us__wrapper__left .title').innerHTML = data[0][count].title
          document.querySelector('.section-about-us__wrapper__left .desc').innerHTML = data[0][count].desc
          document.querySelector('.section-about-us__wrapper__left .btn-about-us').href = data[0][count].linkURL
          document.querySelector('.section-about-us__wrapper__right').style.backgroundImage = `url(${data[0][count].imageURL})`

          leftPanel.style.opacity = '1'
          rightPanel.style.opacity = '1'
        }, 1500);

        aboutUsTransition()
      }, 10000);
    }

    aboutUsTransition()
  }else{
    console.log('about us only contain one data')
  }
}

aboutUs()
