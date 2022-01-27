<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Career</title>
    <link rel="stylesheet" href="css/career.css">
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
            <div class="container-fluid">
                <div class="career__container">
                    <h2 class="book-text">Career <br> Realta Chakradarma</h2>
                    <form action="">
                        <div class="row career--header pt-4" style="margin-left: 0 !important; margin-right: 0 !important;">
                            <div class="col-lg-3 mb-3" style="margin-left: 0 !important; margin-right: 0 !important;">
                                <div class="input-group">
                                    <span class="input-group-text" id="basic-addon1">
                                        <object data="assets/seach-icon.svg" type=""></object>
                                    </span>
                                    <input type="text" class="form-control" placeholder="Search Job">
                                </div>
                            </div>

                            <div class="col-lg-3 mb-3" style="margin-left: 0 !important; margin-right: 0 !important;">
                                <div class="input-group mb-3">
                                    <div class="input-group-text" id="basic-addon1">
                                        <object data="assets/location-icon.svg" type="image/svg+xml" class="icon"></object>
                                    </div>
                                    <select name="" id="" class="form-control">
                                        <option value="">Jakarta</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-lg-2 mb-3" style="margin-left: 0 !important; margin-right: 0 !important;">
                                <button class="btn btn--search mb-3 text-white" style="background-color: #5d2e8f; border-radius: 50px;">Search</button>
                            </div>
                        </div>
                    </form>

                    <div class="career pt-3 pb-5">
                        <div class="career--item p-4 my-4 border border-dark">
                            <div class="header row">
                                <h5 class="col-md-8">Frontend Developer</h5>
                                <div class="location col-md-4 d-flex justify-content-md-end align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                    </svg>
                                    <span>Semarang</span>
                                </div>
                            </div>
                            <p class="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus id fuga maxime exercitationem libero a nisi corporis quaerat delectus! Quod ut fugit, itaque possimus reiciendis praesentium. Accusantium maiores amet vitae?</p>
                            <div class="footer row">
                                <span class="col-md-8 mb-3">Job Posting : 17 April 2021</span>
                                <div class="btn-apply col-md-4 d-flex justify-content-md-end">
                                    <a href="career-detail.html" class="btn btn-apply rounded-pill text-dark text-decoration-none text-white px-5">Detail</a>
                                </div>
                            </div>
                        </div>
                        <div class="career--item p-4 my-4 border border-dark">
                            <div class="header row">
                                <h5 class="col-md-8">Frontend Developer</h5>
                                <div class="location col-md-4 d-flex justify-content-md-end align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                    </svg>
                                    <span>Semarang</span>
                                </div>
                            </div>
                            <p class="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus id fuga maxime exercitationem libero a nisi corporis quaerat delectus! Quod ut fugit, itaque possimus reiciendis praesentium. Accusantium maiores amet vitae?</p>
                            <div class="footer row">
                                <span class="col-md-8 mb-3">Job Posting : 17 April 2021</span>
                                <div class="btn-apply col-md-4 d-flex justify-content-md-end">
                                    <a href="career-detail.html" class="btn btn-apply rounded-pill text-dark text-decoration-none text-white px-5">Detail</a>
                                </div>
                            </div>
                        </div>
                        <div class="career--item p-4 my-4 border border-dark">
                            <div class="header row">
                                <h5 class="col-md-8">Frontend Developer</h5>
                                <div class="location col-md-4 d-flex justify-content-md-end align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                    </svg>
                                    <span>Semarang</span>
                                </div>
                            </div>
                            <p class="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus id fuga maxime exercitationem libero a nisi corporis quaerat delectus! Quod ut fugit, itaque possimus reiciendis praesentium. Accusantium maiores amet vitae?</p>
                            <div class="footer row">
                                <span class="col-md-8 mb-3">Job Posting : 17 April 2021</span>
                                <div class="btn-apply col-md-4 d-flex justify-content-md-end">
                                    <a href="career-detail.html" class="btn btn-apply rounded-pill text-dark text-decoration-none text-white px-5">Detail</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pages">
                        <div class="pages__wrapper">
                            <div class="arrow arrow-left"><a href="#">
                                    &lt; </a>
                            </div>
                            <ul class="page-list">
                                <li><a href="#" class="current">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                            </ul>
                            <div class="arrow arrow-right"><a href="#">></a></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Include Cookie msg panel -->
            <?= $this->include('layout/component/cookie_msg'); ?>
            <!-- <div id="footer--placeholder"></div> -->

            <!-- Include Footer -->
            <?= $this->include('layout/component/footer'); ?>
        </div>
    </div>

</body>

</html>
<!-- Add Preloader -->
<script src="js/preloader.js"></script>