<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LoaiSanPhamModel extends Model
{
    use HasFactory;
    protected $table = 'loai_sp';
    protected $filltable = ['MaLoaiSP','TenLoai','TrangThai','updated_at'];
}
