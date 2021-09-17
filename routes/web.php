<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('main');
});
//List of pokemon
Route::get('/list', function() {
    return view('list');
});
//Pokemon Detail
Route::get('/list/{id}', function($id) {
    $data['id'] = $id;
    return view('detail', $data);
});

//List of my pokemon after success capture that pokemon
Route::get('/my-pokemon', function() {
    return view('myPokemon');
});
