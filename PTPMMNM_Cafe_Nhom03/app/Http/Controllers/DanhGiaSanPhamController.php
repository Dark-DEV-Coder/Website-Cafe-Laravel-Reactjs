<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\DanhGiaSanPham as DanhGiaSanPhamResource;
use App\Models\DanhGiaSanPhamModel;
use Illuminate\Support\Facades\Validator;

class DanhGiaSanPhamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $danhgiasanphams = DanhGiaSanPhamModel::all();
        $arr=[
            'status' => true,
            'message' => 'Danh sách đánh giá sản phẩm',
            'data' => DanhGiaSanPhamResource::collection($danhgiasanphams),
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
            'MaBinhLuan' => 'required','MaTK' => 'required', 
            'BinhLuan' => 'required','SoSao' => 'required', 
        ]);

        if ($validator->fails()){
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }
        $danhgiasanpham = DanhGiaSanPhamModel::create($input);
        $arr = [
            'status' => true,
            'message' => 'Đánh giá sản phẩm đã tạo thành công',
            'data' => new DanhGiaSanPhamResource($danhgiasanpham),
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
        $danhgiasanpham = DanhGiaSanPhamModel::find($id);
        if (is_null($danhgiasanpham)){
            $arr = [
                'status' => false,
                'message' => 'Không có đánh giá sản phẩm này',
                'data' => [],
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);  
        }
        $arr = [
            'status' => true,
            'message' => 'Chi tiết đánh giá sản phẩm',
            'data' => new DanhGiaSanPhamResource($danhgiasanpham),
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
    public function update(Request $request, DanhGiaSanPhamModel $danhgiasanpham)
    {
        //
        $input = $request->all();
        $validator = Validator::make($input,[            
            'BinhLuan' => 'required','SoSao' => 'required', 
        ]);

        if ($validator->fails()){
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }

        $danhgiasanpham->BinhLuan = $input['BinhLuan'];
        $danhgiasanpham->SoSao = $input['SoSao'];

        $arr = [
            'status' => true,
            'message' => 'Đánh giá sản phẩm đã cập nhật thành công',
            'data' => new DanhGiaSanPhamResource($danhgiasanpham),
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(DanhGiaSanPhamModel $danhgiasanpham)
    {
        //
        $danhgiasanpham->delete();
        $arr=[
            'status' => true,
            'message' => 'Đánh giá sản phẩm đã được xóa',
            'data' => [],
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}
