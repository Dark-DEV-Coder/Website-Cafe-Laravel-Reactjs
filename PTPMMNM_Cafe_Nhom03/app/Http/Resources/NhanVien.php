<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class NhanVien extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'MaNV' => $this->MaNV,
            'MaTK' => $this->MaTK,
            'HoNV' => $this->HoNV,
            'TenNV' => $this->TenNV,
            'NgaySinh' => $this->NgaySinh,
            'DiaChi' => $this->DiaChi,
            'SoDienThoai' => $this->SoDienThoai,
            'Email' => $this->Email,
            'Luong' => $this->Luong,
            'TrangThai' => $this->TrangThai,
            'updated_at' => $this->updated_at,
        ];
    }
}
