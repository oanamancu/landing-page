/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
function buildNav() {
    const ul = document.querySelector('#navbar__list');

    sections.forEach((section, i) => {
        const sectionNumber = section.id.charAt(section.id.length - 1);
        const li = document.createElement('li');
        li.classList.add('navbar__menu');
        li.setAttribute('id', `li${sectionNumber}`);
        const menuLink = document.createElement('a');
        menuLink.classList.add('navbar__menu', 'menu__link');
        menuLink.innerHTML = `<em>Section ${sectionNumber}</em>`;
        i === 0 ? menuLink.classList.add("active__link") : "";
        li.appendChild(menuLink);
        ul.append(li);
    });

    ul.addEventListener('click', scrollToAnchor);
}

// Add class 'active' to section when near top of viewport
function makeActive() {
    sections.forEach((section, i) => {
        const navLinks = document.querySelectorAll('.menu__link')
        const box = section.getBoundingClientRect();
        //Find a value that works best, but 150 seems to be a good start.
        if (box.top <= 150 && box.bottom >= 150) {
            //apply active state on current section and corresponding Nav link
            if (!section.classList.contains('awesome-active-class')) {
                section.classList.add('awesome-active-class');
            }
            navLinks[i].classList.add('active__link');
        } else {
            //Remove active state from other section and corresponding Nav link
            section.classList.remove('awesome-active-class');
            navLinks[i].classList.remove('active__link');
        }
    });
}


// Scroll to anchor ID using scrollTO event
function scrollToAnchor(event) {
    event.preventDefault();
    const target = event.target.parentElement;
    if (target.nodeName === 'LI') {
        const section = document.querySelector(`#section${target.id.charAt(target.id.length-1)}`);
        window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth"
        });
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 
buildNav();

// Set sections as active
document.addEventListener("scroll", function () {
    makeActive();
});