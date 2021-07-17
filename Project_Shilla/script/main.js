/* nav */

const nav = document.querySelector('.nav_wrap')
const nav_btn = document.querySelector('.sub_con > .nav')

nav_btn.addEventListener('click',function(){
  nav.classList.toggle('nav_right')
})

/* reservation */

const reservation = document.querySelector('.reserv_wrap')
const reserv_btn = document.querySelector('.reserv_btn')

reserv_btn.addEventListener('click',function(){
  reservation.classList.toggle('reserv_right')
  reserv_btn.classList.toggle('reserv_btn_after')
})

/* guest count */

const minus = document.querySelectorAll('.minus')
const plus = document.querySelectorAll('.plus')
const guest = document.querySelectorAll('.guest p span')

plus.forEach(function(t,i){
  let count = 0
  plus[i].addEventListener('click',function(){
    count += 1
    guest[i].innerHTML = count
  })
  minus[i].addEventListener('click',function(){
    count -= 1
    guest[i].innerHTML = count
  })
})

/* month */

const date = document.querySelectorAll('table tbody tr td')

date.forEach(function(t,i){
  date[i].addEventListener('click',function(){
  for(j=0; j<date.length; j++){
    date[j].classList.remove('day_select')
  }
    date[i].classList.add('day_select')
  })
})

/* top btn */

const top_btn = document.querySelector('.top_btn')
const top_wrap = document.querySelector('.page1')

top_btn.addEventListener('click',function(){
  $.fn.fullpage.moveTo(1);
})

/* section bg */

const bg_th2 = document.querySelectorAll('.page2 .side p')
const bg_large2 = document.querySelectorAll('.page2 .bg div')

bg_th2.forEach(function(t,i){
  bg_th2[i].addEventListener('mouseover',function(){
    for(j=0; j<bg_th2.length; j++){
      bg_large2[j].style.opacity = 0
    }
    bg_large2[i].style.opacity = 1
  })
})

const bg_th3 = document.querySelectorAll('.page3 .side p')
const bg_large3 = document.querySelectorAll('.page3 .bg div')

bg_th3.forEach(function(t,i){
  bg_th3[i].addEventListener('mouseover',function(){
    for(j=0; j<bg_th3.length; j++){
      bg_large3[j].style.opacity = 0
    }
    bg_large3[i].style.opacity = 1
  })
})

/* fullpage */

$(document).ready(function(){
  $('#fullpage').fullpage({
    autoScrolling:true,
    css3:false,
    afterRender:function(){
      setInterval(function(){
        $.fn.fullpage.moveSlideRight();
      }, 3000);
    },
  });
});

/* navigation */

$('.left_nav a').on('click',function(){
  let index = $(this).index();
  $.fn.fullpage.moveTo(index + 1)
})