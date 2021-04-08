<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detail Blog</title>

</head>

<body>
    <!-- Include Navbar -->
    <?= $this->include('layout/component/navbar'); ?>

    <div class="container-fluid">
        <div class="container w-75 m-auto">
            <div class="content">
                <div class="content__container row">
                    <div class="col-md-8">

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

</body>

</html>