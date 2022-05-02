const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Change header style on scroll
const header = $('header');
const whiteLogo = $('.logo-white');
const blackLogo = $('.logo-black');
const navLinks = $$('.nav-link');
const headerBtn = $('.header-btn');
const navBtn = $('.nav-btn');

window.onscroll = function() {
    changeHeaderStyleOnScroll();
}

function changeHeaderStyleOnScroll() {
    if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        header.style.backgroundColor = 'var(--white-color)';
        header.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.1)';
        
        whiteLogo.classList.add('hidden');
        blackLogo.classList.remove('hidden');

        navLinks.forEach((navLink) => {
            navLink.style.color = 'var(--light-black-color)';
        });

        headerBtn.classList.remove('btn-empty');
        headerBtn.classList.add('btn-fill');

        navBtn.style.color = 'var(--light-black-color)';
    }
    else {
        header.style.backgroundColor = 'var(--primary-color)';
        header.style.boxShadow = null;

        whiteLogo.classList.remove('hidden');
        blackLogo.classList.add('hidden');
        
        navLinks.forEach((navLink) => {
            navLink.style.color = 'var(--white-color)';
        });

        headerBtn.classList.remove('btn-fill');
        headerBtn.classList.add('btn-empty');

        navBtn.style.color = 'var(--white-color)';
    }
}

// Toggle nav menu in mobile/tablet
const nav = $('.nav-list');

navBtn.onclick = function() {
    toggleNavOnMobile();
}

function toggleNavOnMobile() {
    nav.classList.toggle('show');
    if(nav.style.maxHeight) {
        nav.style.maxHeight = null;
    }
    else {
        nav.style.maxHeight = nav.scrollHeight + 'px';
    }
}

// Toggle subnav in mobile/tablet
const navItemParents = $$('.nav-item.has-subnav');
const subnavs = $$('.subnav');

navItemParents.forEach((navItemParent, index) => {
    const currentSubnav = subnavs[index];
    navItemParent.onclick = function() {
        toggleSubnavOnMobile(currentSubnav);
    }
})

function toggleSubnavOnMobile(currentSubnav) {
    if(currentSubnav.style.maxHeight) {
        currentSubnav.style.maxHeight = null;
    }
    else {
        currentSubnav.style.maxHeight = currentSubnav.scrollHeight + 'px';
    }
    nav.style.maxHeight = nav.scrollHeight + currentSubnav.scrollHeight + 'px';
}

// Close nav on mobile/tablet when click on item
navLinks.forEach((navLink) => {
    navLink.onclick = function() {
        if(!navLink.classList.contains('has-subnav')) {
            toggleNavOnMobile();
        }
    }
})

// Animation of faq items
const faqHeaders = $$('.faq-header');
const faqBodies = $$('.faq-body');

faqHeaders.forEach((faqHeader, index) => {
    const currentBody = faqBodies[index];
    faqHeader.onclick = function() {
        this.classList.toggle('active');
        currentBody.classList.toggle('active');

        if(currentBody.style.maxHeight) {
            currentBody.style.maxHeight = null;
        }
        else {
            currentBody.style.maxHeight = currentBody.scrollHeight + 'px';
        }
    }
})