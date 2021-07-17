
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

