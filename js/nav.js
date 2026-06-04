// js/nav.js
// Handles dropdown open/close and mobile hamburger

(function () {

    // ── DESKTOP: click to toggle dropdowns ──
    const dropdownItems = document.querySelectorAll('.nav-item--dropdown');

    dropdownItems.forEach(item => {
        const trigger = item.querySelector('.nav-link--has-dropdown');

        trigger.addEventListener('click', e => {
            e.preventDefault();
            const isOpen = item.classList.contains('open');

            // close all others first
            dropdownItems.forEach(i => i.classList.remove('open'));

            if (!isOpen) item.classList.add('open');
        });
    });

    // close when clicking outside
    document.addEventListener('click', e => {
        if (!e.target.closest('.nav-item--dropdown')) {
            dropdownItems.forEach(i => i.classList.remove('open'));
        }
    });

    // ── MOBILE: hamburger ──
    const hamburger = document.getElementById('nav-hamburger');
    const nav = document.getElementById('main-nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            nav.classList.toggle('nav--open');
        });
    }

    // ── ACTIVE STATE: highlight current page ──
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link, .nav-dropdown__link').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href !== '#' && currentPath === href.split('/').pop()) {
            link.classList.add('active');
            // also mark parent dropdown trigger as active
            const parent = link.closest('.nav-item--dropdown');
            if (parent) {
                parent.querySelector('.nav-link')?.classList.add('active');
            }
        }
    });

})();