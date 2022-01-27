<?php

namespace App\Controllers;

use function App\Models\CheckCookieAgreement;

class Contact extends BaseController
{
    public function index()
    {
        setcookie('visit', 'contact,' . setDate());
        CheckCookieAgreement();
        visitCookie();

        return view('contact');
    }
}
