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
                        <h1 class="title"></h1>
                        <div class="body">
                            <div class="body__text"><?= $blogData['content'] ?></div>
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