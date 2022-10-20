<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChiTietHoaDonModel extends Model
{
    use HasFactory;
    protected $table = 'chi_tiet_hoa_don';
    protected $filltable = ['MaHD','MaSP','SoLuong','DonGia','ThanhTien'];
}
