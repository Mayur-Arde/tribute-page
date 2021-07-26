// 'use strict';

const toggle = document.querySelector('.toggle')
const navBar = document.querySelector('.nav-bar')

toggle.addEventListener('click',() => {
  toggle.classList.toggle('active')
  navBar.classList.toggle('active')
})