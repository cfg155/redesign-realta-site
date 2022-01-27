<!-- Adding Navbar -->
<link rel="stylesheet" href="css/navbar.css" class="navbar-style">

<nav>
    <!-- This is Navbar area -->
    <div class="nav">
        <div class="nav__container">
            <div class="nav__container__links d-flex py-3 align-items-center justify-content-between">
                <a href="index.html"><img src="assets/LOGO-Realta-with-since-1983.png" class="nav--logo"></a>
                <div class="nav--links">
                    <ul class="list-inline d-flex">
                        <li class="me-3 position-relative"><a href="<?php echo base_url('/') ?>" class="current text-decoration-none text-dark">HOME</a>
                        <li class="me-3 position-relative"><a href="<?php echo base_url('/solution') ?>" class="current text-decoration-none text-dark">SOLUTIONS</a>
                            <div class="dropdown d-flex position-absolute start-0 justify-content-between border border-1 p-3">
                                <ul class="list-inline me-5 text-nowrap">
                                    <li><a href="<?php echo base_url('/siap') ?>" class="text-decoration-none text-dark d-block p-2">ERP (Enterprise Resource Planning)</a></li>
                                    <li><a href="<?php echo base_url('/siap') ?>" class="text-decoration-none text-dark d-block p-2">EAM (Enterprise Asset Management)</a></li>
                                    <li><a href="<?php echo base_url('/siap') ?>" class="text-decoration-none text-dark d-block p-2">Golf Course Management System</a></li>
                                    <li><a href="<?php echo base_url('/siap') ?>" class="text-decoration-none text-dark d-block p-2">Human Resources Information System</a></li>
                                    <li><a href="<?php echo base_url('/siap') ?>" class="text-decoration-none text-dark d-block p-2">Hospitality Management System</a></li>
                                </ul>
                                <ul class="list-inline me-5 text-nowrap">
                                    <li><a href="<?php echo base_url('/siap') ?>" class="text-decoration-none text-dark d-block p-2">IT Service Management</a></li>
                                    <li><a href="<?php echo base_url('/siap') ?>" class="text-decoration-none text-dark d-block p-2">IT Asset Management</a></li>
                                    <li><a href="<?php echo base_url('/siap') ?>" class="text-decoration-none text-dark d-block p-2">Property Management System</a></li>
                                    <li><a href="<?php echo base_url('/siap') ?>" class="text-decoration-none text-dark d-block p-2">RealPCR Test & System</a></li>
                                    <li><a href="<?php echo base_url('/siap') ?>" class="text-decoration-none text-dark d-block p-2">RealVioleds (UV Leds Solution)</a></li>
                                    <li><a href="<?php echo base_url('/siap') ?>" class="text-decoration-none text-dark d-block p-2">RealROSE (Ordering & Delivery System)</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="me-3"><a href="<?php echo base_url('/company') ?>" class="text-decoration-none text-dark">COMPANY</a></li>
                        <li class="me-3 position-relative"><a href="#" class="current text-decoration-none text-dark">SUPPORT</a>
                            <div class="dropdown d-flex position-absolute start-0 justify-content-between border border-1 p-3">
                                <ul class="list-inline me-5 text-nowrap">
                                    <li><a href="<?php echo base_url('/career') ?>" class="text-decoration-none text-dark d-block p-2">CAREER</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="me-3 position-relative"><a href="#" class="current text-decoration-none text-dark">RESOURCE</a>
                            <div class="dropdown d-flex position-absolute start-0 justify-content-between border border-1 p-3">
                                <ul class="list-inline me-5 text-nowrap">
                                    <li><a href="<?php echo base_url('/blog') ?>" class="text-decoration-none text-dark d-block p-2">BLOG</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class=""><a href="<?php echo base_url('/contact') ?>" class="contact-us py-2 px-3 text-decoration-none text-light rounded-pill" style="white-space: nowrap;">CONTACT US</a></li>
                    </ul>
                </div>
            </div>

            <div class="burger-icon__container">
                <div class="bar my-1"></div>
                <div class="bar my-1"></div>
                <div class="bar my-1"></div>
            </div>

            <div class="nav--mobile-menu position-fixed top-0">
                <div class="nav--mobile-menu__wrapper">
                    <div class="close position-relative">
                        <svg height="365.696pt" viewBox="0 0 365.696 365.696" xmlns="http://www.w3.org/2000/svg" class="position-absolute">
                            <path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0" />
                        </svg>
                    </div>
                    <div class="d-flex flex-column text-center mobile-links">
                        <a href="index.html" class="text-light text-decoration-none">Home</a>
                        <button href="solution.html" class="text-light text-decoration-none dropdown__wrapper" data-dropdown="false">
                            <span>Solutions</span>
                            <div class="dropdown-icon__wrapper">
                                <img src="assets/arrow-down-sign-to-navigate.png" alt="">
                            </div>
                        </button>
                        <div class="sublinks__wrapper">
                            <a href="<?php echo base_url('/siap') ?>" class="text-light text-decoration-none">ERP (Enterprise Resource Planning)</a>
                            <a href="<?php echo base_url('/siap') ?>" class="text-light text-decoration-none">EAM (Enterprise Asset Management)</a>
                            <a href="<?php echo base_url('/siap') ?>" class="text-light text-decoration-none">Golf Course Management System</a>
                            <a href="<?php echo base_url('/siap') ?>" class="text-light text-decoration-none">Human Resources Information System</a>
                            <a href="<?php echo base_url('/siap') ?>" class="text-light text-decoration-none">Hospitality Management System</a>
                            <a href="<?php echo base_url('/siap') ?>" class="text-light text-decoration-none">IT Service Management</a>
                            <a href="<?php echo base_url('/siap') ?>" class="text-light text-decoration-none">IT Asset Management</a>
                            <a href="<?php echo base_url('/siap') ?>" class="text-light text-decoration-none">Property Management System</a>
                            <a href="<?php echo base_url('/siap') ?>" class="text-light text-decoration-none">RealPCR Test & System</a>
                            <a href="<?php echo base_url('/siap') ?>" class="text-light text-decoration-none">RealVioleds (UV Leds Solution)</a>
                            <a href="<?php echo base_url('/siap') ?>" class="text-light text-decoration-none">RealROSE (Ordering & Delivery System)</a>
                        </div>
                        <a href="<?php echo base_url('/company') ?>" class="text-light text-decoration-none">Company</a>
                        <button href="solution.html" class="text-light text-decoration-none dropdown__wrapper" data-dropdown="false">
                            <span>Supports</span>
                            <div class="dropdown-icon__wrapper">
                                <img src="assets/arrow-down-sign-to-navigate.png" alt="">
                            </div>
                        </button>
                        <div class="sublinks__wrapper">
                            <a href="<?php echo base_url('/career') ?>" class="text-light text-decoration-none">Career</a>
                        </div>
                        <button href="solution.html" class="text-light text-decoration-none dropdown__wrapper" data-dropdown="false">
                            <span>Resources</span>
                            <div class="dropdown-icon__wrapper">
                                <img src="assets/arrow-down-sign-to-navigate.png" alt="">
                            </div>
                        </button>
                        <div class="sublinks__wrapper">
                            <a href="<?php echo base_url('/blog') ?>" class="text-light text-decoration-none">Blog</a>
                        </div>
                        <a href="<?php echo base_url('/contact') ?>" class="text-light text-decoration-none">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>

<script>
    let currentLocation = window.location.href
    if (currentLocation.includes(`${window.location.host}/blog/detail`)) {
        let newPath = '../../'

        let navbarLink = document.querySelector('.navbar-style').href = `${newPath}css/navbar.css`
        let logoSRC = document.querySelector('.nav--logo').src = `${newPath}assets/LOGO-Realta-with-since-1983.png`
    }

    // mobile menu animation
    let burger = document.querySelector('.burger-icon__container')
    let navMobileMenu = document.querySelector('.nav--mobile-menu')

    navMobileMenu.style.transform = `translateX(-${window.innerWidth}px)`
    navMobileMenu.style.opacity = '0'


    burger.addEventListener('click', () => {
        navMobileMenu.style.transform = 'translateX(0)'
        navMobileMenu.style.opacity = '1'

    })

    let close = document.querySelector('.close')
    close.addEventListener('click', () => {
        navMobileMenu.style.transform = `translateX(-${window.innerWidth}px)`
        navMobileMenu.style.opacity = '0'
    })
</script>