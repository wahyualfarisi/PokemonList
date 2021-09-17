<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/list', 'App\Http\Controllers\api\Pokemon@index');
Route::get('/list/{id}', 'App\Http\Controllers\api\Pokemon@detail');
Route::get('/random', 'App\Http\Controllers\api\Pokemon@random');