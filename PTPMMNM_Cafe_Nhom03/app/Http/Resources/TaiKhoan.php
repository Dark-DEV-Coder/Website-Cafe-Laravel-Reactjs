<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TaiKhoan extends JsonResource
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
            'MaTK' => $this->MaTK,
            'MaQuyen' => $this->MaQuyen,
            'TenDangNhap' => $this->TenDangNhap,
            'MatKhau' => $this->MatKhau,
            'TrangThai' => $this->TrangThai,
            'created_at' => $this->TrangThai,
            'TrangThai' => $this->TrangThai,
        ];
    }
}
