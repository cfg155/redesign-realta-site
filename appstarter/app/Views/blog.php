<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog</title>
    <link rel="stylesheet" href="css/blog.css">
    <link rel="stylesheet" href="css/blogList.css">
    <link rel="stylesheet" href="css/side-panel.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous"></script>
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
                <div class="content pt-4">
                    <div class="content__blog d-flex justify-content-between">
                        <!-- main -->
                        <div class="content__blog--main">
                            <h4><b>Blog</b> </h4>
                            <div class="body__content--top position-relative">
                                <a href="" class="top--img"><img src="<?= $popularData[0]['thumbnail_img'] ?>" alt=""></a>
                                <div class="top--txt">
                                    <div class="footer position-relative">
                                        <span><b><?= $popularData[0]['title'] ?></b></span>
                                        <p class="my-2 introtext"><?= $popularData[0]['introtext'] ?></p>
                                        <div class="d-flex justify-content-between">
                                            <div class="date"><?= $popularData[0]['modified_date'] ?></div>
                                            <div class="date"><?= $popularData[0]['min_read'] ?> Min Read</div>
                                        </div>
                                        <a href="detailBlog.html" class="stretched-link">Continue reading</a>
                                    </div>
                                </div>

                            </div>
                            <div class="body__content--list row"></div>
                        </div>
                        <!-- side -->
                        <div class="content__blog--side">
                            <?= $this->include('layout/component/side-panel.php'); ?>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Include Cookie msg panel -->
            <?= $this->include('layout/component/cookie_msg'); ?>
            <!-- <div id="footer--placeholder"></div> -->

            <!-- Include Footer -->
            <?= $this->include('layout/component/footer'); ?>
        </div>
    </div>

</body>

</html>
<!-- limit words -->
<script>
    function limitWords() {
        let introtext = document.querySelectorAll('.introtext')
        let alphabetLimit = 200

        function setIntrotext(el) {
            let curText = el.innerText
            let textTmp = ''

            // console.log(el);

            if (curText.length > alphabetLimit) {
                for (let i = 0; i < alphabetLimit; i++) {
                    if (i > alphabetLimit - 3) {
                        textTmp += '.'
                    } else {
                        textTmp += curText[i]
                    }
                }
                el.innerText = textTmp
            }
        }

        introtext.forEach((item) => {
            setIntrotext(item)
        })
    }
</script>
<script>
    let category = 0
    let limit = 5

    // total data
    let dataSize = <?php echo $dataSize; ?>;

    // Load data 
    let isLoading = false

    function loadDataEl(id, thumbnail_img, category, title, introtext, modified_date, min_read) {
        return `
            <div class="item">
                <a href="${window.location.href}/detail/${id}"><img src="${thumbnail_img}" alt="" class=""></a>
                <div class="position-relative">

                    <span><b>${title}</b></span>
                    <p class="my-2 introtext">${introtext}</p>
                    <div class="footer d-flex justify-content-between">
                        <div class="date">${modified_date}</div>
                        <div class="date">${min_read} Min Read</div>
                    </div>
                    <a href="${window.location.href}/detail/${id}" class="stretched-link">Continue reading</a>
                </div>
            </div>
            `
    }

    function loadData(category) {
        console.log(limit)
        console.log(category)
        $.ajax({
            url: `<?= site_url('blog/getdata/') ?>${limit}/${category}`,
            dataType: 'json',
            success: function(data, status, xhr) {
                console.log(data)
                let items = ``
                data.forEach(item => {
                    items += loadDataEl(item.id, item.thumbnail_img, item.category, item.title, item.introtext, item.modified_date, item.min_read)
                });
                $('.body__content--list').append(items)
                limitWords()
            }
        })
    }

    loadData(category)

    // Loading Transition
    let screenHeight = window.innerHeight + 200

    function windowIsScrolling() {
        console.log(limit)

        // get bottom boundingClient
        let bottomContainer = document.querySelector('.body__content--list').getBoundingClientRect().bottom
        // console.log(screenHeight)
        // console.log(bottomContainer)

        if (screenHeight > bottomContainer && !isLoading) {
            isLoading = true
            setTimeout(() => {
                limit += 5
                loadData(category)
                isLoading = false
            }, 200);
        }
    }

    window.addEventListener('scroll', windowIsScrolling)
</script>

<script>
    fetch('json/solution.json')
        .then(response => response.json())
        .then(response => {
            // let category
            let categoryNumber = [1, 2, 4, 7, 3, 3, 5, 5, 8, 0, 0, 0]
            let optionEl = ''
            // console.log(response)
            response.forEach((item, index) => {
                console.log(item.productName)
                optionEl +=
                    `
                    <span class="p-2 text-decoration-none text-dark" data-category="${categoryNumber[index]}">${item.productName}</span>
                    `
            })
            document.querySelector('.category__wrapper').innerHTML = optionEl

            let categoryBtn = document.querySelectorAll('.category__wrapper span')
            categoryBtn.forEach(item => {
                item.addEventListener('click', () => {
                    let getCategoryNumber = item.getAttribute('data-category')
                    category = getCategoryNumber
                    limit = 0
                    window.removeEventListener('scroll', windowIsScrolling)
                    document.body.scrollTop = 0
                    document.documentElement.scrollTop = 0
                    document.querySelector('.body__content--list').innerHTML = null
                    setTimeout(() => {
                        loadData(category)
                        window.addEventListener('scroll', windowIsScrolling)
                    }, 500);
                })
            })
        })
</script>


<!-- Add Preloader -->
<script src="js/preloader.js"></script>