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

// API tài khoản
Route::resource('tk',TaiKhoanController::class);

// API sản phẩm
Route::resource('sp',SanPhamController::class);
Route::get('chitietsp/{id}', [SanPhamController::class, 'detail']);


// API nhân viên
Route::resource('nvien',NhanVienController::class);

// API khách hàng
Route::resource('khhang',KhachHangController::class);

// API loại sản phẩm
Route::resource('lspham',LoaiSanPhamController::class);

// API quyền tài khoản
Route::resource('qtkhoan',QuyenTaiKhoanController::class);

// API phiếu nhập hàng
Route::resource('pnhang',PhieuNhapHangController::class);

// API nhà cung cấp
Route::resource('nccap',NhaCungCapController::class);

// API hóa đơn
Route::resource('hdon',HoaDonController::class);

// API đánh giá sản phẩm
Route::resource('dgspham',DanhGiaSanPhamController::class);
