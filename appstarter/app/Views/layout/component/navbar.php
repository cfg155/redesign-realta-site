<style>
    nav {
        width: 95%;
        margin: auto;
        height: 15vh;
    }

    .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }


    .nav--links {
        display: flex;
        justify-content: space-between;
        text-decoration: none;
        width: 70%;
    }

    .nav--links a {
        text-decoration: none;
        color: black;
        display: flex;
        align-items: center;
    }

    .contact-us {
        text-decoration: none;
        padding: 1em 3em;
        background-color: #5d2e8f;
        color: white !important;
        border-radius: 50px;
    }

    .nav--switch {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #F3F3F3;
        width: 120px;
        height: 30px;
        position: relative;
        border-radius: 50px;
        margin-left: auto;
        box-sizing: border-box;
        padding: 0 20px;
    }

    .cur-lang {
        position: absolute;
    }
</style>

<nav>
    <!-- This is Navbar area -->
    <div class="nav">
        <img src="assets/LOGO-Realta-with-since-1983.png" alt="" class="nav--logo">
        <div class="nav--links">
            <a href="#" class="current">SOLUTIONS</a>
            <a href="#">COMPANY</a>
            <a href="#">SUPPORT</a>
            <a href="#">RESOURCES</a>
            <a href="#" class="contact-us">CONTACT US</a>
        </div>
    </div>
    <label for="switch" class="nav--switch">
        <div class="cur-lang"></div>
        <div class="ina-lang">INA</div>
        <div class="en-lang">ENG</div>
    </label>
</nav>