<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\HoaDon as HoaDonResource;
use App\Models\HoaDonModel;
use Illuminate\Support\Facades\Validator;

class HoaDonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $hoadons = HoaDonModel::all();
        $arr=[
            'status' => true,
            'message' => 'Danh sách hóa đơn',
            'data' => HoaDonResource::collection($hoadons),
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
            'MaHD' => 'required', 'MaNV' => 'required','MaKH' => 'required',
             'HoKH' => 'required', 'TenKH' => 'required','NgaySinh' => 'required', 'DiaChi' => 'required',
             'SoDienThoai' => 'required', 'Email' => 'required', 'NgayLapHoaDon' => 'required', 
        ]);

        if ($validator->fails()){
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }
        $hoadon = HoaDonModel::create($input);
        $arr = [
            'status' => true,
            'message' => 'Hóa đơn đã tạo thành công',
            'data' => new HoaDonResource($hoadon),
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
        $hoadon = HoaDonModel::find($id);
        if (is_null($hoadon)){
            $arr = [
                'status' => false,
                'message' => 'Không có hóa đơn này',
                'data' => [],
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);  
        }
        $arr = [
            'status' => true,
            'message' => 'Chi tiết hóa đơn',
            'data' => new HoaDonResource($hoadon),
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
    public function update(Request $request, HoaDonModel $hoadon)
    {
        //
        $input = $request->all();
        $validator = Validator::make($input,[
            'MaNV' => 'required','HoKH' => 'required', 'TenKH' => 'required','NgaySinh' => 'required', 
            'DiaChi' => 'required','SoDienThoai' => 'required', 'Email' => 'required', 
            'NgayLapHoaDon' => 'required', 
        ]);

        if ($validator->fails()){
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }

        $hoadon->MaNV = $input['MaNV'];
        $hoadon->HoKH = $input['HoKH'];
        $hoadon->TenKH = $input['TenKH'];
        $hoadon->NgaySinh = $input['NgaySinh'];
        $hoadon->DiaChi = $input['DiaChi'];
        $hoadon->SoDienThoai = $input['SoDienThoai'];
        $hoadon->Email = $input['Email'];
        $hoadon->NgayLapHoaDon = $input['NgayLapHoaDon'];

        $arr = [
            'status' => true,
            'message' => 'Hóa đơn đã cập nhật thành công',
            'data' => new HoaDonResource($hoadon),
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy( HoaDonModel $hoadon)
    {
        //
        $hoadon->delete();
        $arr=[
            'status' => true,
            'message' => 'Hóa đơn đã được xóa',
            'data' => [],
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}
