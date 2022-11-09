<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class KhachHang extends JsonResource
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
            'MaKH' => $this->MaKH,
            'MaTK' => $this->MaTK,
            'HoKH' => $this->HoKH,
            'TenKH' => $this->TenKH,
            'NgaySinh' => $this->NgaySinh,
            'DiaChi' => $this->DiaChi,
            'SoDienThoai' => $this->SoDienThoai,
            'Email' => $this->Email,
            'TrangThai' => $this->TrangThai,
            'updated_at' => $this->updated_at,
        ];
    }
}
