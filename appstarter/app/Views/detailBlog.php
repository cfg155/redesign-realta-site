<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog</title>
    <link rel="stylesheet" href="css/blog.css" class="style">
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
                <div class="content w-75 m-auto pt-4">
                    <h1 class="title py-3 book-text"><?= $blogData['title'] ?></h1>
                    <div class="content__blog row">
                        <!-- Main Panel -->
                        <div class="content__blog__main col-xl-8 col-lg-8">
                            <div class="info d-flex justify-content-between">
                                <span class="info__published-by"><?= $blogData['published_by'] ?></span>
                                <div class="info__time d-flex">
                                    <div class="info__date d-flex align-items-center me-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18.75" height="20" viewBox="0 0 18.75 20" style="margin: 0 5px;">
                                            <defs>
                                                <style>
                                                    .a {
                                                        fill: #101820;
                                                    }
                                                </style>
                                            </defs>
                                            <path class="a" d="M8.821,9.428h2.5v2.5h-2.5Zm3.75,0h2.5v2.5h-2.5Zm3.75,0h2.5v2.5h-2.5Zm-11.25,7.5h2.5v2.5h-2.5Zm3.75,0h2.5v2.5h-2.5Zm3.75,0h2.5v2.5h-2.5Zm-3.75-3.75h2.5v2.5h-2.5Zm3.75,0h2.5v2.5h-2.5Zm3.75,0h2.5v2.5h-2.5Zm-11.25,0h2.5v2.5h-2.5Zm13.75-11.25v1.25h-2.5V1.928H7.571v1.25h-2.5V1.928h-2.5v20h18.75v-20h-2.5Zm1.25,18.75H3.821V6.928h16.25Z" transform="translate(-2.571 -1.928)" />
                                        </svg>
                                        <span class="info__date--txt"><?= $blogData['published_date'] ?></span>
                                    </div>
                                    <div class="info__read-time d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" style="margin: 0 5px;">
                                            <path d="M4.488,13.846a9.805,9.805,0,0,1,1.35-5.027,9.992,9.992,0,0,1,3.65-3.65,9.981,9.981,0,0,1,8.89-.551A10.09,10.09,0,0,1,21.566,6.75a9.792,9.792,0,0,1,2.131,3.2,9.931,9.931,0,0,1-5.32,13.091,9.967,9.967,0,0,1-7.78,0A9.841,9.841,0,0,1,5.27,17.727,9.624,9.624,0,0,1,4.488,13.846Zm2.2,0a7.548,7.548,0,0,0,2.3,5.488,7.5,7.5,0,0,0,5.506,2.3,7.55,7.55,0,0,0,3.9-1.048,7.879,7.879,0,0,0,2.851-2.842,7.736,7.736,0,0,0,0-7.806A7.835,7.835,0,0,0,18.4,7.087a7.776,7.776,0,0,0-7.8,0,8,8,0,0,0-2.86,2.851A7.52,7.52,0,0,0,6.69,13.846Zm7.034,0V7.931a.737.737,0,1,1,1.474,0v5.462l3.188,1.856a.725.725,0,0,1,.337.453.667.667,0,0,1-.08.551.692.692,0,0,1-.639.373.618.618,0,0,1-.373-.107l-3.393-1.98a.731.731,0,0,1-.373-.258A.675.675,0,0,1,13.724,13.846Z" transform="translate(-4.488 -3.828)" fill="#101820" />
                                        </svg>
                                        <span class="info__read-time--txt"><?= $blogData['read_time'] ?> mins</span>
                                    </div>
                                </div>

                            </div>
                            <hr>
                            <div class="body">
                                <div class="body__text">
                                    <img src="../../assets/<?= $blogData['img_name'] ?>" style="width: 50%; float: left; margin-right: 20px;margin-bottom: 10px;">
                                    <p class="text-justify"><?= $blogData['content'] ?></p>
                                </div>
                            </div>
                        </div>

                        <!-- Side Panel -->
                        <div class="content__blog__side col-xl-4 col-lg-4">
                            <div class="popular mb-5">
                                <span class="book-text py-3">Popular Post</span>
                                <div class="popular__wrapper p-3">
                                    <div class="popular__wrapper--item my-3 d-flex align-items-center">
                                        <img src="assets/Rectangle 85.png">
                                        <a href="" class="text-dark text-decoration-none px-2">Lorem Ipsum</a>
                                    </div>
                                    <div class="popular__wrapper--item my-3">
                                        <img src="assets/Rectangle 85.png">
                                        <a href="" class="text-dark text-decoration-none px-2">Lorem Ipsum</a>
                                    </div>
                                    <div class="popular__wrapper--item my-3">
                                        <img src="assets/Rectangle 85.png">
                                        <a href="" class="text-dark text-decoration-none px-2">Lorem Ipsum</a>
                                    </div>
                                    <div class="popular__wrapper--item my-3">
                                        <img src="assets/Rectangle 85.png">
                                        <a href="" class="text-dark text-decoration-none px-2">Lorem Ipsum</a>
                                    </div>
                                </div>

                            </div>
                            <div class="category">
                                <span class="book-text py-3">Category</span>
                                <div class="category__wrapper d-flex flex-column p-3"></div>
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
<!-- Load Component Statically -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous"></script>
<script>
    fetch('json/solution.json')
        .then(response => response.json())
        .then(response => {
            let optionEl = ''
            console.log(response)
            response.forEach((item, index) => {
                console.log(item.productName)
                optionEl +=
                    `
                    <a href="#" class="p-2 text-decoration-none text-dark">${item.productName}</a>
                    `
            })
            document.querySelector('.category__wrapper').innerHTML = optionEl
        })
</script>
<script>
    if (currentLocation.includes(`${window.location.host}/blog/detail`)) {
        let newPath = '../../'

        document.querySelector('.style').href = `${newPath}css/blog.css`
        let preloadObj = document.querySelector('#preload-container object')
        console.log(preloadObj.setAttribute('data', `${newPath}assets/SAMPLE PROJECT.svg`))
    }

    let superContainer = document.querySelector('.super__container')
    let svgPreloader = document.getElementById('preload-container')

    svgPreloader.style.transition = 'opacity 1s'

    window.addEventListener('load', () => {
        svgPreloader.style.opacity = '0'
        setTimeout(() => {
            superContainer.style.opacity = '1'
            superContainer.style.backgroundColor = '#fafafa'
        }, 500);
    })
</script>
<!-- Add Preloader -->
<!-- <script src="js/preloader.js" class="preloader"></script> -->