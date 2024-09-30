const navToggle = document.querySelector('#nav-toggle'),
      navMenu = document.querySelector('#nav-menu');

const showMenu = () => {
    navMenu.classList.toggle('show-menu')
}

navToggle.addEventListener('click', showMenu);

const navLink = document.querySelectorAll('.nav__link')

const linkAction = function(){
    const navMenu = document.querySelector('#nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))