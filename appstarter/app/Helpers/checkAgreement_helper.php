<?php

namespace App\Models;

use Exception;

function setDevice()
{
    // Set Device
    $agent = new \CodeIgniter\HTTP\UserAgent;
    $device = '';

    if ($agent->isMobile()) {
        $device = 'Mobile';
    } else {
        $device = $agent->getPlatform();
    }

    return $device;
}

function setUserDetail_IP()
{
    $ip = file_get_contents('https://api.ipify.org');

    return $ip;
}

function generateUserId($result)
{
    if ($result != 'err') {
        return $result['userId'] + 1;
    }

    return 0;
}

function CheckCookieAgreement()
{
    helper('cookie');
    if (get_cookie('cookieAgreement') == null || get_cookie('cookieAgreement') == 'decline') {
        return false;
    }

    if (get_cookie('userid') == -1) {
        // Setup Database Connection
        $db = \Config\Database::connect('cookiedb', true);

        // setup table
        $builder = $db->table('user');
        $query = $builder->select('userId')->orderBy('userId', 'DESC')->limit(1)->get();
        $result = '';

        try {
            $result = $query->getResultArray()[0];
        } catch (Exception $e) {
            // d($e->getMessage());
            $result = 'err';
        }

        $userData = [
            "userId" => generateUserId($result),
            "date_created" => setDate()
        ];

        if ($builder->insert($userData)) {
            // setup table for detail_user
            $builder = $db->table('detail_user');

            // detail_user data
            $detailUserData = [
                "userId" => $userData['userId'],
                "userIp" => strval(setUserDetail_IP()),
                "device_type" => setDevice()
            ];

            $builder->insert($detailUserData);

            // Store userid to Cookie
            setcookie('userid', encryptUserId($userData['userId']));
        }
    }
}
