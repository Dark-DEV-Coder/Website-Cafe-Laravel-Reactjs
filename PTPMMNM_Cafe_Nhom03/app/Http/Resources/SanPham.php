<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SanPham extends JsonResource
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
            'MaSP' => $this->MaSP,
            'MaLoaiSP' => $this->MaLoaiSP,
            'MaNCC' => $this->MaNCC,
            'TenSP' => $this->TenSP,
            'Hinh' => $this->Hinh,
            'MoTa' => $this->MoTa,
            'SoLuong' => $this->SoLuong,
            'Gia' => $this->Gia,
            'GiaBan' => $this->GiaBan,
            'TrangThai' => $this->TrangThai,
            'updated_at' => $this->updated_at,
        ];
    }
}
