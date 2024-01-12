//Add background to navbar on Scroll
function navbarStyleOnScroll(){
    const windowPositionTrigger = 50;
    const navbar = document.querySelector('#main-navbar');

    window.addEventListener('scroll', () => {
        if(window.scrollY > windowPositionTrigger){
            navbar.classList.add('bg-dark');
            navbar.classList.add('navbar-transparent');
        }else{
            navbar.classList.remove('bg-dark');
            navbar.classList.remove('navbar-transparent');
        }
    }); 
}

document.addEventListener('DOMContentLoaded', navbarStyleOnScroll);