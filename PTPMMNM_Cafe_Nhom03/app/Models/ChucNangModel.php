<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChucNangModel extends Model
{
    use HasFactory;
    protected $table = 'chuc_nang';
    protected $filltable = ['MaChucNang','TenChucNang','Icon','Link'];
}
