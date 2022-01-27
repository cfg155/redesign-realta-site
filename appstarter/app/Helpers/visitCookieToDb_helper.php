<?php

use Config\UserAgents;

function insertToDB($visitData)
{
    $db = \Config\Database::connect('cookiedb', true);
    $builder = $db->table('visit');
    $builder->insert($visitData);
}

function getBrowserType()
{
    $userAgent = new \CodeIgniter\HTTP\UserAgent();
    $browser = $userAgent->getBrowser();

    return $browser;
}


function visitCookie()
{
    helper('cookie');

    if (get_cookie('cookieAgreement') == 'agree' && get_cookie('userid') != -1) {
        // get userid from cookie
        $useridCookie = get_cookie('userid');

        // get visit data from cookie
        $visitCookie = get_cookie('visit');

        // split visit data from cookie to array
        $visitSplitData = explode(',', $visitCookie);

        $visitData = [
            "userid" => decryptUserId($useridCookie),
            "page_name" => $visitSplitData[0],
            "browser_type" => getBrowserType(),
            "visit_date" => $visitSplitData[1]
        ];

        // insert data to table visit
        insertToDB($visitData);
    }
}
