<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SanPhamModel extends Model
{
    use HasFactory;
    protected $table = 'san_pham';
    protected $filltable = ['MaSP','MaLoaiSP','MaNCC','TenSP','Hinh','MoTa','SoLuong','Gia','GiaBan','TrangThai','updated_at'];
}
