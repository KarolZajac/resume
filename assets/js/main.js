// menu
const navToggle = document.querySelector('#nav-toggle'),
    navMenu = document.querySelector('#nav-menu'),
    menuIcon = document.querySelector('#menu-icon');

const showMenu = () => {
    navMenu.classList.toggle('show-menu')

    // Toggle between two icons
    if (navMenu.classList.contains('show-menu')) {
        menuIcon.classList.replace('bx-grid-alt', 'bx-x');
    } else {
        menuIcon.classList.replace('bx-x', 'bx-grid-alt');
    }
}

navToggle.addEventListener('click', showMenu);

const navLink = document.querySelectorAll('.nav__link')

const linkAction = function () {
    const navMenu = document.querySelector('#nav-menu')
    navMenu.classList.remove('show-menu')
    // Toggle between two icons
    if (navMenu.classList.contains('show-menu')) {
        menuIcon.classList.replace('bx-grid-alt', 'bx-x');
    } else {
        menuIcon.classList.replace('bx-x', 'bx-grid-alt');
    }
}

navLink.forEach(n => n.addEventListener('click', linkAction))


// scroll links

const sections = document.querySelectorAll('section[id]')
const lastSection = sections.length > 0 ? sections[sections.length - 1] : null;

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']'),
            totalHeight = document.documentElement.scrollHeight,
            viewportHeight = window.innerHeight

        const scrollFromBottom = totalHeight - scrollY - viewportHeight
        // console.log(current)
        // console.log(scrollY)
        // console.log(scrollFromBottom);
        // console.log(sectionTop)
        // console.log(sectionHeight)

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (scrollFromBottom != 0) {
                sectionsClass.classList.add('active-link')
            }
            else {
                sectionsClass.classList.remove('active-link')
            }
        } else {
            sectionsClass.classList.remove('active-link')
        }

        if (sectionId == lastSection.getAttribute('id')) {
            if (scrollFromBottom == 0) {
                sectionsClass.classList.add('active-link')
            } else {
                sectionsClass.classList.remove('active-link')
            }
        }
    })
}

window.addEventListener('scroll', scrollActive)

// scroll top

const scrollUp = () => {
    const scrollUp = document.querySelector('#scroll-top')
    const scrollY = window.pageYOffset
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scrolltop')
        : scrollUp.classList.remove('show-scrolltop')
}
window.addEventListener('scroll', scrollUp)


const themeButton = document.querySelector('#theme-button')

const themeChange = () => {
    if (themeButton.classList.contains('bxs-moon')) {
        themeButton.classList.remove('bxs-moon')
        themeButton.classList.add('bx-sun')
        document.querySelector('body').classList.add('dark-theme')
    }
    else {
        themeButton.classList.remove('bx-sun')
        themeButton.classList.add('bxs-moon')
        document.querySelector('body').classList.remove('dark-theme')
    }
}

themeButton.addEventListener('click', themeChange)

function scaleCv() {
    document.body.classList.add('scale-cv')
}

function removeScale() {
    document.body.classList.remove('scale-cv')
}

let areaCv = document.getElementById('area-cv');

let resumeButton = document.getElementById('resume-button');

let opt = {
    margin: 0,
    filename: 'KarolZajac_Resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 4 },
    jsPDF: { format: 'a4', orientation: 'portrait' }
}

function generateResume() {
    html2pdf(areaCv, opt);
}

resumeButton.addEventListener('click', () => {
    scaleCv()
    generateResume()
    setTimeout(removeScale, 3000)
})