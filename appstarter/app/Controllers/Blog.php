<?php

namespace App\Controllers;

use App\Models\BlogModel;

class Blog extends BaseController
{
    protected $blogModel;
    public function __construct()
    {
        $this->blogModel = new BlogModel();
    }

    public function index()
    {
        return view('blog');
    }

    public function detail($id)
    {
        $blogData = $this->blogModel->find($id);
        $data = [
            'blogData' => $blogData
        ];
        // dd($data);
        return view('detailBlog', $data);
    }
}
