(function(){
    const openButton = document.querySelector('.x__menu');
    const menu = document.querySelector('.x__link');
    const closeMenu = document.querySelector('.x__close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('x__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('x__link--show');
    });

    


})();