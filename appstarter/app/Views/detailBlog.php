<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detail Blog</title>
    <link rel="stylesheet" href="../../css/detailBlog.css">

</head>

<body>
    <!-- Include Navbar -->
    <?= $this->include('layout/component/navbar'); ?>

    <div class="container-fluid">
        <div class="container w-75 m-auto">
            <div class="content">
                <div class="content__container row">
                    <div class="col-md-8">
                        <div class="info">
                            <span class="info__published-by"><?= $blogData['published_by'] ?> - </span>
                            <span class="info__date"><?= $blogData['date'] ?> |</span>
                            <span class="info__read-time"><?= $blogData['read_time'] ?> mins</span>
                        </div>
                        <h1 class="title py-3"><?= $blogData['title'] ?></h1>
                        <div class="body">
                            <!-- <div class="body__text"><?= $blogData['content'] ?></div> -->
                            <div class="body__text">
                                <img src="../../assets/PCR Test - Rapid Test Antigen - Swab Test Termurah di Jakarta Indonesia (Realta Chakradarma).png" style="width: 50%; float: left; margin-right: 20px;margin-bottom: 10px;">
                                <p class="text-justify">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, enim repellendus nobis, sequi suscipit reiciendis atque quos in odit omnis totam, porro quia quo fuga. Ducimus voluptates sunt deserunt natus eum dolorem illo ut? Nam quam unde possimus eligendi assumenda, veritatis animi incidunt provident explicabo voluptas! In nobis sed cum.
                                    <br><br>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis accusamus, velit praesentium, reiciendis culpa non quia eveniet rerum debitis illo ipsa libero eius? Nulla ipsa ullam rem deleniti, eligendi qui id, nemo commodi quae praesentium totam, a accusamus inventore asperiores. Vero, eius. Eos aliquid amet, laboriosam quo cupiditate est omnis! <br><br>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore distinctio sit repudiandae ab, mollitia quos sapiente odit neque adipisci molestiae, molestias aspernatur animi aut quia quae possimus consequuntur libero eum, iure nisi accusantium rem expedita magnam. Cumque eius aut assumenda quos explicabo laboriosam. Ipsum aliquid quia veritatis perspiciatis architecto dolorem?
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, enim repellendus nobis, sequi suscipit reiciendis atque quos in odit omnis totam, porro quia quo fuga. Ducimus voluptates sunt deserunt natus eum dolorem illo ut? Nam quam unde possimus eligendi assumenda, veritatis animi incidunt provident explicabo voluptas! In nobis sed cum.
                                    <br><br>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis accusamus, velit praesentium, reiciendis culpa non quia eveniet rerum debitis illo ipsa libero eius? Nulla ipsa ullam rem deleniti, eligendi qui id, nemo commodi quae praesentium totam, a accusamus inventore asperiores. Vero, eius. Eos aliquid amet, laboriosam quo cupiditate est omnis! <br><br>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore distinctio sit repudiandae ab, mollitia quos sapiente odit neque adipisci molestiae, molestias aspernatur animi aut quia quae possimus consequuntur libero eum, iure nisi accusantium rem expedita magnam. Cumque eius aut assumenda quos explicabo laboriosam. Ipsum aliquid quia veritatis perspiciatis architecto dolorem?
                                </p>

                            </div>
                        </div>

                    </div>
                    <!-- Side Panel -->
                    <div class="col-md-4">
                        <!-- Popular Posts -->
                        <div class="side-panel p-3 mb-5">
                            <h4>Populer Post</h4>
                            <div class="post-item d-flex align-items-center my-3">
                                <img src="../../assets/Rectangle 85.png">
                                <span class="px-2">Lorem, ipsum.</span>
                            </div>
                            <div class="post-item d-flex align-items-center my-3">
                                <img src="../../assets/Rectangle 85.png">
                                <span class="px-2">Lorem, ipsum.</span>
                            </div>
                            <div class="post-item d-flex align-items-center my-3">
                                <img src="../../assets/Rectangle 85.png">
                                <span class="px-2">Lorem, ipsum.</span>
                            </div>
                        </div>
                        <!-- Category -->
                        <div class="side-panel p-3 mb-5">
                            <h4>Category</h4>
                            <div class="category-item d-flex align-items-center my-3">
                                <span class="px-2">Lorem, ipsum.</span>
                            </div>
                            <div class="category-item d-flex align-items-center my-3">
                                <span class="px-2">Lorem, ipsum.</span>
                            </div>
                            <div class="category-item d-flex align-items-center my-3">
                                <span class="px-2">Lorem, ipsum.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Include Footer -->
    <?= $this->include('layout/component/footer'); ?>

</body>

</html>