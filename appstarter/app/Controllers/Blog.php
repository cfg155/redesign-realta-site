<?php

namespace App\Controllers;

class Blog extends BaseController
{
    public function index()
    {
        return view('blog');
    }

    public function detail($id)
    {
        return view('detail');
    }
}
