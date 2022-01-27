<?php

namespace App\Controllers;

use function App\Models\CheckCookieAgreement;

class Home extends BaseController
{
	public function index()
	{
		setcookie('visit', 'homepage,' . setDate());
		CheckCookieAgreement();
		visitCookie();
		newsletter();

		return view('index');
	}
}
