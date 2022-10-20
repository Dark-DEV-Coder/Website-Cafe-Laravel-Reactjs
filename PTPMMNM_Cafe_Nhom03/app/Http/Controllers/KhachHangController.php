<?php

namespace App\Http\Controllers;

use App\Http\Resources\KhachHang as KhachHangResource;
use App\Models\KhachHangModel;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class KhachHangController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $khachhangs = KhachHangModel::all();
        $arr=[
            'status' => true,
            'message' => 'Danh sách khách hàng',
            'data' => KhachHangResource::collection($khachhangs),
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
            'MaKH' => 'required', 'MaTK' => 'required', 'HoKH' => 'required', 'TenKH' => 'required',
            'NgaySinh' => 'required', 'DiaChi' => 'required','SoDienThoai' => 'required', 
            'Email' => 'required',
        ]);
        
        if ($validator->fails()){
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors(),
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }
        $khachhang = KhachHangModel::create($input);
        $arr = [
            'status' => true,
            'message' => 'Khách hàng đã thêm thành công',
            'data' => new KhachHangResource($khachhang),
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
        $khachhang = KhachHangModel::find($id);
        if (is_null($khachhang)){
            $arr = [
                'status' => false,
                'message' => 'Không có khách hàng này',
                'data' => [],
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }
        $arr = [
            'status' => true,
            'message' => 'Chi tiết khách hàng',
            'data' => new KhachHangResource($khachhang),
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
    public function update(Request $request, KhachHangModel $khachhang)
    {
        //
        $input = $request->all();
        $validator = Validator::make($input,[
            'HoKH' => 'required', 'TenKH' => 'required',
            'NgaySinh' => 'required', 'DiaChi' => 'required','SoDienThoai' => 'required', 
            'Email' => 'required',
        ]);

        if ($validator->fails()){
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }

        $khachhang->HoKH = $input['HoKH'];
        $khachhang->TenKH = $input['TenKH'];
        $khachhang->NgaySinh = $input['NgaySinh'];
        $khachhang->DiaChi = $input['DiaChi'];
        $khachhang->SoDienThoai = $input['SoDienThoai'];
        $khachhang->Email = $input['Email'];

        $arr = [
            'status' => true,
            'message' => 'Khách hàng đã cập nhật thành công',
            'data' => new KhachHangResource($khachhang),
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(KhachHangModel $khachhang)
    {
        //
        $khachhang->delete();
        $arr=[
            'status' => true,
            'message' => 'Khách hàng đã được xóa',
            'data' => [],
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}
