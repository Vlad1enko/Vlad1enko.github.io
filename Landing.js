const menuToggle = document.querySelector('.burger');
const mobileNavContainer = document.querySelector('.mobile-nav');

menuToggle.onclick = function(){
    menuToggle.classList.toggle('burger-active');
    mobileNavContainer.classList.toggle('mobile-nav--active');
}
