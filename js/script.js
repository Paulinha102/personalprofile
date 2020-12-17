document.addEventListener( "DOMContentLoaded", function() {
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
<<<<<<< HEAD
            let secIntro = document.querySelector('#home');
            var navHeight = displayHeader.offsetHeight;
            
            var navTop = window.scrollY;
            if (navTop > navHeight) {
                displayHeader.classList.add('fixed');
                secIntro.style.marginTop = navHeight + 'px';
            }
            else {
                displayHeader.classList.remove('fixed');
                secIntro.style.marginTop = 0;
=======
            var navHeight = displayHeader.offsetHeight;
            var navTop = window.scrollY;
            if (navTop > navHeight) {
                displayHeader.classList.add('fixed');
            }
            else {
                displayHeader.classList.remove('fixed');
>>>>>>> e3936ec1ebb1d446e3cbd019ea7e05d86930eb85
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
            const sectionHidden = document.querySelectorAll('.sec-hidden');
            
            sectionHidden.forEach((section) => {
                const show = section.querySelector( ".btn-more" ),
                hide = section.querySelector( ".btn-hidden" ),
                element = section.querySelectorAll( ".hidden" );

                show.addEventListener( "click", function() {
                    hide.classList.remove('desabilitar');
                    show.classList.add('desabilitar');
                    element.forEach((item) =>{
                        item.style.display = "grid";
                    });
                    setTimeout(function() {
                        element.forEach((item) =>{
                            item.classList.add('visible');
                        });
                        
                    }, 300);
                    
                }, false);

                hide.addEventListener( "click", function() {
                    hide.classList.add('desabilitar');
                    show.classList.remove('desabilitar');
                
                    element.forEach((item) =>{
                        item.classList.remove('visible');
                        item.style.display = "grid";
                    });
                    setTimeout(function() {
                        element.forEach((item) =>{
                            item.style.display = "none";
                        });
                    }, 300);
                    
                }, false);
            });
    }
    initItensHidden();

    function initScrolltop(){
        const btScroll = document.querySelector('.b-scroll');
        function scrollToTop(e){
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
        btScroll.addEventListener('click', scrollToTop);
        
    }
    initScrolltop();


});