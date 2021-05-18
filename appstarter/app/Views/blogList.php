<link rel="stylesheet" href="css/blogList.css">

<!-- Main Panel -->
<!-- <div class="top__content d-flex justify-content-center align-items-center mb-5">
    <a href="<?php echo base_url('/blog/detail/1') ?>" class="img-link"><img src="assets/Real Violet Air Sterilizer - PT Realta Chakradarma.png" alt=""></a>
    <div class="txt position-relative px-3 py-2">
        <span>Lorem Ipsum</span>
        <p class="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores velit facilis fugit adipisci unde reprehenderit! Asperiores vero quis enim dolor.</p>
        <a href="<?php echo base_url('/blog/detail/1') ?>" class="stretched-link">Continue reading</a>
        <div class="footer d-flex justify-content-between">
            <div class="date">24 March 2021</div>
            <div class="date">2 Min Read</div>
        </div>
    </div>
</div> -->
<div class="body__content row d-flex justify-content-between">
    <?php foreach ($blogData as $item) { ?>
        <div class="col-md-6 body__content--item mb-3">
            <a href="<?php echo base_url('/blog/detail/1') ?>"><img src="<?php echo $item['thumbnail'] ?>" alt=""></a>
            <div class="txt position-relative  py-2">
                <span><?php echo $item['title'] ?></span>
                <p class="my-2"><?php echo $item['introtext'] ?></p>
                <div class="footer d-flex justify-content-between">
                    <div class="date"><?php echo $item['created_time'] ?></div>
                    <div class="date"><?php echo $item['min_read'] ?> Min Read</div>
                </div>
                <a href="<?php echo base_url('/blog/detail/1') ?>" class="stretched-link">Continue reading</a>
            </div>
        </div>
    <?php } ?>
</div>