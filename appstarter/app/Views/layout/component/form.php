<link rel="stylesheet" href="css/form.css">
<div class="contact-us row d-flex justify-content-between">
    <div class="contact-us-left col-lg-6">
        <h2 class="book-text">What Are You Waiting for ? <br> Just Make It Happen!</h2>
        <p class="w-75 py-4">We'll have a Business Development Representative contact you within 24 business hours</p>
        <div class="achievement mb-4 d-flex ">
            <div class="achievement--item d-flex justify-content-center align-items-center mb-3">
                <img src="assets/awards-item-left.png" alt="">
                <span class="text-center">FAST <br> Moving <br> Company <br> 2019</span>
                <img src="assets/awards-item-right.png" alt="">
            </div>
            <div class="achievement--item d-flex justify-content-center align-items-center mb-3">
                <img src="assets/awards-item-left.png" alt="">
                <span class="text-center">TOP IT<br> Solution <br> 2019</span>
                <img src="assets/awards-item-right.png" alt="">
            </div>
            <div class="achievement--item d-flex justify-content-center align-items-center mb-3">
                <img src="assets/awards-item-left.png" alt="">
                <span class="text-center">TOP IT<br> Solution <br> 2020</span>
                <img src="assets/awards-item-right.png" alt="">
            </div>
        </div>
        <div class="info pb-5">
            <h3>PT. REALTA CHAKRADARMA</h3>
            <h4>Headquarter Address</h4>
            <p>Jl. Petojo Melintang no. 25A, <br>Petojo Selatan Gambir <br> Jakarta Pusat - 10160, Indonesia</p>
            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6891067663637!2d106.81464431476894!3d-6.172363995531336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f67f4f44dc2f%3A0x124b0a0f4cb7e845!2sPT%20Realta%20Chakradarma!5e0!3m2!1sen!2sid!4v1621825071444!5m2!1sen!2sid" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <br>
            <span class="phone">Phone: +62 21 - 386 1772</span>
            <span class="fax">Fax: +62 21 - 386 1771</span>
            <br>
            <p>For sales and marketing, contact our <br> <a href="https://api.whatsapp.com/send?phone=628111221789&text=Hallo%20PT%20Realta...">Official Whatsapp: +62 811 1221 789 (chat only)</a></p>
            <br>
            <div class="social-media">
                <span>Connect With Us Through Social Media</span>
                <br>
                <div class="icons d-flex">
                    <a href="http://127.0.0.1:5500/live-project/hospitality-system-subpage.html"><img src="assets/facebook.png" alt="" class="icon"></a>
                    <a href="http://127.0.0.1:5500/live-project/hospitality-system-subpage.html"><img src="assets/linkedin.png" alt="" class="icon"></a>
                    <a href="http://127.0.0.1:5500/live-project/hospitality-system-subpage.html"><img src="assets/twitter.png" alt="" class="icon"></a>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-5">
        <div class="contact-us__form">
            <div class="form" style="background-color: #ffffff; border-radius: 15px !important;">
                <form action="/FormControl/index" method="POST">
                    <!-- Select A Service -->
                    <div class="row">
                        <div class="col-md-12">
                            <label for="service" class="form-label my-3">Select A Service</label>
                        </div>
                        <div class="col-md-12">
                            <select name="" id="" name="service" class="form-control select-container select-i"></select>
                        </div>
                    </div>

                    <!-- Company -->
                    <div class="row">
                        <div class="col-md-12">
                            <label for="company" class="form-label my-3">Company</label>
                        </div>
                        <div class="col-md-12">
                            <input type="text" class="form-control" name="company">
                        </div>
                    </div>

                    <!-- Mobile Phone & Email -->
                    <div class="row">
                        <div class="col-md-6">
                            <label for="Mobile Phone" class="form-label my-3">Mobile Phone</label>
                            <input type="text" class="form-control" name="phone">
                        </div>

                        <div class="col-md-6">
                            <label for="Email" class="form-label my-3">Email</label>
                            <input type="text" class="form-control" name="email">
                        </div>
                    </div>

                    <!-- Total Employee -->
                    <div class="row">
                        <div class="col-md-12">
                            <label for="Total Employee" class="form-label my-3">Total Employee</label>
                        </div>

                        <div class="col-md-12">
                            <select name="total-employee" id="" class="form-control select-i">
                                <option value="1-50">1-50</option>
                                <option value="51-100">51-100</option>
                                <option value="101-300">101-300</option>
                                <option value="301-500">301-500</option>
                                <option value=">500">>500</option>
                            </select>
                        </div>
                    </div>

                    <!-- Fullname -->
                    <div class="row">
                        <div class="col-md-12">
                            <label for="Fullname" class="form-label my-3">Fullname</label>
                        </div>
                        <div class="col-md-12">
                            <input type="text" class="form-control" name="fullname">
                        </div>
                    </div>

                    <!-- Message -->
                    <div class="row">
                        <div class="col-md-12">
                            <label for="Message" class="form-label my-3">Message</label>
                        </div>
                        <div class="col-md-12">
                            <textarea name="message" id="" cols="30" rows="10" class="form-control"></textarea>
                        </div>
                    </div>

                    <!-- Checkbox -->
                    <div class="checkbox d-flex my-3">
                        <div class="checkbox--square me-2">
                            <input type="checkbox">
                        </div>
                        <div class="checkbox--text">
                            Before submitting please read our <br><a href="#" class="text-dark">Term and Condition</a> , <a href="#" class="text-dark">Privacy Policy</a>
                        </div>
                    </div>

                    <input type="hidden" id="token" name="token">

                    <!-- Submit -->
                    <div class="my-3">
                        <button class="g-recaptcha btn rounded-pill text-light text-center d-block text-center w-100" data-sitekey=" 6LeBJrsaAAAAACYPjvJSKwSZFaIB6e3Q0Wyn-apw" data-callback='onSubmit' data-action='submit' style="background-color: #5d2e8f;">Tell us your problem</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<script>
    fetch('product-list/product.json')
        .then(response => response.json())
        .then(response => {
            let getService = []
            let optionEl = ''
            let data = response.productItems
            data.forEach((item, index) => {
                optionEl +=
                    `
                    <option value="${item}">${item}</option>
                    `
            })
            document.querySelector('.select-container').innerHTML = optionEl
        })
</script>
<!-- <script>
    function onClick(e) {
        e.preventDefault();
        grecaptcha.ready(function() {
            grecaptcha.execute('reCAPTCHA_6LeBJrsaAAAAACYPjvJSKwSZFaIB6e3Q0Wyn-apw', {
                action: 'submit'
            }).then(function(token) {
                // Add your logic to submit to your backend server here.
                document.getElementById('token').value = token
            });
        });
    }
</script> -->
<!-- <script src="https://www.google.com/recaptcha/api.js"></script> -->
<!-- <script>
    function onSubmit(token) {
        document.getElementById("demo-form").submit();
    }
</script> -->