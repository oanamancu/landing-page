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

    for (let i = 0; i < document.querySelectorAll('section').length; i++) {
        const li = document.createElement('li');
        li.classList.add('navbar__menu');
        const menuLink = document.createElement('a');
        menuLink.classList.add('navbar__menu', 'menu__link');
        menuLink.textContent = `Section ${i+1}`;
        li.appendChild(menuLink);
        ul.appendChild(li);
    }

}

// Add class 'active' to section when near top of viewport

function sectionSelect(event) {
    const target = event.target;
    if (target.nodeName === 'SECTION') {

    }
}


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav();

// Scroll to section on link click

// Set sections as active


