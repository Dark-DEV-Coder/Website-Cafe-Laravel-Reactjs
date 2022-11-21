<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChiTietQuyenModel extends Model
{
    use HasFactory;
    protected $table = 'chi_tiet_quyen';
    protected $filltable = ['MaQuyen','MaChucNang'];
}
