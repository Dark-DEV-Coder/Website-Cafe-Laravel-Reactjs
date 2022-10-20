<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DanhGiaSanPhamModel extends Model
{
    use HasFactory;
    protected $table = 'danh_gia_san_pham';
    protected $filltable = ['MaBinhLuan','MaTK','BinhLuan','SoSao','TrangThai'];
}
