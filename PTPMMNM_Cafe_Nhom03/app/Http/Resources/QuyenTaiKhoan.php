<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class QuyenTaiKhoan extends JsonResource
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
            'MaQuyen' => $this->MaQuyen,
            'TenQuyen' => $this->TenQuyen,            
            'TrangThai' => $this->TrangThai,
        ];
    }
}
