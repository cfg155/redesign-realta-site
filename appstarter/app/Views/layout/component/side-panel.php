<div class="side-panel__container">
    <div class="popular p-3 mb-5">
        <span class="book-text py-3">Popular Post</span>
        <?php foreach ($popularData as $item) {  ?>
            <div class="popular__wrapper p-2">
                <div class="popular__wrapper--item d-flex align-items-center">
                    <img src="../../../<?php echo $item['thumbnail_img'] ?>">
                    <a href="<?= base_url('blog/detail/' . $item['id']) ?>" class="text-dark text-decoration-none px-2"><?php echo $item['title'] ?></a>
                </div>
            </div>
        <?php  } ?>

    </div>
    <div class="category p-3">
        <span class="book-text py-3">Category</span>
        <div class="category__wrapper d-flex flex-column p-3"></div>
    </div>
</div>