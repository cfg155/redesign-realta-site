<?php

namespace App\Controllers;

use App\Models\BlogDetailModel;
use App\Models\BlogImgModel;
use App\Models\BlogModel;

/*
* important attr

blog
- content_id
- introtext
- created_time
- min_read

blog_detail
- content_id
- created_time
- title
- alias
- fulltext
- created_by
- hits
- min_read
- meta_key
- meta_desc
- meta_data

img
- id
- content_id
- img_category
- img_alt

*/

class Blog extends BaseController
{
    protected $blogModel;
    protected $blogDetailModel;
    protected $blogImgModel;
    public function __construct()
    {
        $this->blogModel = new BlogModel();
        $this->blogDetailModel = new BlogDetailModel();
        $this->blogImgModel = new BlogImgModel();
    }

    public function index()
    {
        $blogData = $this->blogModel->findAll();
        $blogDetailData = $this->blogDetailModel->findAll();
        $blogImgData = $this->blogImgModel->findAll();
        // dd($blogData, $blogDetailData, $blogImgData);
        $data = [
            'blogData' => $blogData,
            'blogDetailData' => $blogDetailData,
            'blogImgData' => $blogImgData
        ];

        dd($data);
        return view('blog', $data);
    }

    public function detail($id)
    {
        $blogData = $this->blogModel->find($id);
        $data = [
            'blogData' => $blogData
        ];
        // dd($blogData);
        return view('detailBlog', $data);
    }
}
