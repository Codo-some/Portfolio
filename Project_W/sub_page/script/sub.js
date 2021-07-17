const nav_btn1 = document.querySelector('.nav_btn1')
const nav_btn2 = document.querySelector('.nav_btn2')
const side_wrap = document.querySelector('.side_wrap')

nav_btn1.addEventListener('click',function(){
  side_wrap.style.display = 'block'
  setTimeout(()=>{
  side_wrap.style.opacity = 1
  },1)
  nav_btn1.style.display = 'none'
  nav_btn2.style.display = 'block'
})

nav_btn2.addEventListener('click',function(){
  side_wrap.style.display = 'none'
  side_wrap.style.opacity = 0
  nav_btn1.style.display = 'block'
  nav_btn2.style.display = 'none'
})