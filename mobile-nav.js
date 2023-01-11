
const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const container = document.querySelector('.main-container')
const body = document.body;

function toggleMobileNav() {
    mobileNav.classList.toggle('mobile-nav-active');
    navBtn.classList.toggle('nav-button-close');
    container.classList.toggle('blur')
    body.classList.toggle('no-scroll');
}

navBtn.addEventListener('click', function(event){
    event.stopPropagation();
    toggleMobileNav();
})


window.addEventListener('click', function(){
    if (body.classList.contains('no-scroll')) {
        toggleMobileNav();
    }
})

mobileNav.addEventListener('click', function(event){
    event.stopPropagation();
})