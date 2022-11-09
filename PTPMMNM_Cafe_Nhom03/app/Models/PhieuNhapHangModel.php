<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PhieuNhapHangModel extends Model
{
    use HasFactory;
    protected $table = 'phieu_nhap_hang';
    protected $filltable = ['MaPNH','MaNV','MaNCC','NgayNhapHang','TongTien','TrangThai','updated_at'];
}
