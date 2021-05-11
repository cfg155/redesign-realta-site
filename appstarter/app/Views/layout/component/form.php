<link rel="stylesheet" href="css/form.css">

<div class="contact-us container pb-5">
    <div class="contact-us row">
        <div class="col-lg-6 ">
            <h2 class="book-text">What Are You Waiting for ? Just Make It Happen!</h2>
            <p class="w-75 py-4">We'll have a Business Development Representative contact you within 24 business hours</p>
            <div class="achievement d-flex ">
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
        </div>
        <div class="col-lg-5">
            <div class="contact-us__form">
                <div class="form p-5" style="background-color: #ffffff; border-radius: 15px !important;">
                    <form action="/form" method="POST">
                        <!-- Select A Service -->
                        <div class="row">
                            <div class="col-md-12">
                                <label for="service" class="form-label my-3">Select A Service</label>
                            </div>
                            <div class="cold-md-12">
                                <select name="" id="" class="form-control select-container select-i"></select>
                            </div>
                        </div>
                
                        <!-- Company -->
                        <div class="row">
                            <div class="col-md-12">
                                <label for="company" class="form-label my-3">Company</label>
                            </div>
                            <div class="col-md-12">
                                <input type="text" class="form-control">
                            </div>
                        </div>
                
                        <!-- Mobile Phone & Email -->
                        <div class="row">
                            <div class="col-md-6">
                                <label for="Mobile Phone" class="form-label my-3">Mobile Phone</label>
                                <input type="text" class="form-control">
                            </div>
                
                            <div class="col-md-6">
                                <label for="Email" class="form-label my-3">Email</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                
                        <!-- Total Employee -->
                        <div class="row">
                            <div class="col-md-12">
                                <label for="Total Employee" class="form-label my-3">Total Employee</label>
                            </div>
                
                            <div class="col-md-12">
                                <select name="" id="" class="form-control select-i">
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
                                <input type="text" class="form-control">
                            </div>
                        </div>
                
                        <!-- Message -->
                        <div class="row">
                            <div class="col-md-12">
                                <label for="Message" class="form-label my-3">Message</label>
                            </div>
                            <div class="col-md-12">
                                <textarea name="" id="" cols="30" rows="10" class="form-control"></textarea>
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
                        <div class="row my-3 text-center w-100">
                            <div class="row my-3 text-center w-100">
                                <button class="g-recaptcha btn rounded-pill text-light" data-sitekey=" 6LeBJrsaAAAAACYPjvJSKwSZFaIB6e3Q0Wyn-apw" data-callback='onSubmit' data-action='submit' style="background-color: #5d2e8f;">Tell us your problem</button>
                        </div>
                
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>


<script>
    fetch('json/solution.json')
        .then(response => response.json())
        .then(response => {
            let getService = []
            let optionEl = ''

            response.forEach((item, index) => {
                optionEl +=
                    `
                    <option value="${item.productName}">${item.productName}</option>
                    `
            })
            document.querySelector('.select-container').innerHTML = optionEl
        })
</script>
<script>
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
</script>
<!-- <script src="https://www.google.com/recaptcha/api.js"></script> -->
<script>
    function onSubmit(token) {
        document.getElementById("demo-form").submit();
    }
</script>