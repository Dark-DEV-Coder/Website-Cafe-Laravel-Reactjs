<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LoaiSanPham extends JsonResource
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
            'MaLoaiSP' => $this->MaLoaiSP,
            'TenLoai' => $this->TenLoai,
            'TrangThai' => $this->TrangThai,
        ];
    }
}
