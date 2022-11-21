<?php

use App\Http\Controllers\ChiTietQuyenController;
use App\Http\Controllers\DanhGiaSanPhamController;
use App\Http\Controllers\HoaDonController;
use App\Http\Controllers\KhachHangController;
use App\Http\Controllers\LoaiSanPhamController;
use App\Http\Controllers\NhaCungCapController;
use App\Http\Controllers\NhanVienController;
use App\Http\Controllers\PhieuNhapHangController;
use App\Http\Controllers\QuyenTaiKhoanController;
use App\Http\Controllers\ResetPasswordController;
use App\Http\Controllers\SanPhamController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

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
Route::resource('tk',UserController::class);
Route::post('user/login', [UserController::class, 'login']);
Route::post('user/register', [UserController::class, 'register']);
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// API reset, forgot password
Route::post('reset-password', [ResetPasswordController::class, 'sendMail']);
Route::put('reset-password/{token}', [ResetPasswordController::class, 'reset']);

// API sản phẩm
Route::resource('sp',SanPhamController::class);
Route::get('chitietsp/{id}', [SanPhamController::class, 'detail']);


// API nhân viên
Route::resource('nvien',NhanVienController::class);
Route::get('chitietnvien/{id}', [NhanVienController::class, 'detail']);

// API khách hàng
Route::resource('khhang',KhachHangController::class);
Route::get('chitietkhhang/{id}', [KhachHangController::class, 'detail']);

// API loại sản phẩm
Route::resource('lspham',LoaiSanPhamController::class);
Route::get('chitietlspham/{id}', [LoaiSanPhamController::class, 'detail']);

// API quyền tài khoản
Route::resource('qtkhoan',QuyenTaiKhoanController::class);
Route::get('chitietquyen/{id}', [ChiTietQuyenController::class, 'detailfunction']);

// API phiếu nhập hàng
Route::resource('pnhang',PhieuNhapHangController::class);

// API nhà cung cấp
Route::resource('nccap',NhaCungCapController::class);
Route::get('chitietncc/{id}', [NhaCungCapController::class, 'detail']);

// API hóa đơn
Route::resource('hdon',HoaDonController::class);

// API đánh giá sản phẩm
Route::resource('dgspham',DanhGiaSanPhamController::class);

