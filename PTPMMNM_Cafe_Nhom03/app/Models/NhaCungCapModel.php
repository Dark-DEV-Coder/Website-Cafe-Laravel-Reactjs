<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NhaCungCapModel extends Model
{
    use HasFactory;
    protected $table = 'nha_cung_cap';
    protected $filltable = ['MaNCC','TenNCC','DiaChi','SoDienThoai','TrangThai'];
}
