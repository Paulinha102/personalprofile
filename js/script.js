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
initMenu();


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
