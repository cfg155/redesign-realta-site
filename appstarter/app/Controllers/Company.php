<?php

namespace App\Controllers;

use function App\Models\CheckCookieAgreement;

class Company extends BaseController
{
    public function index()
    {
        setcookie('visit', 'company,' . setDate());
        CheckCookieAgreement();
        visitCookie();

        return view('company');
    }
}
