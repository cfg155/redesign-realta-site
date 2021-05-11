<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Company</title>
    <link rel="stylesheet" href="css/solution.css">
</head>

<body>
    <div class="super">
        <div id="preload-container"></div>
        <div class="super__container">
            <!-- Include Navbar -->
            <!-- <?= $this->include('layout/component/navbar'); ?> -->
            <!-- Include Navbar -->
            <!-- <?= $this->include('layout/component/navbar'); ?> -->
            <div id="navbar--placeholder"></div>

            <div class="container-fluid pb-5">
                <div class="content">
                    <h1 class="title pb-5 book-text">Solutions<br>Realta Chakradarma</h1>

                    <div class="category">
                        <div class="category__wrapper row w-75 m-auto"></div>
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
<script src="js/solution.js"></script>
<!-- Load Component Statically -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous"></script>
<script>
    $("#preload-container").load("preloading.html");
    $("#navbar--placeholder").load("navbar.html");
    $("#footer--placeholder").load("footer.html");
</script>
<!-- Add Preloader -->
<script src="js/preloader.js"></script>