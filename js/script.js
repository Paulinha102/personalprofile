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

function initBarGraph(){
    (function($) {
        function generateBarGraph(wrapper) {
          // Set Up Values Array
          var values = [];
      
          // Get Values and save to Array
          $(wrapper + ' .bar').each(function(index, el) {
            values.push($(this).data('value'));
          });
      
          // Get Max Value From Array
          var max_value = Math.max.apply(Math, values);
      
          // Set width of bar to percent of max value
          $(wrapper + ' .bar').each(function(index, el) {
            var bar = $(this),
                value = bar.data('value'),
                percent = Math.ceil((value / max_value) * 100);
      
            // Set Width & Add Class
            bar.width(percent + '%');
            bar.addClass('in');
          });
        }
      
        // Generate the bar graph on window load...
        $(window).on('load', function(event) {
          generateBarGraph('#dashboard-stats');
        });
      })(jQuery); // Fully reference jQuery after this point.
}
initBarGraph();



