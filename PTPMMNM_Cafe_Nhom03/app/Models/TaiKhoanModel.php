<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaiKhoanModel extends Model
{
    use HasFactory;
    protected $table ='tai_khoan';
    protected $filltable = ['MaTK','MaQuyen','TenDangNhap','MatKhau','TrangThai'];
}
