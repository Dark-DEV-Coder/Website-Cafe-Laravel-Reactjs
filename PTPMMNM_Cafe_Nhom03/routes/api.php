<?php

use App\Http\Controllers\DanhGiaSanPhamController;
use App\Http\Controllers\HoaDonController;
use App\Http\Controllers\KhachHangController;
use App\Http\Controllers\LoaiSanPhamController;
use App\Http\Controllers\NhaCungCapController;
use App\Http\Controllers\NhanVienController;
use App\Http\Controllers\PhieuNhapHangController;
use App\Http\Controllers\QuyenTaiKhoanController;
use App\Http\Controllers\SanPhamController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaiKhoanController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('tk',TaiKhoanController::class);
Route::resource('sp',SanPhamController::class);
Route::resource('nvien',NhanVienController::class);
Route::resource('khhang',KhachHangController::class);
Route::resource('lspham',LoaiSanPhamController::class);
Route::resource('qtkhoan',QuyenTaiKhoanController::class);
Route::resource('pnhang',PhieuNhapHangController::class);
Route::resource('nccap',NhaCungCapController::class);
Route::resource('hdon',HoaDonController::class);
Route::resource('dgspham',DanhGiaSanPhamController::class);