<?php

namespace App\Controllers;

use function App\Models\CheckCookieAgreement;

class Career extends BaseController
{
    public function index()
    {
        setcookie('visit', 'career,' . setDate());
        CheckCookieAgreement();
        visitCookie();

        return view('career');
    }
}
