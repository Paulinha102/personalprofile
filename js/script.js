function initMenu(){
    const btMenu = document.querySelector('header .btn-menu');
    const navMenu = document.querySelector('header nav');

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
    const linksInternos = document.querySelectorAll('nav a[href^="#"]');

    function scrollToSection(e){
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href'); 
        const section = document.querySelector(href);
        const menu = document.querySelector('header');
        const menuHeight = menu.clientHeight; 

        const topo = section.offsetTop - menuHeight;
        window.scrollTo({
            top: topo,
            behavior: 'smooth',
        });
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}
initScrollSuave();

function initMenuActive(){
    const section = document.querySelectorAll('section');
    section.forEach((item) => {
        let height = item.clientHeight;
        const offsetTop = item.offsetTop;
        const menu = document.querySelector('header');
        const menuHeight = menu.clientHeight; 
        const id = item.getAttribute('id');
        const itemMenu = document.querySelector('nav a[href="#' + id + '"]');
        
        window.addEventListener('scroll', function(){
            const scrollTop = window.scrollY;
            if(offsetTop - menuHeight*2 < scrollTop  && offsetTop + height - menuHeight*2 > scrollTop) {
                itemMenu.classList.add('active');
            }
            else if(window.scrollY <= menuHeight){
                
            }
            else {
                itemMenu.classList.remove('active');
            }
        });
    });
}
initMenuActive();


function initItensHidden(){
    const btMore = document.querySelectorAll('.btn-more');
    const btHidden = document.querySelectorAll('.btn-hidden');
    const itensOcultos = document.querySelectorAll('.hidden');
    if(btMore){
        btMore.forEach((button) => {
            button.addEventListener('click', function(){
                itensOcultos.forEach((item) =>{
                    item.classList.remove('hidden');
                    item.classList.add('visible');
                });
                this.classList.add('desabilitar');
            });
        });
    }

    if(btHidden){
        btHidden.forEach((button) => {
            button.addEventListener('click', function(){
                const itensVisiveis = document.querySelectorAll('.visible');
                itensVisiveis.forEach((item) =>{
                    item.classList.add('hidden');
                    item.classList.remove('visible');
                });
                this.classList.toggle('desabilitar');
                
            });
        });
    };
    
}

initItensHidden();
