<style>
    .newsletterBox__wrapper {
        position: fixed;
        height: 250px;
        max-width: 500px;
        min-width: 500px;
        background-color: #fff;
        border-radius: 20px;
        padding: 25px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -1000%);
        z-index: 20;
        box-shadow: 0px 5px 10px 0px rgba(214, 214, 214, 1);
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* animation-delay: 5s;
        animation-fill-mode: forwards; */
    }

    @keyframes transitionDown {
        from {
            /* transform: translate(-50%, -50%); */
            transform: translate(-50%, -1000%);
        }

        to {
            transform: translate(-50%, -50%);
        }
    }

    @keyframes transitionUp {
        from {
            transform: translate(-50%, -50%);
        }

        to {
            transform: translate(-50%, -1000%);
        }
    }

    .newsletter-email {
        margin-right: 10px;
        border-top: none;
        border-left: none;
        border-right: none;
        border-radius: 0;
        border-bottom: 1px solid #000;
    }

    .newsletter-email:focus {
        outline: none;
    }

    .newsletterBox__wrapper h4 {
        letter-spacing: 3px;
        padding-bottom: 20px;
    }

    .newsletterBox__wrapper .btn-subscribe {
        background-color: #5D2E8F;
    }

    .newsletter-close__wrapper {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
        border-radius: 100%;
        box-shadow: 0px 5px 10px 0px rgba(214, 214, 214, 1);

    }

    #mdiv {
        width: 25px;
        height: 25px;
        transform: scale(.5);
    }

    .mdiv {
        height: 25px;
        width: 2px;
        margin-left: 12px;
        background-color: black;
        transform: rotate(45deg);
        Z-index: 1;
    }

    .md {
        height: 25px;
        width: 2px;
        background-color: black;
        transform: rotate(90deg);
        Z-index: 2;
    }
</style>

<div class="newsletterBox__wrapper">
    <div class="newsletter-close__wrapper">
        <div id="mdiv">
            <div class="mdiv">
                <div class="md"></div>
            </div>
        </div>
    </div>
    <h4 class="text-center"><b>Subscribe to Our <br>Newsletter</b></h4>
    <form action="/formControl/newsletter" class="d-flex justify-content-center align-item-center" method="POST">
        <input type="text" name="email" class="form-control newsletter-email" placeholder="Your Email Address">
        <input type="submit" class="btn btn-subscribe py-2 px-3 text-decoration-none text-light rounded-pill btn-submit-email" value="Subscribe">
    </form>
</div>

<script>
    function getCookie(cName) {
        const name = cName + "=";
        const cDecoded = decodeURIComponent(document.cookie); //to be careful
        const cArr = cDecoded.split('; ');
        let res;
        cArr.forEach(val => {
            if (val.indexOf(name) === 0) res = val.substring(name.length);
        })
        return res
    }

    console.log(getCookie('newsletter'));
    if (getCookie('newsletter') != 'set') {
        document.querySelector('.newsletterBox__wrapper').style.animation = 'transitionDown 2s'
        document.querySelector('.newsletterBox__wrapper').style.animationDelay = '5s'
        document.querySelector('.newsletterBox__wrapper').style.animationFillMode = 'forwards'
    }

    document.querySelector('.btn-subscribe').addEventListener('click', () => {
        document.cookie = "newsletter=set"
    })

    document.querySelector('.newsletter-close__wrapper').addEventListener('click', (e) => {
        document.querySelector('.newsletterBox__wrapper').style.animation = 'transitionUp 5s'
    })
</script>