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

/* tab wrap */

const tab_btn = document.querySelectorAll('.sub2_title > a')
const tab = document.querySelectorAll('.tab')

tab_btn.forEach(function(t,i){
  tab_btn[i].addEventListener('click',function(){
    for(j=0; j<tab.length; j++) {
      tab_btn[j].style.color = '#000'
      tab_btn[j].style.fontSize = '1.0em'
      tab[j].style.display = 'none'
    }
    tab_btn[i].style.color = '#1f4787'
    tab_btn[i].style.fontSize = '1.1em'
    tab[i].style.display = 'block'
  })
})