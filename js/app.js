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

    document.querySelectorAll('section').forEach ( section => {
        const sectionNumber = section.id.charAt(section.id.length-1); 
        const li = document.createElement('li');
        li.classList.add('navbar__menu');
        li.setAttribute('id', `li${sectionNumber}`);
        const menuLink = document.createElement('a');
        menuLink.classList.add('navbar__menu', 'menu__link');
        menuLink.textContent = `Section ${sectionNumber}`;
        li.appendChild(menuLink);
        ul.appendChild(li);
    });

    ul.addEventListener('click', scrollToAnchor);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
function scrollToAnchor(event) {
    event.preventDefault();
    const target = event.target.parentElement;
    if (target.nodeName === 'LI') {
        const section = document.querySelector(`#section${target.id.charAt(target.id.length-1)}`);
        window.scrollTo({
            top: section.offsetTop,
            behavior:"smooth"
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

// Scroll to section on link click

// Set sections as active
document.addEventListener("scroll", function() { makeActive();});


