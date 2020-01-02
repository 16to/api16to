<?php
require 'Slim/Slim.php';
require '16to/16to.php';
//exit(0);
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim(array(
    "debug"=>false
));
$app->get(
    '/',
    function(){
        echo "";
    }
);

$app->get(
    '/special_list',
    function(){
        special_all_4();
    }
);
$app->get(
    '/special_detail/:id',
    function($id){
        special_detail($id);
    }
);
$app->get(
    '/special_all/',
    function() use($app){
        $s=$app->request->params("s");
        if($s=="type0"){
            special_all_type(0);
        }
        elseif($s=="type1"){
            special_all_type(1);
        }
        elseif($s=="type2"){
            special_all_type(2);
        }
        else{
            special_all();
        }
    }
);
$app->get(
    '/skill_tag',
    function(){
        skill_tag();
    }
);
$app->get(
    '/skill_type',
    function(){
        skill_type();
    }
);
$app->get(
    '/skill_list',
    function(){
        skill_all_5();
    }
);
$app->get(
    '/skill_list10',
    function(){
        skill_all_10();
    }
);
$app->get(
    '/skill_all/',
    function() use($app){
        $s=$app->request->params("s");
        $i=$app->request->params("i");
        if($s=="type"){
            skill_all_type($i);
        }
        elseif ($s=="tag") {
            skill_all_tag($i);
        }
        elseif ($s=="hot") {
            skill_all_hot();
        }
        else{
            skill_all();
        }

    }
);
$app->get(
    '/skill_detail/:id',
    function($id){
        skill_detail($id);
    }
);
$app->get(
    '/works_all',
    function() {
        works_all();
    }
);
$app->get(
    '/system_tree',
    function() {
        tree_all();
    }
);
$app->get(
    '/search/',
    function() use($app){
        $s=$app->request->params("s");
        search_all($s);
    }
);





// // POST route
// $app->post(
//     '/post',
//     function () {
//         echo 'This is a POST route';
//     }
// );

// // PUT route
// $app->put(
//     '/put',
//     function () {
//         echo 'This is a PUT route';
//     }
// );

// // PATCH route
// $app->patch('/patch', function () {
//     echo 'This is a PATCH route';
// });

// // DELETE route
// $app->delete(
//     '/delete',
//     function () {
//         echo 'This is a DELETE route';
//     }
// );

$app->run();
?>