<?php

namespace Config;

// Create a new instance of our RouteCollection class.
$routes = Services::routes();

// Load the system's routing file first, so that the app and ENVIRONMENT
// can override as needed.
if (file_exists(SYSTEMPATH . 'Config/Routes.php')) {
	require SYSTEMPATH . 'Config/Routes.php';
}

/**
 * --------------------------------------------------------------------
 * Router Setup
 * --------------------------------------------------------------------
 */
$routes->setDefaultNamespace('App\Controllers');
$routes->setDefaultController('Home');
$routes->setDefaultMethod('index');
$routes->setTranslateURIDashes(false);
$routes->set404Override();
$routes->setAutoRoute(true);

/*
 * --------------------------------------------------------------------
 * Route Definitions
 * --------------------------------------------------------------------
 */

// We get a performance increase by specifying the default
// route since we don't have to scan directories.
$routes->get('/', 'Home::index');
$routes->get('/solution', 'Solution::index');
$routes->get('/siap', 'Solution::siap');
$routes->get('/crm', 'Solution::crm');
$routes->get('/eam', 'Solution::eam');
$routes->get('/erp', 'Solution::erp');
$routes->get('/golf', 'Solution::golf');
$routes->get('/hotel', 'Solution::hotel');
$routes->get('/itam', 'Solution::itam');
$routes->get('/itsm', 'Solution::itsm');
$routes->get('/property', 'Solution::property');
$routes->get('/realpcr', 'Solution::realpcr');
$routes->get('/realrose', 'Solution::realrose');
$routes->get('/realvioleds', 'Solution::realvioleds');

$routes->get('/blog', 'Blog::index');
$routes->get('/blog/detail/(:segment)', 'Blog::detail/$1');
$routes->get('/career', 'Career::index');
$routes->get('/company', 'Company::index');
$routes->get('/contact', 'Contact::index');

$routes->get('/form', 'Form::index');

$routes->get('/cookie-dashboard', 'CookieDashboard::index');

/*
 * --------------------------------------------------------------------
 * Additional Routing
 * --------------------------------------------------------------------
 *
 * There will often be times that you need additional routing and you
 * need it to be able to override any defaults in this file. Environment
 * based routes is one such time. require() additional route files here
 * to make that happen.
 *
 * You will have access to the $routes object within that file without
 * needing to reload it.
 */
if (file_exists(APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php')) {
	require APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php';
}
