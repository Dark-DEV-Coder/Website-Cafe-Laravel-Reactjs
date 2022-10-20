<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\LoaiSanPham as LoaiSanPhamResource;
use App\Models\LoaiSanPhamModel;
use Illuminate\Support\Facades\Validator;

class LoaiSanPhamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $loaisanphams = LoaiSanPhamModel::all();
        $arr=[
            'status' => true,
            'message' => 'Danh sách loại sản phẩm',
            'data' => LoaiSanPhamResource::collection($loaisanphams),
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $input = $request->all();
        $validator = Validator::make($input,[
            'MaLoaiSP' => 'required', 'TenLoai' => 'required',
        ]);

        if ($validator->fails()){
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }
        $loaisanpham = LoaiSanPhamModel::create($input);
        $arr = [
            'status' => true,
            'message' => 'Loại sản phẩm đã tạo thành công',
            'data' => new LoaiSanPhamResource($loaisanpham),
        ];
        return response()->json($arr,201,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $loaisanpham = LoaiSanPhamModel::find($id);
        if (is_null($loaisanpham)){
            $arr = [
                'status' => false,
                'message' => 'Không có loại sản phẩm này',
                'data' => [],
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);  
        }
        $arr = [
            'status' => true,
            'message' => 'Chi tiết loại sản phẩm',
            'data' => new LoaiSanPhamResource($loaisanpham),
        ];
        return response()->json($arr,201,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, LoaiSanPhamModel $loaisanpham)
    {
        //
        $input = $request->all();
        $validator = Validator::make($input,[
            'TenLoai' => 'required'
        ]);

        if ($validator->fails()){
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }

        $loaisanpham->TenLoai = $input['TenLoai'];

        $arr = [
            'status' => true,
            'message' => 'Loại sản phẩm đã cập nhật thành công',
            'data' => new LoaiSanPhamResource($loaisanpham),
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(LoaiSanPhamModel $loaisanpham)
    {
        //
        $loaisanpham->delete();
        $arr=[
            'status' => true,
            'message' => 'Loại sản phẩm đã được xóa',
            'data' => [],
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}
