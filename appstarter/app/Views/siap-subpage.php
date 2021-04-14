<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SIAP+P</title>
    <link rel="stylesheet" href="css/siap.css">
</head>

<body>
    <!-- Include Navbar -->
    <?= $this->include('layout/component/navbar'); ?>
    <div class="container-fluid">
        <div class="w-75 m-auto">
            <div class="siap-banner d-flex flex-column alin-items-center justify-content-center text-center">
                <div class="logo d-flex justify-content-center">
                    <img src="assets/siapp.png" alt="">
                </div>
                <span>Human Resource Information System</span>
                <p>HRIS yang dapat membantu Anda menangani segala kebutuhan HRD <br> Menghitung Absensi, Payroll, BPJS, dan PPH 21 secara benar dan cepat</p>
                <div class="siap-banner__wrapper w-100 m-auto row d-flex justify-content-center">
                    <div class="siap-banner--rating d-flex justify-content-center col-md-6 col-lg-3 row me-2 mb-4">
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
                    </div>
                    <div class="siap-banner--rating  d-flex justify-content-center col-md-6 col-lg-3 row me-2 mb-4">
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
                    </div>
                    <div class="siap-banner--rating  d-flex justify-content-center col-md-6 col-lg-3 row me-2 mb-4">
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
                    </div>
                    <div class="siap-banner--rating  d-flex justify-content-center col-md-6 col-lg-3 row me-2 mb-4">
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
                    </div>
                </div>
            </div>
            <div class="siap-demo row d-flex justify-content-center align-items-center py-5">
                <div class="col-md-6 d-flex justify-content-center mb-4">
                    <img src="assets/product-overview-newest.png" alt="">
                </div>
                <div class="col-md-6">
                    <h2>HR Management System melalui ICT One Solution</h2>
                    <p>SIAP+P adalah Solusi HR lengkap untuk merampingkan setiap transaksi SDM seperti data karyawan, kehadiran, penggajian, hingga manajemen kinerja.</p>
                    <a href="#" class="btn btn--demo rounded-pill text-light px-4">REQUEST DEMO</a>
                </div>
            </div>
            <div class="testimonial text-center py-5">
                <h2>Aplikasi HRD <br>Terbaik di Indonesia</h2>
                <p>Menggunakan proses otomasi SIAP+p akan membantu departemen SDM uncuk secara efektif mengelola produktivitas orang dan mengurangi biaya perusahaan</p>

                <div class="testimonial--cards row">
                    <div class="testi-card col-lg-4">
                        <div class="header d-flex justify-content-center">
                            <img src="assets/Group 262.png">
                        </div>
                        <div class="body pb-3 px-3">
                            <h4>OPERASIONAL YANG EFEKTIF</h4>
                            <p>Serahkan pekerjaan Anda ke SIstem, SIAP+p meningkatkan produktifitas karyawan menggunkan aplikasi seluler</p>
                        </div>
                    </div>
                    <div class="testi-card col-lg-4">
                        <div class="header d-flex justify-content-center">
                            <img src="assets/Group 262.png">
                        </div>
                        <div class="body pb-3 px-3">
                            <h4>Adaptif Terhadap Peraturan</h4>
                            <p>SIAP+P memastikan sistem Anda mengikuti peraturan Pemerintah terbaru dengan pembaruan gratis</p>
                        </div>
                    </div>
                    <div class="testi-card col-lg-4">
                        <div class="header d-flex justify-content-center">
                            <img src="assets/Group 262.png">
                        </div>
                        <div class="body pb-3 px-3">
                            <h4>OPERASIONAL YANG EFEKTIF</h4>
                            <p>Serahkan pekerjaan Anda ke SIstem, SIAP+p meningkatkan produktifitas karyawan menggunkan aplikasi seluler</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="module ">
                <h2 class="text-center py-5">Mobile Attandance System</h2>
                <div class="row d-flex justify-content-center">
                    <div class="col-md-4 text-center row">
                        <div class="module--item col-md-12">
                            <div class="icon">
                                <img src="assets/Icon awesome-map-marker-alt.png" alt="">
                            </div>
                            <h4>Multi Location Attendance</h4>
                            <p class="text-justify">Tagging kehadiran pada Map yang aman, akurat, tidak ada kehadiran palsu, data kehadiran dapat diandalkan untuk pengukuran produktivitas yang tepat .</p>
                        </div>
                        <div class="module--item col-md-12">
                            <div class="icon">
                                <img src="assets/Icon ionic-ios-eye.png" alt="">
                            </div>
                            <h4>Multi Location Attendance</h4>
                            <p class="text-justify">Tagging kehadiran pada Map yang aman, akurat, tidak ada kehadiran palsu, data kehadiran dapat diandalkan untuk pengukuran produktivitas yang tepat .</p>
                        </div>
                    </div>
                    <div class="col-md-4 text-center row">
                        <div class="module--item col-md-12">
                            <img src="assets/Image 3.png" alt="">
                        </div>
                        <div class="module--item col-md-12">
                            <a href="#" class="btn btn-learn rounded-pill px-4 py-2 text-light my-4">LEARN MORE</a>
                        </div>
                    </div>
                    <div class="col-md-4 text-center row">
                        <div class="module--item col-md-12">
                            <div class="icon">
                                <img src="assets/Icon awesome-map-marker-alt.png" alt="">
                            </div>
                            <h4>Multi Location Attendance</h4>
                            <p class="text-justify">Tagging kehadiran pada Map yang aman, akurat, tidak ada kehadiran palsu, data kehadiran dapat diandalkan untuk pengukuran produktivitas yang tepat .</p>
                        </div>
                        <div class="module--item col-md-12">
                            <div class="icon">
                                <img src="assets/Icon ionic-ios-eye.png" alt="">
                            </div>
                            <h4>Multi Location Attendance</h4>
                            <p class="text-justify">Tagging kehadiran pada Map yang aman, akurat, tidak ada kehadiran palsu, data kehadiran dapat diandalkan untuk pengukuran produktivitas yang tepat .</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="feature">
                <h2 class="text-center">Features</h2>
                <div class="feature__wrapper row">
                    <div class="feature__wrapper--item col-lg-4 m-4">
                        <div class="logo"></div>
                        <div class="body p-5">
                            <h5 class="py-3">Attendance</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quasi, sequi optio impedit facilis, ullam eius delectus labore voluptatum ut saepe quam culpa deleniti laboriosam exercitationem. Eveniet numquam quia reprehenderit.</p>
                            <a href="#" class="btn btn-learn rounded-pill text-light">LEARN MORE</a>
                        </div>
                    </div>
                    <div class="feature__wrapper--item col-lg-4 m-4">
                        <div class="logo"></div>
                        <div class="body p-5">
                            <h5 class="py-3">Attendance</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quasi, sequi optio impedit facilis, ullam eius delectus labore voluptatum ut saepe quam culpa deleniti laboriosam exercitationem. Eveniet numquam quia reprehenderit.</p>
                            <a href="#" class="btn btn-learn rounded-pill text-light">LEARN MORE</a>
                        </div>
                    </div>
                    <div class="feature__wrapper--item col-lg-4 m-4">
                        <div class="logo"></div>
                        <div class="body p-5">
                            <h5 class="py-3">Attendance</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quasi, sequi optio impedit facilis, ullam eius delectus labore voluptatum ut saepe quam culpa deleniti laboriosam exercitationem. Eveniet numquam quia reprehenderit.</p>
                            <a href="#" class="btn btn-learn rounded-pill text-light">LEARN MORE</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="company">
                <div class="row">
                    <div class="col-md-12 row d-flex align-items-center">
                        <div class="col-md-6">
                            <h4>Yakult</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dignissimos culpa rem doloribus fugiat, sit vel minus labore commodi tempora?<br> <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolores ea omnis iusto cumque ipsam consequatur placeat necessitatibus provident laborum!
                            </p>
                        </div>
                        <div class="col-md-6">
                            <img src="assets/makesumo-doKatAORoIs-unsplash.png" alt="">
                        </div>
                    </div>
                    <div class="col-md-12 row d-flex align-items-center">
                        <div class="col-md-6">
                            <img src="assets/makesumo-doKatAORoIs-unsplash.png" alt="">
                        </div>
                        <div class="col-md-6">
                            <h4>Yakult</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dignissimos culpa rem doloribus fugiat, sit vel minus labore commodi tempora?<br> <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolores ea omnis iusto cumque ipsam consequatur placeat necessitatibus provident laborum!
                            </p>
                        </div>

                    </div>
                    <div class="col-md-12 row d-flex align-items-center">
                        <div class="col-md-6">
                            <h4>Yakult</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dignissimos culpa rem doloribus fugiat, sit vel minus labore commodi tempora?<br> <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolores ea omnis iusto cumque ipsam consequatur placeat necessitatibus provident laborum!
                            </p>
                        </div>
                        <div class="col-md-6">
                            <img src="assets/makesumo-doKatAORoIs-unsplash.png" alt="">
                        </div>
                    </div>
                </div>
            </div>


        </div>

        <div class="client">
            <h2 class="title text-center py-5">What Our Client Say</h2>
            <div class=" client__wrapper d-flex">
                <div class="client-card">
                    <div class="card-container">
                        <div class="header d-flex justify-content-center">
                            <img src="assets/WhatsApp Image 2020-12-03 at 3.25.35 PM.png" alt="">
                            <div class="white-bg"></div>
                        </div>
                        <div class="body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est dolor accusantium quasi molestiae maiores, eligendi neque quae minima nulla optio, nesciunt, quam autem aliquid vero quod? Nam, tenetur et!</p>
                            <span class="d-block w-100 text-center">NAME JOB TITLE</span>
                        </div>
                    </div>
                </div>
                <div class="client-card">
                    <div class="card-container">
                        <div class="header d-flex justify-content-center">
                            <img src="assets/WhatsApp Image 2020-12-03 at 3.25.35 PM.png" alt="">
                            <div class="white-bg"></div>
                        </div>
                        <div class="body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est dolor accusantium quasi molestiae maiores, eligendi neque quae minima nulla optio, nesciunt, quam autem aliquid vero quod? Nam, tenetur et!</p>
                            <span class="d-block w-100 text-center">NAME JOB TITLE</span>
                        </div>
                    </div>
                </div>
                <div class="client-card">
                    <div class="card-container">
                        <div class="header d-flex justify-content-center">
                            <img src="assets/WhatsApp Image 2020-12-03 at 3.25.35 PM.png" alt="">
                            <div class="white-bg"></div>
                        </div>
                        <div class="body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est dolor accusantium quasi molestiae maiores, eligendi neque quae minima nulla optio, nesciunt, quam autem aliquid vero quod? Nam, tenetur et!</p>
                            <span class="d-block w-100 text-center">NAME JOB TITLE</span>
                        </div>
                    </div>
                </div>
                <div class="client-card">
                    <div class="card-container">
                        <div class="header d-flex justify-content-center">
                            <img src="assets/WhatsApp Image 2020-12-03 at 3.25.35 PM.png" alt="">
                            <div class="white-bg"></div>
                        </div>
                        <div class="body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est dolor accusantium quasi molestiae maiores, eligendi neque quae minima nulla optio, nesciunt, quam autem aliquid vero quod? Nam, tenetur et!</p>
                            <span class="d-block w-100 text-center">NAME JOB TITLE</span>
                        </div>
                    </div>
                </div>
                <div class="client-card">
                    <div class="card-container">
                        <div class="header d-flex justify-content-center">
                            <img src="assets/WhatsApp Image 2020-12-03 at 3.25.35 PM.png" alt="">
                            <div class="white-bg"></div>
                        </div>
                        <div class="body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est dolor accusantium quasi molestiae maiores, eligendi neque quae minima nulla optio, nesciunt, quam autem aliquid vero quod? Nam, tenetur et!</p>
                            <span class="d-block w-100 text-center">NAME JOB TITLE</span>
                        </div>
                    </div>
                </div>
                <div class="client-card">
                    <div class="card-container">
                        <div class="header d-flex justify-content-center">
                            <img src="assets/WhatsApp Image 2020-12-03 at 3.25.35 PM.png" alt="">
                            <div class="white-bg"></div>
                        </div>
                        <div class="body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse est dolor accusantium quasi molestiae maiores, eligendi neque quae minima nulla optio, nesciunt, quam autem aliquid vero quod? Nam, tenetur et!</p>
                            <span class="d-block w-100 text-center">NAME JOB TITLE</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-75 m-auto">
            <div class="contact py-5">
                <h2 class="text-center py-5">Ready to Achieve Outstanding Performance?</h2>
                <div class="row d-flex align-items-center">
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-12 row mb-4">
                                <div class="col-md-6">Give us a Call</div>
                                <div class="col-md-6"><span class="rounded-pill purple text-light px-4 py-2">+62 21- 386 1772</span></div>
                            </div>
                            <div class="col-md-12 row">
                                <div class="col-md-6">Request Demo</div>
                                <div class="col-md-6"><span class="rounded-pill purple text-light px-4 py-2">CONTACT US</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <!-- Video -->
                    </div>
                </div>
            </div>
        </div>
        <!-- Include Footer -->
        <?= $this->include('layout/component/footer'); ?>
    </div>
</body>

</html>

<script src="js/siap.js"></script>