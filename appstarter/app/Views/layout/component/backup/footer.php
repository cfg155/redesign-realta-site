<link rel="stylesheet" href="css/footer.css" class="footer-style">

<footer>
    <div class="container-fluid w-100 pb-5">
        <div class="footer__wrapper p-4 overflow-hidden">
            <div class="links">
                <a href="#" class="text-decoration-none text-dark me-4">Solutions</a>
                <a href="#" class="text-decoration-none text-dark me-4">Company</a>
                <a href="#" class="text-decoration-none text-dark me-4">Support</a>
                <a href="#" class="text-decoration-none text-dark me-4">Resources</a>
            </div>
            <hr class="mb-4">
            <div class="row d-flex align-items-center">
                <div class="col-lg-4">
                    <div class="social-media d-flex align-items-baseline">
                        <a href="" class="icon me-3">
                            <img src="assets/Group 133.png" alt="">
                        </a>
                        <a href="" class="icon me-3">
                            <img src="assets/Group 134.png" alt="">
                        </a>
                        <a href="" class="icon me-3">
                            <img src="assets/Group 135.png" alt="">
                        </a>
                        <a href="" class="icon me-3">
                            <img src="assets/Group 136.png" alt="">
                        </a>
                        <a href="" class="icon me-3">
                            <img src="assets/Group 154.png" alt="">
                        </a>
                    </div>
                </div>
                <div class="col-lg-8 py-3 text-lg-end">
                    &copy;2021 PT Realta Chakradarma. All Rights Reserved
                </div>

            </div>
        </div>
    </div>

    <div class="color-bar overflow-hidden w-100"></div>
</footer>
<script>
    if (currentLocation.includes(`${window.location.host}/blog/detail`)) {
        let newPath = '../../'

        let footerLink = document.querySelector('.footer-style').href = `${newPath}css/footer.css`

        console.log(footerLink)

        // console.log(window.location)
        let footerIcons = document.querySelectorAll('.icon')

        let image = ['Group 133.png', 'Group 134.png', 'Group 135.png', 'Group 136.png', 'Group 154.png']

        footerIcons.forEach((items, index) => {
            items.firstElementChild.src = `${newPath}assets/${image[index]}`
        })
    }
</script>