<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?= $this->include('layout/component/navbar'); ?>
    <div class="container">
        <div class="section-1">
            <!-- Banner Section -->
            <div class="section-1__left">
                <div class="section-1__left--wrapper">
                    <div class="items">
                        <img src="#" alt="">
                        <h1>Header Title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem temporibus provident, a omnis ipsum vitae odio quae alias cumque fugit rem porro voluptas nulla magni nisi vero libero! Aperiam.</p>
                        <div class="rating"></div>
                        <a href="">Learn More</a>
                    </div>
                </div>
                <div class="slidebar">
                    <!-- Slidebar -->
                    <!-- Empty -->
                </div>
            </div>
            <div class="section-1__right"></div>
        </div>
        <div class="section-2"></div>
        <div class="section-3"></div>
        <div class="section-4"></div>
        <div class="section-5"></div>
        <div class="section-6"></div>
        <div class="section-7"></div>
    </div>
    <?= $this->include('layout/component/footer'); ?>
</body>

</html>