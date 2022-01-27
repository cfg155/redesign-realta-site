<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <link rel="stylesheet" href="css/contact.css">

</head>

<body>
    <div class="super">
        <div id="preload-container"></div>
        <div class="super__container">
            <!-- Include Navbar -->
            <?= $this->include('layout/component/navbar'); ?>
            <!-- <div id="navbar--placeholder"></div> -->

            <div class="container-fluid">
                <!-- Include Footer -->
                <?= $this->include('layout/component/form'); ?>
            </div>

            <!-- Include Cookie msg panel -->
            <?= $this->include('layout/component/cookie_msg'); ?>
            <!-- <div id="footer--placeholder"></div> -->

            <!-- Include Footer -->
            <?= $this->include('layout/component/footer'); ?>
            <!-- <div id="footer--placeholder"></div> -->
        </div>
    </div>

</body>

</html>
<!-- Load Component Statically -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous"></script>
<script>
    $("#preload-container").load("preloading.html");
    $("#navbar--placeholder").load("navbar.html");
    $(".contact-us-form").load("form.html");
    $("#footer--placeholder").load("footer.html");
</script>
<script>
    window.addEventListener('load', () => {
        document.querySelector('.super').style.opacity = '1'
    })
</script>
<!-- Add Preloader -->
<script src="js/preloader.js"></script>