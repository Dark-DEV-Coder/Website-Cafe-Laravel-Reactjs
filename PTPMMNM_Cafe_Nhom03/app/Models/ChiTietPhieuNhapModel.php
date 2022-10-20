<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChiTietPhieuNhapModel extends Model
{
    use HasFactory;
    protected $table = 'chi_tiet_phieu_nhap';
    protected $filltable = ['MaPNH','MaSP','SoLuong','DonGia','ThanhTien'];
}
