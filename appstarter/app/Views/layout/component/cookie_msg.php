<link rel="stylesheet" href="css/cookie_consent.css">
<div class="cookie_msg">
    <div class="cookie_msg__wrapper">
        <span class="msg">We use cookies to optimize the website performance, content, and the overall experience.</span>
        <div class="cookie_button__wrapper">
            <button class="btn btn-agree" id="btn-agree"><b>Agree All Cookies</b></button>
            <button class="btn btn-decline" id="btn-decline">Decline</button>
        </div>
    </div>

</div>

<script>
    let cookieMSG = document.querySelector('.cookie_msg')
    let cookie = document.cookie.split(';')
        .map(cookie => cookie.split('='))
        .reduce((accumulator, [key, value]) =>
            ({
                ...accumulator,
                [key.trim()]: decodeURIComponent(value)
            }), {})

    let cookieUserId = cookie.userid
    let cookieAgreement = cookie.cookieAgreement

    // set cookie
    window.addEventListener('load', () => {

        function setAgreement() {
            document.getElementById('btn-agree').addEventListener('click', () => {
                document.cookie = 'cookieAgreement=agree'
                document.cookie = 'userid=-1'

                hideMSG()
            })

            document.getElementById('btn-decline').addEventListener('click', () => {
                document.cookie = 'cookieAgreement=decline'
                hideMSG()
            })

            function hideMSG() {
                cookieMSG.style.transform = 'translateY(300px)';
                window.top.location = window.top.location
            }

        }

        setAgreement()

        // set msg panel transisition
        function panel_msgTransition() {
            if (cookieAgreement != null) {
                cookieMSG.style.transform = 'translateY(300px)';
            } else {
                cookieMSG.style.transform = 'translateY(0)';
            }
        }

        panel_msgTransition()
    })
</script>