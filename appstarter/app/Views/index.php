<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Realta | Homepage</title>
    <link rel="stylesheet" href="css/homepage.css">
    <!-- Load Component Statically -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous"></script>
</head>

<body>
    <div class="super">
        <div id="preload-container">
            <!-- Include Preloader -->
            <?= $this->include('layout/component/preloading'); ?>
        </div>

        <div class="super__container">
            <!-- Include Navbar -->
            <?= $this->include('layout/component/navbar'); ?>
            <!-- <div id="navbar--placeholder"></div> -->

            <div class="container-fluid">
                <div class="product pt-2">
                    <div class="pb-5 left-product position-relative">
                        <div class="product__wrapper">
                            <div class="product__wrapper__context">
                                <img src="" class="product--logo">
                                <h1 class="product--title product--item"></h1>
                                <p class="product--desc product--item text-justify py-3"></p>
                                <div class="product--rating py-3 d-flex">
                                    <img src="assets/rating 35yrs.png" alt="" class="rating--item">
                                    <img src="assets/rating iso.png" alt="" class="rating--item">
                                </div>
                                <a href="" class="btn btn--learn-more rounded-pill text-light px-5 py-2 book-text">LEARN MORE</a>
                                <div class="slidebar  py-3 ">
                                    <div class="slidebar__wrapper d-flex align-items-center">
                                        <div class="colorbar me-2">
                                            <div class="colorbar__wrapper d-flex"></div>
                                        </div>
                                        <div class="slidebar--arrow d-flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20.855" height="20.327" viewBox="0 0 20.855 20.327" class="arrow arrow-left mx-1" data-value="0">
                                                <path id="Icon_awesome-arrow-left" data-name="Icon awesome-arrow-left" d="M11.985,21.613l-1.033,1.033a1.113,1.113,0,0,1-1.578,0L.325,13.6a1.113,1.113,0,0,1,0-1.578L9.373,2.975a1.113,1.113,0,0,1,1.578,0l1.033,1.033a1.118,1.118,0,0,1-.019,1.6L6.357,10.949H19.735a1.114,1.114,0,0,1,1.117,1.117v1.489a1.114,1.114,0,0,1-1.117,1.117H6.357l5.609,5.344A1.11,1.11,0,0,1,11.985,21.613Z" transform="translate(0.004 -2.647)" fill="#bdc3ca" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20.855" height="20.327" viewBox="0 0 20.855 20.327" class="arrow arrow-right mx-1" data-value="1">
                                                <path id="Icon_awesome-arrow-right" data-name="Icon awesome-arrow-right" d="M8.867,4.009,9.9,2.975a1.113,1.113,0,0,1,1.578,0l9.049,9.044a1.113,1.113,0,0,1,0,1.578l-9.049,9.049a1.113,1.113,0,0,1-1.578,0L8.867,21.613a1.118,1.118,0,0,1,.019-1.6l5.609-5.344H1.117A1.114,1.114,0,0,1,0,13.555V12.066a1.114,1.114,0,0,1,1.117-1.117H14.495L8.886,5.605A1.11,1.11,0,0,1,8.867,4.009Z" transform="translate(0 -2.647)" fill="#bdc3ca" />
                                            </svg>

                                        </div>
                                    </div>
                                    <span>Solutions <span class="currentSlideNumber"></span>/<span class="totalSlideNumber"></span> </span>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div class=" right-product position-relative">
                        <img src="" class="phone-img">
                    </div>
                </div>

                <div class="client">
                    <h2 class="text-center book-text py-5">We build solutions <br>that these companies run</h2>
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
                    <h2 class="text-center book-text">You can customize a solution<br> based on your industry</h2>
                    <div class="module__wrapper"></div>
                </div>

                <div class="feature">
                    <h2 class="feature--title text-center book-text py-5">How Can We Help?</h2>
                    <div class="feature__wrapper row d-flex position-relative">
                        <div class="col-lg-6 position-relative feature__wrapper--cards left-feature"></div>
                        <div class="col-lg-6 position-relative right-feature">
                            <img src="assets/Group 18.png" class="phone-img">
                        </div>
                    </div>
                </div>

                <div class="promo d-flex">
                    <div class="promo__desc">
                        <h2 class="book-text">Integrate Seamlessly</h2>
                        <p class="py-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo animi nam distinctio alias, totam nobis amet molestiae. Placeat similique, ratione labore perspiciatis inventore distinctio non, vel corrupti, ad magnam nihil porro perferendis culpa numquam reprehenderit doloremque quisquam cum laudantium. Ea.</p>
                        <iframe class="promo-youtube" src="https://www.youtube.com/embed/Q7kzoNEC4QU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="promo--right d-flex">
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                    </div>

                </div>

                <div class="about container">
                    <h2 class="text-center py-5 book-text">Realta delivers "Peace of Mind" <br>to all our clients through ICT ONE Solutions</h2>
                    <div class="about__wrapper row flex-md-row m-auto h-100  no-gutters">
                        <div class="col-lg-6 p-3 my-auto">
                            <h4>ICT ONE Solutions</h4>
                            <p class="py-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam suscipit vitae ex porro assumenda quidem facilis, praesentium velit culpa exercitationem.</p>
                            <a href="#" class="btn rounded-pill border border-dark">ABOUT US</a>
                        </div>
                        <div class="col-lg-6">
                            <img src="" class="w-100 h-100">
                        </div>
                    </div>
                </div>

                <div class="contact-us-form"></div>
            </div>

            <!-- Include Footer -->
            <?= $this->include('layout/component/footer'); ?>
            <!-- <div id="footer--placeholder"></div> -->
        </div>
    </div>


</body>

</html>
<script src=" ./js/jquery.js"></script>
<script src=" ./js/homepage.js"></script>

<!-- Add Preloader -->
<script src="js/preloader.js"></script>