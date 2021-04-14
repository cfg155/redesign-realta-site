<?php

namespace App\Controllers;

class Solution extends BaseController
{
    public function index()
    {
        return view('solution');
    }

    public function siap()
    {
        return view('siap-subpage');
    }
}
