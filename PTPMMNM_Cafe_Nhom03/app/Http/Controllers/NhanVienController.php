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
    public function index() // Hàm lấy danh sách nhân viên
    {        
        $nhanviens = NhanVienModel::where('TrangThai','!=',0)->get();
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
    public function store(Request $request) // Hàm thêm mới thông tin nhân viên
    {        
        $input = $request->all();
        $validator = Validator::make($input,[
            'MaNV' => 'required', 'HoNV' => 'required', 'TenNV' => 'required',
            'NgaySinh' => 'required', 'GioiTinh' => 'required', 'DiaChi' => 'required','SoDienThoai' => 'required', 
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
        $count = NhanVienModel::select('MaNV')->count();
        $manv = 'NV'+($count+1);
        $ho = $input['HoNV'];
        $ten = $input['TenNV'];
        $ngay = $input['NgaySinh'];    
        $gioitinh = $input['GioiTinh'];
        $dc = $input['DiaChi'];
        $sdt = $input['SoDienThoai'];
        $email = $input['Email'];
        $luong = $input['Luong'];
        NhanVienModel::insert([
            'MaNV' => $manv,
            'MaTK' => 'null',
            'HoNV' => $ho,
            'TenNV' => $ten,
            'NgaySinh' => $ngay,
            'GioiTinh' => $gioitinh,
            'DiaChi' => $dc,
            'SoDienThoai' => $sdt,
            'Email' => $email,
            'Luong' => $luong,
            'TrangThai' => 1,
            'updated_at' => date('Y-m-d h-i-s'),
        ]);
        $arr = [
            'status' => true,
            'message' => 'Nhân viên đã thêm thành công',
        ];
        return response()->json($arr,201,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) // Tìm thông tin 1 nhân viên
    {        
        $nhanvien = NhanVienModel::where('MaNV',$id)->get();
        if (is_null($nhanvien)){
            $arr = [
                'status' => false,
                'message' => 'Không có nhân viên này',
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
    public function update(Request $request, $id) // Cập nhật thông tin nhân viên
    {        
        $input = $request->all();
        $validator = Validator::make($input,[
            'MaTK' => 'required', 'HoNV' => 'required', 'TenNV' => 'required',
            'NgaySinh' => 'required', 'GioiTinh' => 'required', 'DiaChi' => 'required','SoDienThoai' => 'required', 
            'Email' => 'required', 'Luong' => 'required',
        ]);
        // Kiểm tra dữ liệu
        if ($validator->fails()){
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }

        $matk = $input['MaTK'];
        $ho = $input['HoNV'];
        $ten = $input['TenNV'];
        $ngay = $input['NgaySinh'];
        $gioitinh = $input['GioiTinh'];
        $dc = $input['DiaChi'];
        $sdt = $input['SoDienThoai'];
        $email = $input['Email'];
        $luong = $input['Luong'];
        NhanVienModel::where('MaNV',$id)->update([
            'MaTK' => $matk,
            'HoNV' => $ho,
            'TenNV' => $ten,
            'NgaySinh' => $ngay,
            'GioiTinh' => $gioitinh,
            'DiaChi' => $dc,
            'SoDienThoai' => $sdt,
            'Email' => $email,
            'Luong' => $luong,
        ]);

        $arr = [
            'status' => true,
            'message' => 'Nhân viên đã cập nhật thành công',
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) // Hàm xóa nhân viên (xóa ẩn)
    {        
        NhanVienModel::where('MaNV',$id)->update(['TrangThai' => 0]);
        $arr=[
            'status' => true,
            'message' => 'Nhân viên đã được xóa',
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}
