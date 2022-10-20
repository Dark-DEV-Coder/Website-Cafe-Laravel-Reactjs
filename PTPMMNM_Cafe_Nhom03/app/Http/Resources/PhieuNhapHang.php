<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PhieuNhapHang extends JsonResource
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
            'MaPNH' => $this->MaPNH,
            'MaNV' => $this->MaNV,
            'MaNCC' => $this->MaNCC,
            'NgayNhapHang' => $this->NgayNhapHang,
            'TongTien' => $this->TongTien,
            'TrangThai' => $this->TrangThai,
        ];
    }
}
