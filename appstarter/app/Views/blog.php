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
        
        <div id="preload-container"></div>
        <div class="super__container">
            <!-- Include Navbar -->
            <!-- <?= $this->include('layout/component/navbar'); ?> -->
            <div id="navbar--placeholder"></div>

            <div class="container-fluid">
                <div class="content w-75 m-auto pt-4">
                    <h1 class="content__title py-3 book-text">Blog</h1>
                    <div class="content__blog row">
                        <!-- Main Panel -->
                        <div class="content__blog__main col-xl-8 col-lg-8">

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
            <!-- <?= $this->include('layout/component/footer'); ?> -->
            <div id="footer--placeholder"></div>
        </div>
    </div>

</body>

</html>
<!-- Load Component Statically -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous"></script>
<script>
    $("#preload-container").load("preloading.html");
    $("#navbar--placeholder").load("navbar.html");
    $("#footer--placeholder").load("footer.html");
    $(".content__blog__main").load("blogList.html")
</script>
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

<!-- Add Preloader -->
<script src="js/preloader.js"></script>