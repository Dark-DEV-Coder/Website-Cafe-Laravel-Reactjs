<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HoaDonModel extends Model
{
    use HasFactory;
    protected $table = 'hoa_don';
    protected $filltable = ['MaHD','MaNV','MaKH','HoKH','TenKH',
    'NgaySinh','DiaChi','SoDienThoai','Email','NgayLapHD','TongTien','TrangThai','updated_at'
    ];
}
