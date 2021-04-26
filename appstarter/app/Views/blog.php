<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog</title>
    <link rel="stylesheet" href="css/blog.css">
</head>

<body>
    <div class="super">
        <div class="super__container">
            <!-- Include Navbar -->
            <?= $this->include('layout/component/navbar'); ?>

            <div class="container-fluid">
                <div class="content">
                    <h1 class="content__title">Blog</h1>
                    <div class="content__container row py-5">
                        <!-- Main Content -->
                        <div class="col-lg-8 col-md-12" style="padding-left: 0 !important; padding-right: 0 !important; ">
                            <div class="content__container__highlight d-flex align-items-center mb-5 position-relative">
                                <a href="<?php echo base_url('/blog/detail/1') ?>" class="link d-block w-100 h-100 position-absolute">Link</a>
                                <div class="row">
                                    <div class="col-lg-6 col-md-12 bg"></div>

                                    <div class="col-lg-6 col-md-12 py-2 body-text ">
                                        <div class="title">Lorem Ipsum</div>
                                        <div class="body py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit doloremque tempora tenetur unde odio labore asperiores error eveniet velit, dolore alias vero eum accusantium ducimus obcaecati deserunt nihil quaerat?</div>
                                        <div class="footer d-flex justify-content-between ">
                                            <div class="date d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18.75" height="20" viewBox="0 0 18.75 20" class="me-2">
                                                    <defs>
                                                        <style>
                                                            .a {
                                                                fill: #cecece;
                                                            }
                                                        </style>
                                                    </defs>
                                                    <path class="a" d="M8.821,9.428h2.5v2.5h-2.5Zm3.75,0h2.5v2.5h-2.5Zm3.75,0h2.5v2.5h-2.5Zm-11.25,7.5h2.5v2.5h-2.5Zm3.75,0h2.5v2.5h-2.5Zm3.75,0h2.5v2.5h-2.5Zm-3.75-3.75h2.5v2.5h-2.5Zm3.75,0h2.5v2.5h-2.5Zm3.75,0h2.5v2.5h-2.5Zm-11.25,0h2.5v2.5h-2.5Zm13.75-11.25v1.25h-2.5V1.928H7.571v1.25h-2.5V1.928h-2.5v20h18.75v-20h-2.5Zm1.25,18.75H3.821V6.928h16.25Z" transform="translate(-2.571 -1.928)" />
                                                </svg>
                                                <span>24 March 2021</span>
                                            </div>
                                            <div class="read-time d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="me-2">
                                                    <defs>
                                                        <style>
                                                            .a {
                                                                fill: #cecece;
                                                            }
                                                        </style>
                                                    </defs>
                                                    <path class="a" d="M4.488,13.846a9.805,9.805,0,0,1,1.35-5.027,9.992,9.992,0,0,1,3.65-3.65,9.981,9.981,0,0,1,8.89-.551A10.09,10.09,0,0,1,21.566,6.75a9.792,9.792,0,0,1,2.131,3.2,9.931,9.931,0,0,1-5.32,13.091,9.967,9.967,0,0,1-7.78,0A9.841,9.841,0,0,1,5.27,17.727,9.624,9.624,0,0,1,4.488,13.846Zm2.2,0a7.548,7.548,0,0,0,2.3,5.488,7.5,7.5,0,0,0,5.506,2.3,7.55,7.55,0,0,0,3.9-1.048,7.879,7.879,0,0,0,2.851-2.842,7.736,7.736,0,0,0,0-7.806A7.835,7.835,0,0,0,18.4,7.087a7.776,7.776,0,0,0-7.8,0,8,8,0,0,0-2.86,2.851A7.52,7.52,0,0,0,6.69,13.846Zm7.034,0V7.931a.737.737,0,1,1,1.474,0v5.462l3.188,1.856a.725.725,0,0,1,.337.453.667.667,0,0,1-.08.551.692.692,0,0,1-.639.373.618.618,0,0,1-.373-.107l-3.393-1.98a.731.731,0,0,1-.373-.258A.675.675,0,0,1,13.724,13.846Z" transform="translate(-4.488 -3.828)" />
                                                </svg>
                                                <span>2 Min Read</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="content__container__body">
                                <div class="row d-flex align-items-center">
                                    <div class="col-md-6 my-4">
                                        <div class="c-card position-relative">
                                            <a href="<?php echo base_url('/blog/detail/1') ?>" class="link d-block w-100 h-100 position-absolute">Link</a>
                                            <img src="assets/Cue Card - Bandung Golf Gathering 2021.png" class="w-100">
                                            <h4>Lorem Ipsum</h4>
                                            <p class="body-text w-100">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, rem dicta! Expedita, mollitia at odit dolorum temporibus delectus quo eum!</p>
                                            <div class="footer d-flex justify-content-between">
                                                <div class="date d-flex align-items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18.75" height="20" viewBox="0 0 18.75 20" class="me-2">
                                                        <defs>
                                                            <style>
                                                                .a {
                                                                    fill: #cecece;
                                                                }
                                                            </style>
                                                        </defs>
                                                        <path class="a" d="M8.821,9.428h2.5v2.5h-2.5Zm3.75,0h2.5v2.5h-2.5Zm3.75,0h2.5v2.5h-2.5Zm-11.25,7.5h2.5v2.5h-2.5Zm3.75,0h2.5v2.5h-2.5Zm3.75,0h2.5v2.5h-2.5Zm-3.75-3.75h2.5v2.5h-2.5Zm3.75,0h2.5v2.5h-2.5Zm3.75,0h2.5v2.5h-2.5Zm-11.25,0h2.5v2.5h-2.5Zm13.75-11.25v1.25h-2.5V1.928H7.571v1.25h-2.5V1.928h-2.5v20h18.75v-20h-2.5Zm1.25,18.75H3.821V6.928h16.25Z" transform="translate(-2.571 -1.928)" />
                                                    </svg>
                                                    <span>24 March 2021</span>
                                                </div>
                                                <div class="read-time d-flex align-items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="me-2">
                                                        <defs>
                                                            <style>
                                                                .a {
                                                                    fill: #cecece;
                                                                }
                                                            </style>
                                                        </defs>
                                                        <path class="a" d="M4.488,13.846a9.805,9.805,0,0,1,1.35-5.027,9.992,9.992,0,0,1,3.65-3.65,9.981,9.981,0,0,1,8.89-.551A10.09,10.09,0,0,1,21.566,6.75a9.792,9.792,0,0,1,2.131,3.2,9.931,9.931,0,0,1-5.32,13.091,9.967,9.967,0,0,1-7.78,0A9.841,9.841,0,0,1,5.27,17.727,9.624,9.624,0,0,1,4.488,13.846Zm2.2,0a7.548,7.548,0,0,0,2.3,5.488,7.5,7.5,0,0,0,5.506,2.3,7.55,7.55,0,0,0,3.9-1.048,7.879,7.879,0,0,0,2.851-2.842,7.736,7.736,0,0,0,0-7.806A7.835,7.835,0,0,0,18.4,7.087a7.776,7.776,0,0,0-7.8,0,8,8,0,0,0-2.86,2.851A7.52,7.52,0,0,0,6.69,13.846Zm7.034,0V7.931a.737.737,0,1,1,1.474,0v5.462l3.188,1.856a.725.725,0,0,1,.337.453.667.667,0,0,1-.08.551.692.692,0,0,1-.639.373.618.618,0,0,1-.373-.107l-3.393-1.98a.731.731,0,0,1-.373-.258A.675.675,0,0,1,13.724,13.846Z" transform="translate(-4.488 -3.828)" />
                                                    </svg>
                                                    <span>2 Min Read</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 my-4">
                                        <div class="c-card position-relative">
                                            <a href="<?php echo base_url('/blog/detail/1') ?>" class="link d-block w-100 h-100 position-absolute">Link</a>
                                            <img src="assets/Cue Card - Bandung Golf Gathering 2021.png" class="w-100">
                                            <h4>Lorem Ipsum</h4>
                                            <p class="body-text w-100">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, rem dicta! Expedita, mollitia at odit dolorum temporibus delectus quo eum!</p>
                                            <div class="footer d-flex justify-content-between">
                                                <div class="date d-flex align-items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18.75" height="20" viewBox="0 0 18.75 20" class="me-2">
                                                        <defs>
                                                            <style>
                                                                .a {
                                                                    fill: #cecece;
                                                                }
                                                            </style>
                                                        </defs>
                                                        <path class="a" d="M8.821,9.428h2.5v2.5h-2.5Zm3.75,0h2.5v2.5h-2.5Zm3.75,0h2.5v2.5h-2.5Zm-11.25,7.5h2.5v2.5h-2.5Zm3.75,0h2.5v2.5h-2.5Zm3.75,0h2.5v2.5h-2.5Zm-3.75-3.75h2.5v2.5h-2.5Zm3.75,0h2.5v2.5h-2.5Zm3.75,0h2.5v2.5h-2.5Zm-11.25,0h2.5v2.5h-2.5Zm13.75-11.25v1.25h-2.5V1.928H7.571v1.25h-2.5V1.928h-2.5v20h18.75v-20h-2.5Zm1.25,18.75H3.821V6.928h16.25Z" transform="translate(-2.571 -1.928)" />
                                                    </svg>
                                                    <span>24 March 2021</span>
                                                </div>
                                                <div class="read-time d-flex align-items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="me-2">
                                                        <defs>
                                                            <style>
                                                                .a {
                                                                    fill: #cecece;
                                                                }
                                                            </style>
                                                        </defs>
                                                        <path class="a" d="M4.488,13.846a9.805,9.805,0,0,1,1.35-5.027,9.992,9.992,0,0,1,3.65-3.65,9.981,9.981,0,0,1,8.89-.551A10.09,10.09,0,0,1,21.566,6.75a9.792,9.792,0,0,1,2.131,3.2,9.931,9.931,0,0,1-5.32,13.091,9.967,9.967,0,0,1-7.78,0A9.841,9.841,0,0,1,5.27,17.727,9.624,9.624,0,0,1,4.488,13.846Zm2.2,0a7.548,7.548,0,0,0,2.3,5.488,7.5,7.5,0,0,0,5.506,2.3,7.55,7.55,0,0,0,3.9-1.048,7.879,7.879,0,0,0,2.851-2.842,7.736,7.736,0,0,0,0-7.806A7.835,7.835,0,0,0,18.4,7.087a7.776,7.776,0,0,0-7.8,0,8,8,0,0,0-2.86,2.851A7.52,7.52,0,0,0,6.69,13.846Zm7.034,0V7.931a.737.737,0,1,1,1.474,0v5.462l3.188,1.856a.725.725,0,0,1,.337.453.667.667,0,0,1-.08.551.692.692,0,0,1-.639.373.618.618,0,0,1-.373-.107l-3.393-1.98a.731.731,0,0,1-.373-.258A.675.675,0,0,1,13.724,13.846Z" transform="translate(-4.488 -3.828)" />
                                                    </svg>
                                                    <span>2 Min Read</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 my-4">
                                        <div class="c-card position-relative">
                                            <a href="<?php echo base_url('/blog/detail/1') ?>" class="link d-block w-100 h-100 position-absolute">Link</a>
                                            <img src="assets/Cue Card - Bandung Golf Gathering 2021.png" class="w-100">
                                            <h4>Lorem Ipsum</h4>
                                            <p class="body-text w-100">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, rem dicta! Expedita, mollitia at odit dolorum temporibus delectus quo eum!</p>
                                            <div class="footer d-flex justify-content-between">
                                                <div class="date d-flex align-items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18.75" height="20" viewBox="0 0 18.75 20" class="me-2">
                                                        <defs>
                                                            <style>
                                                                .a {
                                                                    fill: #cecece;
                                                                }
                                                            </style>
                                                        </defs>
                                                        <path class="a" d="M8.821,9.428h2.5v2.5h-2.5Zm3.75,0h2.5v2.5h-2.5Zm3.75,0h2.5v2.5h-2.5Zm-11.25,7.5h2.5v2.5h-2.5Zm3.75,0h2.5v2.5h-2.5Zm3.75,0h2.5v2.5h-2.5Zm-3.75-3.75h2.5v2.5h-2.5Zm3.75,0h2.5v2.5h-2.5Zm3.75,0h2.5v2.5h-2.5Zm-11.25,0h2.5v2.5h-2.5Zm13.75-11.25v1.25h-2.5V1.928H7.571v1.25h-2.5V1.928h-2.5v20h18.75v-20h-2.5Zm1.25,18.75H3.821V6.928h16.25Z" transform="translate(-2.571 -1.928)" />
                                                    </svg>
                                                    <span>24 March 2021</span>
                                                </div>
                                                <div class="read-time d-flex align-items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="me-2">
                                                        <defs>
                                                            <style>
                                                                .a {
                                                                    fill: #cecece;
                                                                }
                                                            </style>
                                                        </defs>
                                                        <path class="a" d="M4.488,13.846a9.805,9.805,0,0,1,1.35-5.027,9.992,9.992,0,0,1,3.65-3.65,9.981,9.981,0,0,1,8.89-.551A10.09,10.09,0,0,1,21.566,6.75a9.792,9.792,0,0,1,2.131,3.2,9.931,9.931,0,0,1-5.32,13.091,9.967,9.967,0,0,1-7.78,0A9.841,9.841,0,0,1,5.27,17.727,9.624,9.624,0,0,1,4.488,13.846Zm2.2,0a7.548,7.548,0,0,0,2.3,5.488,7.5,7.5,0,0,0,5.506,2.3,7.55,7.55,0,0,0,3.9-1.048,7.879,7.879,0,0,0,2.851-2.842,7.736,7.736,0,0,0,0-7.806A7.835,7.835,0,0,0,18.4,7.087a7.776,7.776,0,0,0-7.8,0,8,8,0,0,0-2.86,2.851A7.52,7.52,0,0,0,6.69,13.846Zm7.034,0V7.931a.737.737,0,1,1,1.474,0v5.462l3.188,1.856a.725.725,0,0,1,.337.453.667.667,0,0,1-.08.551.692.692,0,0,1-.639.373.618.618,0,0,1-.373-.107l-3.393-1.98a.731.731,0,0,1-.373-.258A.675.675,0,0,1,13.724,13.846Z" transform="translate(-4.488 -3.828)" />
                                                    </svg>
                                                    <span>2 Min Read</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <!-- Side Panel -->
                        <div class="col-lg-4 col-md-12" style="padding-left: 0 !important; padding-right: 0 !important;">
                            <!-- Popular Posts -->
                            <div class=" side-panel p-3 mb-5">
                                <h4>Populer Post</h4>
                                <div class="post-item d-flex align-items-center my-3">
                                    <img src="assets/Rectangle 85.png">
                                    <span class="px-2">Lorem, ipsum.</span>
                                </div>
                                <div class="post-item d-flex align-items-center my-3">
                                    <img src="assets/Rectangle 85.png">
                                    <span class="px-2">Lorem, ipsum.</span>
                                </div>
                                <div class="post-item d-flex align-items-center my-3">
                                    <img src="assets/Rectangle 85.png">
                                    <span class="px-2">Lorem, ipsum.</span>
                                </div>
                            </div>
                            <!-- Category -->
                            <div class="side-panel p-3 mb-5">
                                <h4>Category</h4>
                                <div class="category-item d-flex flex-column  my-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Include Footer -->
            <?= $this->include('layout/component/footer'); ?>
        </div>
    </div>

</body>

</html>
<script>
    fetch('json/homepage.json')
        .then(response => response.json())
        .then(response => {
            let optionEl = ''
            let productSection = response[0].productSection
            productSection.forEach((item, index) => {
                console.log(item)
                optionEl +=
                    `
                    <a href="#" class="p-2 text-decoration-none text-dark">${item.leftPanel.title}</a>
                    `
            })
            document.querySelector('.category-item').innerHTML = optionEl
        })
</script>