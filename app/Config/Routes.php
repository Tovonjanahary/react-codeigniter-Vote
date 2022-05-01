<?php

namespace Config;

// Create a new instance of our RouteCollection class.
$routes = Services::routes();

// Load the system's routing file first, so that the app and ENVIRONMENT
// can override as needed.
if (file_exists(SYSTEMPATH . 'Config/Routes.php')) {
    require SYSTEMPATH . 'Config/Routes.php';
}

/*
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

// eleves routes:
$routes->get("/eleves", 'ElevesController::index');
$routes->match(['post','get'], '/creerEleve', 'ElevesController::creerEleve');
$routes->match(['post','get'], '/afficher_simple_eleve/(:num)', 'ElevesController::afficher_simple_eleve/$1');
$routes->match(['post','get'], '/showCount/(:num)', 'ElevesController::showCount/$1');
$routes->patch('/signup/(:any)', 'ElevesController::signup/$1');
$routes->match(['post','get'], '/signin', 'ElevesController::signin');
$routes->delete('/supprimerEleve/(:num)', 'ElevesController::supprimerEleve/$1');
$routes->get('/afficherEleve', 'ElevesController::afficherEleve');
$routes->patch('/modifierPresident/(:num)', 'ElevesController::modifier_id_president/$1');

// president routes;
$routes->get("/afficherCandidat", 'CandidatsController::afficherCandidat');
$routes->get("/afficher_un_president/(:num)", 'CandidatsController::afficher_un_president/$1');
$routes->post("/ajouterCandidat", 'CandidatsController::creerCandidat');
$routes->delete('/supprimerPresident/(:num)', 'CandidatsController::supprimerCandidat/$1');
$routes->patch('/modifier_president/(:num)','CandidatsController::modifier_president/$1' );


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
