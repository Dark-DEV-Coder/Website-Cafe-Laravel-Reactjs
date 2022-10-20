<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class NhaCungCap extends JsonResource
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
            'MaNCC' => $this->MaNCC,
            'TenNCC' => $this->TenNCC,
            'DiaChi' => $this->DiaChi,
            'SoDienThoai' => $this->SoDienThoai,
            'TrangThai' => $this->TrangThai,
        ];
        
    }
}
