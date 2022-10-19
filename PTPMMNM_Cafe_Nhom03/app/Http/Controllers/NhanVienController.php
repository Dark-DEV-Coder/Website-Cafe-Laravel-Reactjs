<?php

namespace App\Http\Controllers;

use App\Http\Resources\NhanVien as NhanVienResource;
use App\Models\NhanVienModel;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class NhanVienController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $nhanviens = NhanVienModel::all();
        $arr=[
            'status' => true,
            'message' => 'Danh sách nhân viên',
            'data' => NhanVienResource::collection($nhanviens),
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
            'MaNV' => 'required', 'HoNV' => 'required', 'TenNV' => 'required',
            'NgaySinh' => 'required', 'DiaChi' => 'required','SoDienThoai' => 'required', 
            'Email' => 'required', 'Luong' => 'required',
        ]);
        
        if ($validator->fails()){
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors(),
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }
        $nhanvien = NhanVienModel::create($input);
        $arr = [
            'status' => true,
            'message' => 'Nhân viên đã thêm thành công',
            'data' => new NhanVienResource($nhanvien),
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
        $nhanvien = NhanVienModel::find($id);
        if (is_null($nhanvien)){
            $arr = [
                'status' => false,
                'message' => 'Không có nhân viên này',
                'data' => [],
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }
        $arr = [
            'status' => true,
            'message' => 'Chi tiết nhân viên',
            'data' => new NhanVienResource($nhanvien),
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
    public function update(Request $request, NhanVienModel $nhanvien)
    {
        //
        $input = $request->all();
        $validator = Validator::make($input,[
            'HoNV' => 'required', 'TenNV' => 'required',
            'NgaySinh' => 'required', 'DiaChi' => 'required','SoDienThoai' => 'required', 
            'Email' => 'required', 'Luong' => 'required',
        ]);

        if ($validator->fails()){
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }

        $nhanvien->HoNV = $input['HoNV'];
        $nhanvien->TenNV = $input['TenNV'];
        $nhanvien->NgaySinh = $input['NgaySinh'];
        $nhanvien->DiaChi = $input['DiaChi'];
        $nhanvien->SoDienThoai = $input['SoDienThoai'];
        $nhanvien->Email = $input['Email'];
        $nhanvien->Luong = $input['Luong'];

        $arr = [
            'status' => true,
            'message' => 'Nhân viên đã cập nhật thành công',
            'data' => new NhanVienResource($nhanvien),
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(NhanVienModel $nhanvien)
    {
        //
        $nhanvien->delete();
        $arr=[
            'status' => true,
            'message' => 'Nhân viên đã được xóa',
            'data' => [],
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}
