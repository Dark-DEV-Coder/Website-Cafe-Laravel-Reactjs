<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KhachHangModel extends Model
{
    use HasFactory;
    protected $table = 'khach_hang';
    protected $filltable = ['MaKH','MaTK','HoKH','TenKH','NgaySinh','DiaChi','SoDienThoai','Email','TrangThai','updated_at'];
}
