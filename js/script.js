function initMenu(){
    const btMenu = document.querySelector('header .btn-menu');
    console.log(btMenu);

    btMenu.addEventListener('click', function(){
        btMenu.classList.toggle('active');
        console.log('testa')
    })
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
initScrollSuave();