// menu
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


// scroll links

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}

window.addEventListener('scroll', scrollActive)

// scroll top

const scrollUp = () =>{
	const scrollUp = document.querySelector('#scroll-top')
  const scrollY = window.pageYOffset
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scrolltop')
						: scrollUp.classList.remove('show-scrolltop')
}
window.addEventListener('scroll', scrollUp)


const themeButton = document.querySelector('#theme-button')

const themeChange = () => {
  if(themeButton.classList.contains('bxs-moon')){
    themeButton.classList.remove('bxs-moon')
    themeButton.classList.add('bx-sun')
    document.querySelector('body').classList.add('dark-theme')
  }
  else{
    themeButton.classList.remove('bx-sun')
    themeButton.classList.add('bxs-moon')
    document.querySelector('body').classList.remove('dark-theme')
  }
}

themeButton.addEventListener('click', themeChange)