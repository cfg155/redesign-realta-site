<?php

namespace App\Controllers;

use function App\Models\CheckCookieAgreement;

class Solution extends BaseController
{
    public function index()
    {
        setcookie('visit', 'solution,' . setDate());
        CheckCookieAgreement();
        visitCookie();

        return view('solution');
    }

    public function siap()
    {
        return view('solution-subpage\siap-subpage');
    }

    public function crm()
    {
        return view('solution-subpage\crm-subpage');
    }

    public function eam()
    {
        return view('solution-subpage\eam-subpage');
    }

    public function erp()
    {
        return view('solution-subpage\erp-subpage');
    }

    public function golf()
    {
        return view('solution-subpage\golf-subpage');
    }

    public function hotel()
    {
        return view('solution-subpage\hotel-subpage');
    }

    public function itam()
    {
        return view('solution-subpage\itam-subpage');
    }

    public function itsm()
    {
        return view('solution-subpage\itsm-subpage');
    }

    public function property()
    {
        return view('solution-subpage\property-subpage');
    }

    public function realpcr()
    {
        return view('solution-subpage\realpcr-subpage');
    }

    public function realrose()
    {
        return view('solution-subpage\realrose-subpage');
    }

    public function realvioleds()
    {
        return view('solution-subpage\realvioleds-subpage');
    }
}
