/* nav */

const nav = document.querySelectorAll('nav > ul > li')
const sub = document.querySelectorAll('.sub')

nav.forEach(function(t,i){
  nav[i].addEventListener('mouseover',function(){
    sub[i].style.display = 'flex'
  })
  nav[i].addEventListener('mouseout',function(){
    sub[i].style.display = 'none'
  })
})

/* side wrap */

const side_btn = document.querySelector('#side_btn')
const side_wrap = document.querySelector('.side_wrap')

  side_btn.addEventListener('click', function(){
    side_wrap.classList.toggle('side_hide')
  })

/* title */

const main_t = document.querySelector('.main_title')
const sub_t = document.querySelector('.sub_title')

setTimeout(function(){
  main_t.style.top = 0
  main_t.style.opacity = .8
},10)

setTimeout(function(){
  sub_t.style.top = 0
  sub_t.style.opacity = .8
},500)

/* blog */

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay:3000,
    disableOnInteraction:false,
  },

  pagination: {
    el: '.swiper-pagination',
    dynamiBullets:true,
    clickable:true,
  },

  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView:3,
      spaceBetween:30,
    },
    800: {
      slidesPerView:2,
      spaceBetween:30,
    },
    0: {
      slidesPerView:1,
    }
  },
});

/* gsap */

gsap.from('.contents2', {
  scrollTrigger:{
  trigger:'.contents2',
  start:'0 100%',
}, 
opacity:0, 
y:100,
duration:.3,
})

gsap.from('.contents3', {
  scrollTrigger:{
  trigger:'.contents3',
  start:'0 100%',
}, 
opacity:0, 
y:100,
duration:.3,
})

gsap.from('.contents4', {
  scrollTrigger:{
  trigger:'.contents4',
  start:'0 100%',
}, 
opacity:0, 
y:100,
duration:.3,
})