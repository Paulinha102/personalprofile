function initMenu(){
    const btMenu = document.querySelector('header .btn-menu');
    const navMenu = document.querySelector('header nav');
    console.log(btMenu);

    btMenu.addEventListener('click', function(){
        btMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

     //fixed
     function fixedMenu(){
        let displayHeader = document.querySelector('header'); 
        var navHeight = displayHeader.offsetHeight;
        var navTop = window.scrollY;
        if (navTop > navHeight) {
            displayHeader.classList.add('fixed');
        }
        else {
            displayHeader.classList.remove('fixed');
        }
    }
    window.addEventListener('scroll', fixedMenu);

}
//initMenu();


function initScrollSuave(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(e){
        event.preventDefault();
        const href = e.currentTarget.getAttribute('href'); 
        const section = document.querySelector(href);
        height = section.offsetTop; 

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}
//initScrollSuave();


function initScrollPortfolio(){
    const spaceHolder = document.querySelector('.space-holder');
    const horizontal = document.querySelector('.horizontal');
    spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

    function calcDynamicHeight(ref) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const objectWidth = ref.scrollWidth;
    return objectWidth - vw + vh + 150;
    }

    window.addEventListener('scroll', () => {
    const sticky = document.querySelector('.sticky');
    horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
    });

    window.addEventListener('resize', () => {
    spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
    });
}
initScrollPortfolio();