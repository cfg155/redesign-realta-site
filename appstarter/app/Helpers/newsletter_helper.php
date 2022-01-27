<?php

function checkNewsLetter($userid)
{
    $db = \Config\Database::connect('cookiedb', true);
    $builder = $db->table('detail_user');
    $query = $builder->select('email')->where('userId = ' . $userid)->get();
    $result = $query->getResultArray()[0];

    if ($result['email'] != null) {
        return false;
    }

    return true;
}

function newsletter()
{
    helper('cookie');
    if (get_cookie('cookieAgreement') == 'agree' && get_cookie('userid') != -1) {
        if (checkNewsLetter(decryptUserId(get_cookie('userid')))) {
            setcookie('newsletter', 'not_set');
        }
    }

    if (get_cookie('email') != null & get_cookie('newsletter') == 'set') {
        $db = \Config\Database::connect('cookiedb', true);
        $builder = $db->table('detail_user');

        $email = get_cookie('email');
        $query = $builder->set("email", $email)->where("userId", decryptUserId(get_cookie('userid')))->update();
    }
}
