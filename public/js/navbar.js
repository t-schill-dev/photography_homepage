// Toggle on/off menu in smaller screens
const navList = document.querySelector('.navigation-tabList');
const navToggle = document.querySelector('.mobile-nav-toggle');
const bars = document.querySelector('.spanBars');
const xmark = document.querySelector('.spanXmark');

navToggle.addEventListener('click', () => {
    const visibility = navList.getAttribute('data-visible');

    if (visibility === 'false') {
        navList.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
        bars.classList.add('elHidden');
        xmark.classList.remove('elHidden');
    } else if (visibility === 'true') {
        navList.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
        bars.classList.remove('elHidden');
        xmark.classList.add('elHidden');
    }
});

// Tab bottom border of active page
const home = document.querySelector('.homeTab');
const about = document.querySelector('.aboutTab');
const work = document.querySelector('.workTab');
const stories = document.querySelector('.storiesTab');
const contact = document.querySelector('.contactTab');

const activePage = window.location.href;

switch (activePage) {
    case 'http://localhost:8080/':
        home.classList.add('tabBoarder');
        break;
    case 'http://localhost:8080/about/':
        about.classList.add('tabBoarder');
        break;
    case 'http://localhost:8080/portfolio/':
        work.classList.add('tabBoarder');
        break;
    case 'http://localhost:8080/stories/':
        stories.classList.add('tabBoarder');
        break;
    case 'http://localhost:8080/contact/':
        contact.classList.add('tabBoarder');
        break;
}