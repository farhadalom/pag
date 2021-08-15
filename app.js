let menuBtn = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}