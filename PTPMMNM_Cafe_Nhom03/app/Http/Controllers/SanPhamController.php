<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\SanPhamModel;
use App\Http\Resources\SanPham as SanPhamResource;

class SanPhamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $sanphams = SanPhamModel::all();
        $arr=[
            'status' => true,
            'message' => 'Danh sách sản phẩm',
            'data' => SanPhamResource::collection($sanphams),
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
            'MaSP' => 'required', 'MaLoaiSP' => 'required', 'MaNCC' => 'required', 'TenSP' => 'required',
            'Hinh' => 'required', 'MoTa' => 'required',
        ]);

        if ($validator->fails()){
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }
        $sanpham = SanPhamModel::create($input);
        $arr = [
            'status' => true,
            'message' => 'Sản phẩm đã tạo thành công',
            'data' => new SanPhamResource($sanpham),
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
        $sanpham = SanPhamModel::find($id);
        if (is_null($sanpham)){
            $arr = [
                'status' => false,
                'message' => 'Không có sản phẩm này',
                'data' => [],
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);  
        }
        $arr = [
            'status' => true,
            'message' => 'Chi tiết sản phẩm',
            'data' => new SanPhamResource($sanpham),
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
    public function update(Request $request, SanPhamModel $sanpham)
    {
        //
        $input = $request->all();
        $validator = Validator::make($input,[
            'MaLoaiSP' => 'required', 'MaNCC' => 'required', 'TenSP' => 'required',
            'Hinh' => 'required', 'MoTa' => 'required',
        ]);

        if ($validator->fails()){
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }

        $sanpham->MaLoaiSP = $input['MaLoaiSP'];
        $sanpham->MaNCC = $input['MaNCC'];
        $sanpham->TenSP = $input['TenSP'];
        $sanpham->Hinh = $input['Hinh'];
        $sanpham->MoTa = $input['MoTa'];

        $arr = [
            'status' => true,
            'message' => 'Sản phẩm đã cập nhật thành công',
            'data' => new SanPhamResource($sanpham),
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(SanPhamModel $sanpham)
    {
        //
        $sanpham->delete();
        $arr=[
            'status' => true,
            'message' => 'Sản phẩm đã được xóa',
            'data' => [],
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}
