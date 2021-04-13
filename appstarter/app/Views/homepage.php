<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/homepage.css">
    <!-- Fetch Homepage API -->
    <!-- <script src="./js/homepageAPI.js"></script> -->
</head>

<body>
    <!-- Include Navbar -->
    <?= $this->include('layout/component/navbar'); ?>

    <div class="container-fluid">
        <div class="product row position-relative pt-5  ">
            <div class="col-md-6 pb-5 position-relative">
                <div class="product--text-bg"></div>
                <div class="product__wrapper position-relative ps-5 w-75 m-auto">
                    <img src="" class="product--logo ">
                    <h1 class="product--title"></h1>
                    <p class="product--desc py-4 text-justify"></p>
                    <div class="product--rating row mb-4">
                        <div class="rate__wrapper shadow  d-flex justify-content-center p-3 m-3 col-md-5 rounded-2 align-items-center">
                            <div class="rate__wrapper--left me-3">
                                <div class="stars mb-2 d-flex justify-content-between">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19.097" height="18.278" viewBox="0 0 19.097 18.278" class="me-1">
                                        <defs>
                                            <style>
                                                .a {
                                                    fill: url(#a);
                                                }
                                            </style>
                                            <linearGradient id="a" x1="0.5" x2="0.801" y2="1" gradientUnits="objectBoundingBox">
                                                <stop offset="0" stop-color="#fa0" />
                                                <stop offset="0.258" stop-color="#fcb700" />
                                                <stop offset="0.422" stop-color="#ffc300" />
                                                <stop offset="0.663" stop-color="#ffb218" />
                                                <stop offset="1" stop-color="#ff9800" />
                                            </linearGradient>
                                        </defs>
                                        <path class="a" d="M9.965.635,7.634,5.361l-5.215.76A1.143,1.143,0,0,0,1.788,8.07l3.773,3.677L4.668,16.94a1.142,1.142,0,0,0,1.656,1.2l4.665-2.452,4.665,2.452a1.142,1.142,0,0,0,1.656-1.2l-.892-5.194L20.192,8.07a1.143,1.143,0,0,0-.632-1.949l-5.215-.76L12.014.635a1.143,1.143,0,0,0-2.049,0Z" transform="translate(-1.441 0.001)" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19.097" height="18.278" viewBox="0 0 19.097 18.278" class="me-1">
                                        <defs>
                                            <style>
                                                .a {
                                                    fill: url(#a);
                                                }
                                            </style>
                                            <linearGradient id="a" x1="0.5" x2="0.801" y2="1" gradientUnits="objectBoundingBox">
                                                <stop offset="0" stop-color="#fa0" />
                                                <stop offset="0.258" stop-color="#fcb700" />
                                                <stop offset="0.422" stop-color="#ffc300" />
                                                <stop offset="0.663" stop-color="#ffb218" />
                                                <stop offset="1" stop-color="#ff9800" />
                                            </linearGradient>
                                        </defs>
                                        <path class="a" d="M9.965.635,7.634,5.361l-5.215.76A1.143,1.143,0,0,0,1.788,8.07l3.773,3.677L4.668,16.94a1.142,1.142,0,0,0,1.656,1.2l4.665-2.452,4.665,2.452a1.142,1.142,0,0,0,1.656-1.2l-.892-5.194L20.192,8.07a1.143,1.143,0,0,0-.632-1.949l-5.215-.76L12.014.635a1.143,1.143,0,0,0-2.049,0Z" transform="translate(-1.441 0.001)" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19.097" height="18.278" viewBox="0 0 19.097 18.278" class="me-1">
                                        <defs>
                                            <style>
                                                .a {
                                                    fill: url(#a);
                                                }
                                            </style>
                                            <linearGradient id="a" x1="0.5" x2="0.801" y2="1" gradientUnits="objectBoundingBox">
                                                <stop offset="0" stop-color="#fa0" />
                                                <stop offset="0.258" stop-color="#fcb700" />
                                                <stop offset="0.422" stop-color="#ffc300" />
                                                <stop offset="0.663" stop-color="#ffb218" />
                                                <stop offset="1" stop-color="#ff9800" />
                                            </linearGradient>
                                        </defs>
                                        <path class="a" d="M9.965.635,7.634,5.361l-5.215.76A1.143,1.143,0,0,0,1.788,8.07l3.773,3.677L4.668,16.94a1.142,1.142,0,0,0,1.656,1.2l4.665-2.452,4.665,2.452a1.142,1.142,0,0,0,1.656-1.2l-.892-5.194L20.192,8.07a1.143,1.143,0,0,0-.632-1.949l-5.215-.76L12.014.635a1.143,1.143,0,0,0-2.049,0Z" transform="translate(-1.441 0.001)" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19.097" height="18.278" viewBox="0 0 19.097 18.278" class="me-1">
                                        <defs>
                                            <style>
                                                .a {
                                                    fill: url(#a);
                                                }
                                            </style>
                                            <linearGradient id="a" x1="0.5" x2="0.801" y2="1" gradientUnits="objectBoundingBox">
                                                <stop offset="0" stop-color="#fa0" />
                                                <stop offset="0.258" stop-color="#fcb700" />
                                                <stop offset="0.422" stop-color="#ffc300" />
                                                <stop offset="0.663" stop-color="#ffb218" />
                                                <stop offset="1" stop-color="#ff9800" />
                                            </linearGradient>
                                        </defs>
                                        <path class="a" d="M9.965.635,7.634,5.361l-5.215.76A1.143,1.143,0,0,0,1.788,8.07l3.773,3.677L4.668,16.94a1.142,1.142,0,0,0,1.656,1.2l4.665-2.452,4.665,2.452a1.142,1.142,0,0,0,1.656-1.2l-.892-5.194L20.192,8.07a1.143,1.143,0,0,0-.632-1.949l-5.215-.76L12.014.635a1.143,1.143,0,0,0-2.049,0Z" transform="translate(-1.441 0.001)" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19.097" height="18.278" viewBox="0 0 19.097 18.278" class="me-1">
                                        <defs>
                                            <style>
                                                .a {
                                                    fill: url(#a);
                                                }
                                            </style>
                                            <linearGradient id="a" x1="0.5" x2="0.801" y2="1" gradientUnits="objectBoundingBox">
                                                <stop offset="0" stop-color="#fa0" />
                                                <stop offset="0.258" stop-color="#fcb700" />
                                                <stop offset="0.422" stop-color="#ffc300" />
                                                <stop offset="0.663" stop-color="#ffb218" />
                                                <stop offset="1" stop-color="#ff9800" />
                                            </linearGradient>
                                        </defs>
                                        <path class="a" d="M9.965.635,7.634,5.361l-5.215.76A1.143,1.143,0,0,0,1.788,8.07l3.773,3.677L4.668,16.94a1.142,1.142,0,0,0,1.656,1.2l4.665-2.452,4.665,2.452a1.142,1.142,0,0,0,1.656-1.2l-.892-5.194L20.192,8.07a1.143,1.143,0,0,0-.632-1.949l-5.215-.76L12.014.635a1.143,1.143,0,0,0-2.049,0Z" transform="translate(-1.441 0.001)" />
                                    </svg>
                                </div>
                                <span class="stars-text text-justify">Experience more than</span>
                            </div>
                            <div class="rate__wrapper--right text-center ">
                                <span>35<br>year</span>
                            </div>

                        </div>
                        <div class="rate__wrapper shadow  d-flex justify-content-center p-3 m-3 col-md-5 rounded-2 align-items-center">
                            <div class="rate__wrapper--left me-3">
                                <div class="stars mb-2 d-flex justify-content-between">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19.097" height="18.278" viewBox="0 0 19.097 18.278" class="me-1">
                                        <defs>
                                            <style>
                                                .a {
                                                    fill: url(#a);
                                                }
                                            </style>
                                            <linearGradient id="a" x1="0.5" x2="0.801" y2="1" gradientUnits="objectBoundingBox">
                                                <stop offset="0" stop-color="#fa0" />
                                                <stop offset="0.258" stop-color="#fcb700" />
                                                <stop offset="0.422" stop-color="#ffc300" />
                                                <stop offset="0.663" stop-color="#ffb218" />
                                                <stop offset="1" stop-color="#ff9800" />
                                            </linearGradient>
                                        </defs>
                                        <path class="a" d="M9.965.635,7.634,5.361l-5.215.76A1.143,1.143,0,0,0,1.788,8.07l3.773,3.677L4.668,16.94a1.142,1.142,0,0,0,1.656,1.2l4.665-2.452,4.665,2.452a1.142,1.142,0,0,0,1.656-1.2l-.892-5.194L20.192,8.07a1.143,1.143,0,0,0-.632-1.949l-5.215-.76L12.014.635a1.143,1.143,0,0,0-2.049,0Z" transform="translate(-1.441 0.001)" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19.097" height="18.278" viewBox="0 0 19.097 18.278" class="me-1">
                                        <defs>
                                            <style>
                                                .a {
                                                    fill: url(#a);
                                                }
                                            </style>
                                            <linearGradient id="a" x1="0.5" x2="0.801" y2="1" gradientUnits="objectBoundingBox">
                                                <stop offset="0" stop-color="#fa0" />
                                                <stop offset="0.258" stop-color="#fcb700" />
                                                <stop offset="0.422" stop-color="#ffc300" />
                                                <stop offset="0.663" stop-color="#ffb218" />
                                                <stop offset="1" stop-color="#ff9800" />
                                            </linearGradient>
                                        </defs>
                                        <path class="a" d="M9.965.635,7.634,5.361l-5.215.76A1.143,1.143,0,0,0,1.788,8.07l3.773,3.677L4.668,16.94a1.142,1.142,0,0,0,1.656,1.2l4.665-2.452,4.665,2.452a1.142,1.142,0,0,0,1.656-1.2l-.892-5.194L20.192,8.07a1.143,1.143,0,0,0-.632-1.949l-5.215-.76L12.014.635a1.143,1.143,0,0,0-2.049,0Z" transform="translate(-1.441 0.001)" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19.097" height="18.278" viewBox="0 0 19.097 18.278" class="me-1">
                                        <defs>
                                            <style>
                                                .a {
                                                    fill: url(#a);
                                                }
                                            </style>
                                            <linearGradient id="a" x1="0.5" x2="0.801" y2="1" gradientUnits="objectBoundingBox">
                                                <stop offset="0" stop-color="#fa0" />
                                                <stop offset="0.258" stop-color="#fcb700" />
                                                <stop offset="0.422" stop-color="#ffc300" />
                                                <stop offset="0.663" stop-color="#ffb218" />
                                                <stop offset="1" stop-color="#ff9800" />
                                            </linearGradient>
                                        </defs>
                                        <path class="a" d="M9.965.635,7.634,5.361l-5.215.76A1.143,1.143,0,0,0,1.788,8.07l3.773,3.677L4.668,16.94a1.142,1.142,0,0,0,1.656,1.2l4.665-2.452,4.665,2.452a1.142,1.142,0,0,0,1.656-1.2l-.892-5.194L20.192,8.07a1.143,1.143,0,0,0-.632-1.949l-5.215-.76L12.014.635a1.143,1.143,0,0,0-2.049,0Z" transform="translate(-1.441 0.001)" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19.097" height="18.278" viewBox="0 0 19.097 18.278" class="me-1">
                                        <defs>
                                            <style>
                                                .a {
                                                    fill: url(#a);
                                                }
                                            </style>
                                            <linearGradient id="a" x1="0.5" x2="0.801" y2="1" gradientUnits="objectBoundingBox">
                                                <stop offset="0" stop-color="#fa0" />
                                                <stop offset="0.258" stop-color="#fcb700" />
                                                <stop offset="0.422" stop-color="#ffc300" />
                                                <stop offset="0.663" stop-color="#ffb218" />
                                                <stop offset="1" stop-color="#ff9800" />
                                            </linearGradient>
                                        </defs>
                                        <path class="a" d="M9.965.635,7.634,5.361l-5.215.76A1.143,1.143,0,0,0,1.788,8.07l3.773,3.677L4.668,16.94a1.142,1.142,0,0,0,1.656,1.2l4.665-2.452,4.665,2.452a1.142,1.142,0,0,0,1.656-1.2l-.892-5.194L20.192,8.07a1.143,1.143,0,0,0-.632-1.949l-5.215-.76L12.014.635a1.143,1.143,0,0,0-2.049,0Z" transform="translate(-1.441 0.001)" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19.097" height="18.278" viewBox="0 0 19.097 18.278" class="me-1">
                                        <defs>
                                            <style>
                                                .a {
                                                    fill: url(#a);
                                                }
                                            </style>
                                            <linearGradient id="a" x1="0.5" x2="0.801" y2="1" gradientUnits="objectBoundingBox">
                                                <stop offset="0" stop-color="#fa0" />
                                                <stop offset="0.258" stop-color="#fcb700" />
                                                <stop offset="0.422" stop-color="#ffc300" />
                                                <stop offset="0.663" stop-color="#ffb218" />
                                                <stop offset="1" stop-color="#ff9800" />
                                            </linearGradient>
                                        </defs>
                                        <path class="a" d="M9.965.635,7.634,5.361l-5.215.76A1.143,1.143,0,0,0,1.788,8.07l3.773,3.677L4.668,16.94a1.142,1.142,0,0,0,1.656,1.2l4.665-2.452,4.665,2.452a1.142,1.142,0,0,0,1.656-1.2l-.892-5.194L20.192,8.07a1.143,1.143,0,0,0-.632-1.949l-5.215-.76L12.014.635a1.143,1.143,0,0,0-2.049,0Z" transform="translate(-1.441 0.001)" />
                                    </svg>
                                </div>
                                <span class="stars-text text-justify">ISO Certified 9001 2015</span>
                            </div>
                            <div class="rate__wrapper--right text-center ">
                                <img src="assets/LOGO ISO.png">
                            </div>

                        </div>
                    </div>
                    <a href="" class="btn btn--learn-more rounded-pill text-light px-5 py-2">LEARN MORE</a>
                </div>
            </div>
            <div class="col-md-6 position-relative">
                <img src="" class="phone-img">
                <img src="assets/mobile-slider-bg.png" class="bg">
            </div>
            <div class="slidebar w-75 m-auto py-3">
                <div class="slidebar--arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20.855" height="20.327" viewBox="0 0 20.855 20.327" class="arrow arrow-left" data-value="0">
                        <path id="Icon_awesome-arrow-left" data-name="Icon awesome-arrow-left" d="M11.985,21.613l-1.033,1.033a1.113,1.113,0,0,1-1.578,0L.325,13.6a1.113,1.113,0,0,1,0-1.578L9.373,2.975a1.113,1.113,0,0,1,1.578,0l1.033,1.033a1.118,1.118,0,0,1-.019,1.6L6.357,10.949H19.735a1.114,1.114,0,0,1,1.117,1.117v1.489a1.114,1.114,0,0,1-1.117,1.117H6.357l5.609,5.344A1.11,1.11,0,0,1,11.985,21.613Z" transform="translate(0.004 -2.647)" fill="#bdc3ca" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20.855" height="20.327" viewBox="0 0 20.855 20.327" class="arrow arrow-right" data-value="1">
                        <path id="Icon_awesome-arrow-right" data-name="Icon awesome-arrow-right" d="M8.867,4.009,9.9,2.975a1.113,1.113,0,0,1,1.578,0l9.049,9.044a1.113,1.113,0,0,1,0,1.578l-9.049,9.049a1.113,1.113,0,0,1-1.578,0L8.867,21.613a1.118,1.118,0,0,1,.019-1.6l5.609-5.344H1.117A1.114,1.114,0,0,1,0,13.555V12.066a1.114,1.114,0,0,1,1.117-1.117H14.495L8.886,5.605A1.11,1.11,0,0,1,8.867,4.009Z" transform="translate(0 -2.647)" fill="#bdc3ca" />
                    </svg>

                </div>
            </div>
        </div>

        <div class="client pb-5">
            <h2 class="text-center py-5">We build solutions <br>that these companies run</h2>
            <div class="client__wrapper  d-flex">
                <div class="client__item">
                    <img src="assets/sera-logo.png" class="p-3 mb-3">
                    <img src="assets/wyeth-logo.png" class="p-3">
                </div>
                <div class="client__item">
                    <img src="assets/bca-logo.png" class="p-3 mb-3">
                    <img src="assets/astra-logo.png" class="p-3">
                </div>
                <div class="client__item">
                    <img src="assets/btn-logo.png" class="p-3 mb-3">
                    <img src="assets/kpc-logo.png" class="p-3">
                </div>
                <div class="client__item">
                    <img src="assets/indofood-logo.png" class="p-3 mb-3">
                    <img src="assets/mazda-logo.png" class="p-3">
                </div>
                <div class="client__item">
                    <img src="assets/kalbe-logo.png" class="p-3 mb-3">
                    <img src="assets/summarecon-logo.png" class="p-3">
                </div>
                <div class="client__item">
                    <img src="assets/yamaha-logo.png" class="p-3 mb-3">
                    <img src="assets/sampoerna-logo.png" class="p-3">
                </div>
            </div>

        </div>

        <div class="module">
            <h2 class="text-center mb-5">You can customize a solution <br> based on your industry</h2>
            <div class="module__wrapper">
                <div class="module__wrapper--item mx-4">
                    <div class="header p-3" style="background-color: darkblue;">
                        <h4>Property</h4>
                    </div>
                    <div class="body p-3" style="background-color: blue;">
                        <ul class="list-group mb-4">
                            <li class="list-inline">Inventory control</li>
                            <li class="list-inline">Cost Control</li>
                            <li class="list-inline">Finance & Accounting</li>
                            <li class="list-inline">Logistic</li>
                            <li class="list-inline">Tenant Complaint</li>
                            <li class="list-inline">Multi Currency</li>
                            <li class="list-inline">Multi Payment Term</li>
                            <li class="list-inline">Automatic Billing Process</li>
                            <li class="list-inline">Renewal Reminder</li>
                        </ul>
                        <a href="#" class="footer">Learn More</a>
                    </div>
                </div>
                <div class="module__wrapper--item mx-4">
                    <div class="header p-3" style="background-color: darkblue;">
                        <h4>Property</h4>
                    </div>
                    <div class="body p-3" style="background-color: blue;">
                        <ul class="list-group mb-4">
                            <li class="list-inline">Inventory control</li>
                            <li class="list-inline">Cost Control</li>
                            <li class="list-inline">Finance & Accounting</li>
                            <li class="list-inline">Logistic</li>
                            <li class="list-inline">Tenant Complaint</li>
                            <li class="list-inline">Multi Currency</li>
                            <li class="list-inline">Multi Payment Term</li>
                            <li class="list-inline">Automatic Billing Process</li>
                            <li class="list-inline">Renewal Reminder</li>
                        </ul>
                        <a href="#" class="footer">Learn More</a>
                    </div>
                </div>
                <div class="module__wrapper--item mx-4">
                    <div class="header p-3" style="background-color: darkblue;">
                        <h4>Property</h4>
                    </div>
                    <div class="body p-3" style="background-color: blue;">
                        <ul class="list-group mb-4">
                            <li class="list-inline">Inventory control</li>
                            <li class="list-inline">Cost Control</li>
                            <li class="list-inline">Finance & Accounting</li>
                            <li class="list-inline">Logistic</li>
                            <li class="list-inline">Tenant Complaint</li>
                            <li class="list-inline">Multi Currency</li>
                            <li class="list-inline">Multi Payment Term</li>
                            <li class="list-inline">Automatic Billing Process</li>
                            <li class="list-inline">Renewal Reminder</li>
                        </ul>
                        <a href="#" class="footer">Learn More</a>
                    </div>
                </div>
                <div class="module__wrapper--item mx-4">
                    <div class="header p-3" style="background-color: darkblue;">
                        <h4>Property</h4>
                    </div>
                    <div class="body p-3" style="background-color: blue;">
                        <ul class="list-group mb-4">
                            <li class="list-inline">Inventory control</li>
                            <li class="list-inline">Cost Control</li>
                            <li class="list-inline">Finance & Accounting</li>
                            <li class="list-inline">Logistic</li>
                            <li class="list-inline">Tenant Complaint</li>
                            <li class="list-inline">Multi Currency</li>
                            <li class="list-inline">Multi Payment Term</li>
                            <li class="list-inline">Automatic Billing Process</li>
                            <li class="list-inline">Renewal Reminder</li>
                        </ul>
                        <a href="#" class="footer">Learn More</a>
                    </div>
                </div>
                <div class="module__wrapper--item mx-4">
                    <div class="header p-3" style="background-color: darkblue;">
                        <h4>Property</h4>
                    </div>
                    <div class="body p-3" style="background-color: blue;">
                        <ul class="list-group mb-4">
                            <li class="list-inline">Inventory control</li>
                            <li class="list-inline">Cost Control</li>
                            <li class="list-inline">Finance & Accounting</li>
                            <li class="list-inline">Logistic</li>
                            <li class="list-inline">Tenant Complaint</li>
                            <li class="list-inline">Multi Currency</li>
                            <li class="list-inline">Multi Payment Term</li>
                            <li class="list-inline">Automatic Billing Process</li>
                            <li class="list-inline">Renewal Reminder</li>
                        </ul>
                        <a href="#" class="footer">Learn More</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="feature">
            <h2 class="feature--title text-center">How Can We Help?</h2>
            <div class="feature__wrapper row d-flex align-items-center">
                <div class="col-md-6 m-auto position-relative">
                    <div class="feature--card p-3 mb-3">
                        <div class="header d-flex align-items-center pb-3">
                            <img src="assets/cloud-system.png" class="me-2">
                            <h4>Title 1</h4>
                        </div>
                        <div class="body text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsa totam quasi repellendus ipsam eius error placeat ut veritatis. Voluptatibus voluptatum porro aspernatur impedit, quibusdam ut ratione officiis iure dolorem eligendi labore sapiente. Deleniti laborum necessitatibus consequuntur autem cupiditate sit.
                        </div>
                    </div>

                    <div class="feature--card p-3 mb-3">
                        <div class="header d-flex align-items-center pb-3">
                            <img src="assets/cloud-system.png" class="me-2">
                            <h4>Title 2</h4>
                        </div>
                        <div class="body text-justify"></div>
                    </div>

                    <div class="feature--card p-3 mb-3">
                        <div class="header d-flex align-items-center pb-3">
                            <img src="assets/cloud-system.png" class="me-2">
                            <h4>Title 3</h4>
                        </div>
                        <div class="body text-justify"></div>
                    </div>

                    <div class="feature--card p-3 mb-3">
                        <div class="header d-flex align-items-center pb-3">
                            <img src="assets/cloud-system.png" class="me-2">
                            <h4>Title 4</h4>
                        </div>
                        <div class="body text-justify"></div>
                    </div>

                    <div class="feature--card p-3 mb-3">
                        <div class="header d-flex align-items-center pb-3">
                            <img src="assets/cloud-system.png" class="me-2">
                            <h4>Title 5</h4>
                        </div>
                        <div class="body text-justify"></div>
                    </div>
                </div>
                <div class="col-md-6 position-relative">
                    <img src="assets/mobile-variation-bg.png" class="bg">
                    <img src="assets/Group 18.png" class="phone-img">
                </div>
            </div>
        </div>

        <div class="promo row">
            <div class="col-md-6">
                <h2>Integrate Seamlessly</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo animi nam distinctio alias, totam nobis amet molestiae. Placeat similique, ratione labore perspiciatis inventore distinctio non, vel corrupti, ad magnam nihil porro perferendis culpa numquam reprehenderit doloremque quisquam cum laudantium. Ea.</p>
                <video width="320" height="240" autoplay>
                    <source src="#">
                </video>
            </div>
            <div class="col-md-6">
                <!-- Empty -->
            </div>

        </div>

        <div class="about container">
            <h2 class="text-center">Realta delivers "Peace of Mind" <br>to all our clients through ICT ONE Solutions</h2>
            <div class="about__wrapper row flex-md-row m-auto h-100  no-gutters">
                <div class="col-lg-6 p-3 my-auto">
                    <h4>ICT ONE Solutions</h4>
                    <p class="py-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam suscipit vitae ex porro assumenda quidem facilis, praesentium velit culpa exercitationem.</p>
                    <a href="#" class="btn rounded-pill border border-dark">ABOUT US</a>
                </div>
                <div class="col-lg-6">
                    <img src="assets/entitas-privat.png" class="w-100 h-100">
                </div>
            </div>
        </div>

        <div class="contact-us container">
            <div class="contact-us row">
                <div class="col-lg-6 p-5">
                    <h2>What Are You Waiting for ? Just Make It Happen!</h2>
                    <p class="w-75">We'll have a Business Development Representative contact you within 24 business hours</p>
                    <div class="achievement d-flex ">
                        <div class="achievement--item d-flex justify-content-center mb-3 me-3">
                            <img src="assets/awards-item-left.png" alt="">
                            <span class="text-center">FAST <br> Moving <br> Company <br> 2019</span>
                            <img src="assets/awards-item-right.png" alt="">
                        </div>
                        <div class="achievement--item d-flex justify-content-center mb-3 mx-3">
                            <img src="assets/awards-item-left.png" alt="">
                            <span class="text-center">FAST <br> Moving <br> Company <br> 2019</span>
                            <img src="assets/awards-item-right.png" alt="">
                        </div>
                        <div class="achievement--item d-flex justify-content-center mb-3 mx-3">
                            <img src="assets/awards-item-left.png" alt="">
                            <span class="text-center">FAST <br> Moving <br> Company <br> 2019</span>
                            <img src="assets/awards-item-right.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="contact-us__form">
                        <?= $this->include('layout/component/form'); ?>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <!-- Include Footer -->
    <?= $this->include('layout/component/footer'); ?>
</body>

</html>
<script src=" ./js/homepage.js"></script>
<!-- <script src="./js/testingAPI.js"></script> -->