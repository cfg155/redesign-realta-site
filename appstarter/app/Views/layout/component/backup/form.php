<div class="form p-5" style="background-color: #ffffff; border-radius: 15px !important;">
    <form action="/form" method="POST">
        <?= csrf_field(); ?>
        <!-- Select A Service -->
        <div class="row">
            <div class="col-md-12">
                <label for="service" class="form-label my-3">Select A Service</label>
            </div>
            <div class="cold-md-12">
                <select name="" id="" class="form-control select-container">
                </select>
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
                <select name="" id="" class="form-control">
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

        <!-- Submit -->
        <div class="row my-3 text-center w-100">
            <button class="g-recaptcha btn rounded-pill text-light" data-sitekey=" 6LeBJrsaAAAAACYPjvJSKwSZFaIB6e3Q0Wyn-apw" data-callback='onSubmit' data-action='submit' style="background-color: #5d2e8f;">Tell us your problem</button>
        </div>

    </form>
</div>

<script>
    fetch('json/homepage.json')
        .then(response => response.json())
        .then(response => {
            let getService = []
            let optionEl = ''
            let productSection = response[0].productSection
            productSection.forEach((item, index) => {
                getService[index] = item.leftPanel.title
                optionEl +=
                    `
                    <option value="${item.leftPanel.title}">${item.leftPanel.title}</option>
                    `
            })
            document.querySelector('.select-container').innerHTML = optionEl
        })
</script>
<script src="https://www.google.com/recaptcha/api.js"></script>
<script>
    function onSubmit(token) {
        document.getElementById("demo-form").submit();
    }
</script>