<!-- Adding Navbar -->
<link rel="stylesheet" href="css/navbar.css" class="navbar-style">

<nav>
    <!-- This is Navbar area -->
    <div class="nav py-3 m-auto">
        <div class="container">
            <div class="d-flex align-items-center justify-content-between">
                <a href="<?php echo base_url('/') ?>"><img src="assets/LOGO-Realta-with-since-1983.png" class="nav--logo"></a>
                <div class="nav--links">
                    <ul class="list-inline d-flex">
                        <li class="me-3 position-relative"><a href="<?php echo base_url('/solution') ?>" class="current text-decoration-none text-dark">SOLUTIONS</a>
                            <div class="dropdown d-flex position-absolute start-0 justify-content-between border border-1 p-3">
                                <ul class="list-inline me-5 text-nowrap">
                                    <li><a href="<?php echo base_url('/siap') ?>" class="text-decoration-none text-dark d-block p-2">HR Information System</a></li>
                                    <li><a href="#" class="text-decoration-none text-dark d-block p-2">Property Management System</a></li>
                                    <li><a href="#" class="text-decoration-none text-dark d-block p-2">Hospitality Management System</a></li>
                                    <li><a href="#" class="text-decoration-none text-dark d-block p-2">Golf Course Management Syste,</a></li>
                                    <li><a href="#" class="text-decoration-none text-dark d-block p-2">Procurement System</a></li>
                                </ul>
                                <ul class="list-inline me-5 text-nowrap">
                                    <li><a href="#" class="text-decoration-none text-dark d-block p-2">HR Information System</a></li>
                                    <li><a href="#" class="text-decoration-none text-dark d-block p-2">Property Management System</a></li>
                                    <li><a href="#" class="text-decoration-none text-dark d-block p-2">Hospitality Management System</a></li>
                                    <li><a href="#" class="text-decoration-none text-dark d-block p-2">Golf Course Management Syste,</a></li>
                                    <li><a href="#" class="text-decoration-none text-dark d-block p-2">Procurement System</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="me-3"><a href="#" class="text-decoration-none text-dark">COMPANY</a></li>
                        <li class="me-3"><a href="<?php echo base_url('/career') ?>" class="text-decoration-none text-dark">SUPPORT</a></li>
                        <li class="me-3"><a href="<?php echo base_url('/blog') ?>" class="text-decoration-none text-dark">RESOURCES</a></li>
                        <li class=""><a href="#" class="contact-us py-2 px-3 text-decoration-none text-light rounded-pill">CONTACT US</a></li>
                    </ul>
                </div>
            </div>

            <label for="switch" class="nav--switch d-flex justify-content-between ms-auto my-2">
                <button class="ina-lang active w-100 h-25 d-flex align-items-center justify-content-center btn btn-sm">INA</button>
                <button class="ina-lang w-100 h-25 d-flex align-items-center justify-content-center btn btn-sm">EN</button>
            </label>
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
</script>