<?php

namespace App\Controllers;

use function App\Models\CheckCookieAgreement;

class CookieDashboard extends BaseController
{
    protected $db;

    public function __construct()
    {
        $this->db = \Config\Database::connect('cookiedb', true);
    }

    public function index()
    {
        return view('cookie-dashboard');
    }

    public function getUserData($page)
    {
        $query = $this->db->query("SELECT * FROM user LIMIT 10");
        $userData = array();
        $i = 0;
        foreach ($query->getResultArray() as $row) {
            $userData[$i] = $row;
            $i++;
        }

        $query = $this->db->query(
            "SELECT page_name, browser_type,COUNT(userId) AS visit_number
            FROM visit
            GROUP BY page_name, browser_type
            ORDER BY COUNT(page_name) DESC,COUNT(browser_type) DESC 
            LIMIT 1"
        );

        $visitor_page = [
            "page_name" => $query->getResultArray()[0]['page_name'],
            "browser_type" => $query->getResultArray()[0]['browser_type'],
            "visit_number" => $query->getResultArray()[0]['visit_number'],
        ];

        $query = $this->db->query(
            "
            SELECT device_type,COUNT(device_type) as mostUsedPlatform
            FROM detail_user
            GROUP BY device_type
            ORDER BY COUNT(device_type) DESC 
            LIMIT 1
            "
        );

        echo json_encode(["visitor_page" => $visitor_page, "device_type" => $query->getResultArray()[0]['device_type'], "user_data" => $userData]);
    }

    public function getUserDetailData($userId)
    {
        $query = $this->db->query("SELECT * FROM detail_user WHERE userId = '$userId'");
        echo json_encode($query->getResultArray()[0]);
    }

    public function getVisitData($userId)
    {
        $query = $this->db->query("SELECT * FROM visit WHERE userId = $userId LIMIT 10");
        echo json_encode($query->getResultArray());
    }
}
