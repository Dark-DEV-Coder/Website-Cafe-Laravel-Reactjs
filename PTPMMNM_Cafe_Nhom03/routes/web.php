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
    return view('welcome');
});

Route::get('/login_admin.blade.php', function () {
    return view('login_admin');
});

Route::get('/home_admin.blade.php', function () {
    return view('home_admin');
});
// Route::get('/admin/home','App\Http\Controllers\HomeAdminController@HomeAdmin');

