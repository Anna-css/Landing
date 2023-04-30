const btnToggleMenu = document.querySelector ('.header__toggle');
const headerMenu = document.querySelector('.menu');

const toggleMenu = function(){
  headerMenu.classList.toggle('menu_shown');

}
btnToggleMenu.addEventListener('click',toggleMenu);