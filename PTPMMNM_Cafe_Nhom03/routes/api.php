<?php

use App\Http\Controllers\ChiTietHoaDonController;
use App\Http\Controllers\ChiTietPhieuNhapController;
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
Route::get('sptheoncc/{id}', [SanPhamController::class, 'SanPhamNCC']);
Route::get('/sp/page/{id}', [SanPhamController::class, 'Page']);


// API nhân viên
Route::resource('nvien',NhanVienController::class);
Route::get('chitietnvien/{id}', [NhanVienController::class, 'detail']);

// API khách hàng
Route::resource('khhang',KhachHangController::class);
Route::get('chitietkhhang/{id}', [KhachHangController::class, 'detail']);
Route::post('xacnhanthongtin', [KhachHangController::class, 'CheckInfor']);

// API loại sản phẩm
Route::resource('lspham',LoaiSanPhamController::class);
Route::get('chitietlspham/{id}', [LoaiSanPhamController::class, 'detail']);

// API quyền tài khoản
Route::resource('qtkhoan',QuyenTaiKhoanController::class);
Route::get('chitietqtkhoan/{id}', [QuyenTaiKhoanController::class, 'detail']);
Route::get('dschucnang', [QuyenTaiKhoanController::class, 'ListChucNang']);

// API Chi tiết quyền tài khoản
Route::resource('ctqtkhoan',ChiTietQuyenController::class);
Route::get('chitietquyen/{id}', [ChiTietQuyenController::class, 'detailfunction']);
Route::post('xoachitietqtkhoan', [ChiTietQuyenController::class, 'DeleteDetail']);

// API phiếu nhập hàng
Route::resource('pnhang',PhieuNhapHangController::class);
Route::get('chitietpnhang/{id}', [PhieuNhapHangController::class, 'detail']);

// API Chi tiết phiếu nhập hàng
Route::resource('ctpnhang',ChiTietPhieuNhapController::class);
Route::get('chitietphieunhap/{id}', [ChiTietPhieuNhapController::class, 'detail']);
Route::post('xoachitietphieunhap', [ChiTietPhieuNhapController::class, 'DeleteDetail']);

// API nhà cung cấp
Route::resource('nccap',NhaCungCapController::class);
Route::get('chitietncc/{id}', [NhaCungCapController::class, 'detail']);

// API hóa đơn
Route::resource('hdon',HoaDonController::class);
Route::get('chitiethdon/{id}', [HoaDonController::class, 'detail']);
Route::post('thongke', [HoaDonController::class, 'ThongKe']);
Route::get('thongkespnoibat', [HoaDonController::class, 'ThongKeSPNoiBat']);

// API Chi tiết hóa đơn
Route::resource('cthdon',ChiTietHoaDonController::class);
Route::get('chitiethoadon/{id}', [ChiTietHoaDonController::class, 'detail']);

// API đánh giá sản phẩm
Route::resource('dgspham',DanhGiaSanPhamController::class);
Route::get('chitietdgspham/{id}', [DanhGiaSanPhamController::class, 'detail']);

