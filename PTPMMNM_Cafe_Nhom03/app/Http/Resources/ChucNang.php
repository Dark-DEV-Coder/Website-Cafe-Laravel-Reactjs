<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ChucNang extends JsonResource
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
            'MaChucNang' => $this->MaChucNang,
            'TenChucNang' => $this->TenChucNang,
            'Icon' => $this->Icon,
            'Link' => $this->Link,
        ];
    }
}
