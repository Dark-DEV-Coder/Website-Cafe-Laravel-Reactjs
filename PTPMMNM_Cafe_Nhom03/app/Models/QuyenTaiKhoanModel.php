<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuyenTaiKhoanModel extends Model
{
    use HasFactory;
    protected $table = 'quyen_tai_khoan';
    protected $filltable = ['MaQuyen','TenQuyen','TrangThai'];
}
