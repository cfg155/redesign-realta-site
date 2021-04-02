import Swiper, {Navigation,Pagination} from 'swiper';

Swiper.use([Navigation,Pagination])

var menu = ['Property','People','Manufacturing','IT Service & Asset','Hospitality','Distribution']
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView : 6,
  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
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