<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- Boostrap cdn -->
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <!-- jquery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

</head>

<body>
    <div class="container">
        <h1 class="pt-5">Cookie dashboard</h1>
        <table class="table">
            <tr>
                <td>
                    <h4>Page Visitor</h4>
                </td>
            </tr>
            <tr>
                <th scope="col">Total user has visited</th>
                <td id="total_visitor">Unknown</td>
            </tr>
            <tr>
                <th scope="col">Most Visited Page</th>
                <td id="most_visited_page">Unknown</td>
            </tr>
            <tr>
                <th scope="col">Most Used Browser</th>
                <td id="most_used_browser">Unknown</td>
            </tr>
            <tr>
                <th scope="col">Most Used Devices</th>
                <td id="most_used_device">Unknown</td>
            </tr>
        </table>

        <div class="user-data__wrapper row">
            <div class="general-data__wrapper col-md-6">
                <h4>User Data</h4>
                <table class="table user-data">
                    <tr>
                        <th>UserId</th>
                        <th>Date Accepted</th>
                    </tr>
                </table>
            </div>

            <div class="detail-data__wrapper col-md-6">
                <h4>User Detail Data</h4>
                <table class="table user-detail-data">
                    <tr>
                        <th>UserId</th>
                        <th>IP Address</th>
                    </tr>

                    <tr>
                        <td id="userId"></td>
                        <td id="userIp">Pleace choose userId in UserData Table</td>
                    </tr>
                </table>
                <h4>Visit Data</h4>
                <table class="table visit-data">
                    <tr>
                        <th>Page Name</th>
                        <th>Browser Type</th>
                        <th>Visit Date</th>
                    </tr>
                </table>
            </div>
        </div>

    </div>
</body>

</html>
<script>
    let userDataContainer = ''
    $.ajax({
        url: `CookieDashboard/getUserData/1`,
        dataType: 'json',
        success: function(data, status, xhr) {
            // console.log(data)

            let dashboardData = {
                visitor: data.visitor_page,
                device: data.device_type,
                user: data.user_data
            }

            console.log(dashboardData)

            function setVisitorData() {
                $('#total_visitor').html(dashboardData.visitor.visit_number)
                $('#most_visited_page').html(dashboardData.visitor.page_name)
                $('#most_used_browser').html(dashboardData.visitor.browser_type)
                $('#most_used_device').html(dashboardData.device)
            }

            setVisitorData()

            dashboardData.user.forEach(data => {
                userDataContainer +=
                    `
                    <tr>
                        <td><button class="btn btn-primary text-black" onclick="getUserDetailData(${data.userId})">${data.userId}</button></td>
                        <td>${data.date_created}</td>
                    </tr>
                    `
            });
            $('.user-data').append(userDataContainer)
        }
    })

    function getUserDetailData(userId) {
        $.ajax({
            url: 'CookieDashboard/getUserDetailData/' + userId,
            dataType: 'json',
            success: function(data, status, xhr) {
                $('#userId').html(data.userId);
                $('#userIp').html(data.userIp);
            }
        })
        let userVisitContainer = ''
        $('.visit-data tr:not(:first-child)').remove()
        $.ajax({
            url: 'CookieDashboard/getVisitData/' + userId,
            dataType: 'json',
            success: function(data, status, xhr) {
                data.forEach(data => {
                    userVisitContainer +=
                        `
                        <tr>
                            <td>${data.page_name}</td>
                            <td>${data.browser_type}</td>
                            <td>${data.visit_date}</td>
                        <tr>
                    `
                });
                $('.visit-data').append(userVisitContainer)
            }
        })
    }
</script>