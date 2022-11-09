<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DanhGiaSanPham extends JsonResource
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
            'MaBinhLuan' => $this->MaBinhLuan,
            'MaTK' => $this->MaTK,
            'MaSP' => $this->MaSP,
            'BinhLuan' => $this->BinhLuan,
            'SoSao' => $this->SoSao,
            'TrangThai' => $this->TrangThai,
            'updated_at' => $this->updated_at,
        ];
    }
}
