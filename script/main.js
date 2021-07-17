/* fixed page */

const contents = document.querySelectorAll('.contents')

window.addEventListener('scroll',function(){
  contents.forEach(function(t,i){
    if(window.pageYOffset <= contents[2].offsetTop){
      contents[1].classList.remove('fixed')
    }
  })
})

window.addEventListener('scroll',function(){
  contents.forEach(function(t,i){
    if(window.pageYOffset >= contents[0].offsetHeight) {
      contents[1].classList.add('fixed')
    }
  })
})

/* light */

const light_btn = document.querySelector('.light')
const light_ball = document.querySelector('.light span')
const about = document.querySelectorAll('.about_wrap > div')

let bool = true

light_btn.addEventListener('click',function(){
  light_ball.classList.toggle('light_ball')
  if(bool == true) {

    contents[0].style.backgroundColor = '#555'
    contents[1].style.backgroundColor = '#444'
    contents[2].style.backgroundColor = '#333'

    about[1].style.backgroundColor = '#3f3f3f'
    about[2].style.backgroundColor = '#3f3f3f'
    about[3].style.backgroundColor = '#3f3f3f'
    about[4].style.backgroundColor = '#3f3f3f'

    bool = false
  } else {

    contents[0].style.backgroundColor = '#fff5f5'
    contents[1].style.backgroundColor = '#fff0f0'
    contents[2].style.backgroundColor = '#ffe8e8'

    about[1].style.backgroundColor = '#ffebeb'
    about[2].style.backgroundColor = '#ffebeb'
    about[3].style.backgroundColor = '#ffebeb'
    about[4].style.backgroundColor = '#ffebeb'

    bool = true
  }
})

/* right_nav */

const right_btn = document.querySelectorAll('.right_nav a')

right_btn.forEach(function(t,i){
  right_btn[0].addEventListener('click',function(){
    window.scrollTo(0, contents[0].offsetTop)
  })
  right_btn[1].addEventListener('click',function(){
    if(window.pageYOffset == contents[2].offsetHeight + contents[2].clientHeight) {
      window.scrollTo(0, contents[1].offsetTop + contents[1].clientHeight)
    } else {
      window.scrollTo(0, contents[1].offsetTop)
    }
  })
  right_btn[2].addEventListener('click',function(){
    window.scrollTo(0, contents[2].offsetTop)
  })
})

/* pagination */

const pagination = document.querySelector('.pagination')

window.addEventListener('scroll',function(){
  contents.forEach(function(t,i){
    if(window.pageYOffset < contents[0].offsetHeight) {
      pagination.innerHTML = '01'
      for(j=0; j<right_btn.length; j++) {
        right_btn[j].style.letterSpacing = '0'
      }
      right_btn[0].style.letterSpacing = '10px'
    } else if(window.pageYOffset < contents[2].offsetHeight + contents[2].clientHeight) {
      pagination.innerHTML = '02'
      for(j=0; j<right_btn.length; j++) {
        right_btn[j].style.letterSpacing = '0'
      }
      right_btn[1].style.letterSpacing = '10px'
    } else if(window.pageYOffset == contents[2].offsetHeight + contents[2].clientHeight) {
      pagination.innerHTML = '03'
      for(j=0; j<right_btn.length; j++) {
        right_btn[j].style.letterSpacing = '0'
      }
      right_btn[2].style.letterSpacing = '10px'
    }
  })
})

/* portfolio */

const pf_btn = document.querySelectorAll('.pf_title a')
const pf_con = document.querySelectorAll('.pf')

pf_btn.forEach(function(t,i){
  pf_btn[i].addEventListener('click',function(){
    for(j=0; j<pf_btn.length; j++) {
      pf_btn[j].style.backgroundColor = 'transparent'
      pf_btn[j].style.color = 'coral'
      pf_con[j].style.height = '0'
      pf_con[j].style.opacity = 0
    }
    pf_btn[i].style.backgroundColor = 'coral'
    pf_btn[i].style.color = '#fff'
    pf_con[i].style.height = '100%'
    pf_con[i].style.opacity = 1
  })
})

/* popup */

const popup_all = document.querySelector('.pf_popup')
const popup = document.querySelectorAll('.popup')
const popup_btn = document.querySelectorAll('.link .btm a:first-child')
const close_btn = document.querySelectorAll('.close_btn')
const opa_bg = document.querySelector('.opa_bg')

popup_btn.forEach(function(t,i){
  popup_btn[i].addEventListener('click',function(){
    popup_all.style.display = 'block'
    popup[i].style.display = 'block'
    setTimeout(function(){
      popup[i].style.opacity = 1
    },1)
    opa_bg.style.display = 'block'
    setTimeout(function(){
      opa_bg.style.opacity = '0.6'
    },1)

  })
})
close_btn.forEach(function(t,i){
  close_btn[i].addEventListener('click',function(){
    popup_all.style.display = 'none'
    for(j=0; j<popup.length; j++){
      popup[j].style.display = 'none'
    }
    opa_bg.style.opacity = '0'
    setTimeout(function(){
      opa_bg.style.display = 'none'
    },400)
  })
})