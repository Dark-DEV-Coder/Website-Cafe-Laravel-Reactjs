<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NhanVienModel extends Model
{
    use HasFactory;
    protected $table = 'nhan_vien';
    protected $filltable = ['MaNV','MaTK','HoNV','TenNV','NgaySinh','GioiTinh','DiaChi','SoDienThoai','Email','Luong','TrangThai','updated_at'];
}
