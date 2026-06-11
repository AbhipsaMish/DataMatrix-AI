// js/nav-inject.js
// Paste this file once. Link it on every page.
// To update the nav, edit ONLY this file.

const NAV_HTML = `
<header>
    <a href="index.html" class="logo-container">
        <img src="assets/images/logo.png" alt="DataMatrix Logo" class="logo">
        <div class="logo-text">
            <span class="text-white">Datamatrix</span><span class="text-white">.AI</span>
            <div class="tagline-text">Make AI work. Responsibly</div>
        </div>
    </a>

    <nav id="main-nav">
        <ul class="nav-list">
            <li><a href="index.html" class="nav-link" style="padding-right: 22px;">Home</a></li>

            <li class="nav-item--dropdown">
                <a href="#" class="nav-link nav-link--has-dropdown">
                    Products <i class="fas fa-chevron-down nav-chevron"></i>
                </a>
                <ul class="nav-dropdown">
                    <li>
                        <a href="edis.html" class="nav-dropdown__link">
                            <span class="nav-dropdown__title">EDIS</span>
                            <span class="nav-dropdown__sub">Decision Intelligence Platform</span>
                        </a>
                    </li>
                </ul>
            </li>


            <li class="nav-item--dropdown">
                <a href="#" class="nav-link nav-link--has-dropdown">
                    Resources <i class="fas fa-chevron-down nav-chevron"></i>
                </a>
                <ul class="nav-dropdown">
                    <li>
                        <a href="blogs.html" class="nav-dropdown__link">
                            <span class="nav-dropdown__title">Blogs</span>
                            <span class="nav-dropdown__sub">Thinking on enterprise AI</span>
                        </a>
                    </li>
                    <li>
                        <a href="povs.html" class="nav-dropdown__link">
                            <span class="nav-dropdown__title">POVs</span>
                            <span class="nav-dropdown__sub">Our points of view</span>
                        </a>
                    </li>
                    <li>
                        <a href="case-studies.html" class="nav-dropdown__link">
                            <span class="nav-dropdown__title">Case Studies</span>
                            <span class="nav-dropdown__sub">Real deployments, real results</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li class="nav-item--dropdown">
                <a href="#" class="nav-link nav-link--has-dropdown">
                    Company <i class="fas fa-chevron-down nav-chevron"></i>
                </a>
                <ul class="nav-dropdown">
                    <li>
                        <a href="about.html" class="nav-dropdown__link">
                            <span class="nav-dropdown__title">About Us</span>
                            <span class="nav-dropdown__sub">Who we are</span>
                        </a>
                    </li>
                    <li>
                        <a href="founders.html" class="nav-dropdown__link">
                            <span class="nav-dropdown__title">Founders</span>
                            <span class="nav-dropdown__sub">Meet the team</span>
                        </a>
                    </li>
                    <li>
                        <a href="partnerships.html" class="nav-dropdown__link">
                            <span class="nav-dropdown__title">Partnerships</span>
                            <span class="nav-dropdown__sub">STPI and beyond</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-dropdown__link nav-dropdown__link--inactive">
                            <span class="nav-dropdown__title">Accolades</span>
                            <span class="nav-dropdown__sub">Coming soon</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-dropdown__link nav-dropdown__link--inactive">
                            <span class="nav-dropdown__title">Gallery &amp; Events</span>
                            <span class="nav-dropdown__sub">Coming soon</span>
                        </a>
                    </li>
                    <li>
                        <a href="locations.html" class="nav-dropdown__link">
                            <span class="nav-dropdown__title">Office Locations</span>
                            <span class="nav-dropdown__sub">Bangalore &amp; Bhubaneswar</span>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>

    <button class="nav-hamburger" id="nav-hamburger" aria-label="Open menu">
        <span></span><span></span><span></span>
    </button>

    <a href="index.html#contact" class="btn-reach">Contact Us</a>
</header>
`;

// Inject into page
document.write(NAV_HTML);