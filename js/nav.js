// js/nav.js
(function () {

    const dropdownItems = document.querySelectorAll('.nav-item--dropdown');
    const isMobile = () => window.innerWidth <= 900;

    // ── DESKTOP: hover only ──
    dropdownItems.forEach(item => {

        item.addEventListener('mouseenter', () => {
            if (isMobile()) return;
            dropdownItems.forEach(i => i.classList.remove('open'));
            item.classList.add('open');
        });

        item.addEventListener('mouseleave', () => {
            if (isMobile()) return;
            item.classList.remove('open');
        });

        // ── MOBILE: tap to toggle ──
        const trigger = item.querySelector('.nav-link--has-dropdown');
        trigger.addEventListener('click', e => {
            if (!isMobile()) return; // desktop — do nothing on click
            e.preventDefault();
            const isOpen = item.classList.contains('open');
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
})();