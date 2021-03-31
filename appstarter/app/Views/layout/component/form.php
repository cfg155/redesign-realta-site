<style>
    html {
        font-size: 16px;
    }

    .form {
        background-color: #ffffff;
        padding: 3em;
        box-sizing: border-box;
        border-radius: 25px;
        box-shadow: 0px 7px 5px 0px rgba(0, 0, 0, 0.09);
    }

    table tr td * {
        width: 100%;
        margin-bottom: 1em;
    }

    table tr td input,
    table tr td select {
        height: 2.5em;
        border-radius: 10px;
        border: 1px solid #CECECE;
        background-color: #F2F2F5;
        padding: 0 1em;
    }

    table tr td input,
    table tr td textarea {
        padding: 1em;
        box-sizing: border-box;
        resize: none;
        border: 1px solid #CECECE;
        background-color: #F2F2F5;
        border-radius: 10px;
    }

    .checkbox {
        display: flex;
        padding: 2em 0;
    }

    .checkbox--square {
        margin-right: 1em !important;
    }

    .checkbox--text a {
        text-decoration: none;
        padding: 0 .6em;
    }

    .submit-table tr td {
        width: 100%;
        text-align: center;
        background-color: #5d2e8f;
        padding: 1em 0;
        border-radius: 50px;
    }

    .submit-table tr td a {
        text-decoration: none;
        color: #ffffff;
    }
</style>

<div class="form">
    <form action="" method="POST">
        <table>
            <!-- Select A Service -->
            <tr>
                <td colspan="2" class="label"><label for="service">Select A Service</label></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2">
                    <select name="" id="">
                        <option value="Test">Test</option>
                    </select>
                </td>
                <td></td>
            </tr>

            <!-- Company -->
            <tr>
                <td colspan="2" class="label"><label for="company">Company</label></td>
                <td></td>
            </tr>

            <tr>
                <td colspan="2"><input type="text"></td>
                <td></td>
            </tr>

            <!-- Mobile Phone & Email -->
            <tr>
                <td><label for="mobile phone" class="label">Mobile Phone</label></td>
                <td><label for="email">Email</label></td>
            </tr>

            <tr>
                <td><input type="text" style="width: 90%;"></td>
                <td><input type="text" style="width: 100%;"></td>
            </tr>

            <!-- Total Employee -->
            <tr>
                <td colspan="2" class="label"><label for="total employee">Total Employee</label></td>
                <td></td>
            </tr>

            <tr>
                <td colspan="2" class="label"><input type="number"></td>
                <td></td>
            </tr>

            <!-- Fullname -->
            <tr>
                <td colspan="2" class="label"><label for="fullname">Full Name</label></td>
                <td></td>
            </tr>

            <tr>
                <td colspan="2" class="label"><input type="text"></td>
                <td></td>
            </tr>

            <!-- Message -->
            <tr>
                <td colspan="2" class="label"><label for="message">Message</label></td>
                <td></td>
            </tr>

            <tr>
                <td colspan="2" class="label"><textarea name="" id="" cols="30" rows="10"></textarea></td>
                <td></td>
            </tr>
        </table>
        <div class="checkbox">
            <div class="checkbox--square">
                <input type="checkbox">
            </div>
            <div class="checkbox--text">
                Before submitting please read our <br><a href="#">Term and Condition</a>,<a href="#">Privacy Policy</a>
            </div>
        </div>
        <table class="submit-table">
            <tr>
                <td colspan="2"><a href="#">Tell us your problem</a></td>
                <td></td>
            </tr>
        </table>
    </form>
</div>