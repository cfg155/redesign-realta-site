import Swiper, {Navigation,Pagination,Autoplay} from 'swiper';
import homepageData from './homepageData';

function productSection(){
  var title = document.querySelector('.product-section__left .title')
  var desc = document.querySelector('.product-section__left .desc')
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
    allowTouchMove:false,
    centeredSlides:true,
    autoplay: {
      delay:1000
    },

  })

}

clientSection()

function moduleSection(){
  Swiper.use([Navigation,Pagination])

  var menu = ['Property','People','Manufacturing','IT Service & Asset','Hospitality','Distribution']
  const swiper = new Swiper('.section-module .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView : 6,
    centeredSlides: true,
  
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

