<?php

namespace App\Controllers;

class FormControl extends BaseController
{
    public function newsletter()
    {
        helper('cookie');
        $db = \Config\Database::connect('cookiedb', true);
        $builder = $db->table('detail_user');

        $builder->set("email", $_POST['email'])->where("userId", decryptUserId(get_cookie('userid')))->update();

        return redirect()->to($_SERVER['HTTP_REFERER']);
    }
}
