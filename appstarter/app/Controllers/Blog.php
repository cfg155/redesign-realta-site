<?php

namespace App\Controllers;

use App\Models\BlogDetailModel;
use App\Models\BlogImgModel;
use App\Models\BlogModel;
use FFI\CData;
use function App\Models\CheckCookieAgreement;

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
        setcookie('visit', 'blog,' . setDate());
        CheckCookieAgreement();
        visitCookie();

        $db = \Config\Database::connect();
        $getPopularData = $db->query('SELECT id,title,thumbnail_img,introtext,hits,modified_date,min_read FROM `blog` ORDER BY `hits` DESC LIMIT 4');
        $totalData = [
            'dataSize' => sizeof($this->blogModel->findAll()),
            'popularData' => $getPopularData->getResultArray()
        ];

        // d($totalData);
        return view('blog', $totalData);
    }

    public function getData($limit, $category)
    {
        $db = \Config\Database::connect();
        function setQuery($category, $db, $limit)
        {
            if ($category > 0) {
                return $db->query('SELECT `id`,`thumbnail_img`,`category`,`title`,`introtext`,`modified_date`,`min_read` FROM `blog` WHERE  `category` = ' . $category . ' ORDER BY `modified_date` DESC LIMIT ' . $limit . ',5 ');
            } else {
                return $db->query('SELECT `id`,`thumbnail_img`,`category`,`title`,`introtext`,`modified_date`,`min_read` FROM `blog` ORDER BY `modified_date` DESC LIMIT ' . $limit . ',5 ');
            }
        }

        echo json_encode(setQuery($category, $db, $limit)->getResultArray());
    }

    public function detail($id)
    {
        $db = \Config\Database::connect();
        $getPopularData = $db->query('SELECT id,title,thumbnail_img FROM `blog` ORDER BY `hits` DESC LIMIT 4');
        $data = [
            'blogData' => $this->blogModel->find($id),
            'popularData' => $getPopularData->getResultArray()
        ];
        // dd($data);
        return view('detailBlog', $data);
    }
}
