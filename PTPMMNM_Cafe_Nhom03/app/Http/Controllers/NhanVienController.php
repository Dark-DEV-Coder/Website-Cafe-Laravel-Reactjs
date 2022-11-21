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
            'honv' => 'required', 'tennv' => 'required',
            'ngaysinhnv' => 'required', 'gioitinhnv' => 'required', 'diachinv' => 'required','sdtnv' => 'required', 
            'emailnv' => 'required', 'luong' => 'required',
        ]);
        
        if ($validator->fails()){
            $arr = [
                'status' => false,
                'message' => 'Chưa nhập đủ dữ liệu',
                'data' => $validator->errors(),
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }

        $checkphone = Validator::make($input,[
            'sdtnv' => 'regex:/^(0)+([0-9]{9})$/',
        ]);
        if ($checkphone->fails()){
            $arr = [
                'status' => false,
                'message' => 'Số điện thoại không đúng định dạng hoặc không đủ 10 chữ số',
                'data' => $checkphone->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }

        $checkmail = Validator::make($input,[
            'emailnv' => 'email',
        ]);
        if ($checkmail->fails()){
            $arr = [
                'status' => false,
                'message' => 'Email không đúng định dạng',
                'data' => $checkmail->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }

        $count = NhanVienModel::select('MaNV')->count();
        $manv = 'NV'.strval($count);
        $ho = $input['honv'];
        $ten = $input['tennv'];
        $ngay = $input['ngaysinhnv'];    
        $gioitinh = $input['gioitinhnv'];
        $dc = $input['diachinv'];
        $sdt = $input['sdtnv'];
        $email = $input['emailnv'];
        $luong = $input['luong'];
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
    public function show($ten) // Tìm thông tin 1 nhân viên
    {        
        $nhanvien = NhanVienModel::where('HoNV','like',"%$ten%")->orWhere('TenNV','like',"%$ten%")->get();
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
            'message' => 'Các nhân viên cần tìm',
            'data' => NhanVienResource::collection($nhanvien),
        ];
        return response()->json($arr,201,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function detail($id) // Tìm 1 sản phẩm theo mã sản phẩm
    {
        $nhanvien = NhanVienModel::where('MaNV',$id)->first();
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
            'message' => 'Nhân viên cần tìm',
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
            'honv' => 'required', 'tennv' => 'required', 'matk' =>'required',
            'ngaysinhnv' => 'required', 'gioitinhnv' => 'required', 'diachinv' => 'required','sdtnv' => 'required', 
            'emailnv' => 'required', 'luong' => 'required',
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

        $checkphone = Validator::make($input,[
            'sdtnv' => 'regex:/^(0)+([0-9]{9})$/',
        ]);
        if ($checkphone->fails()){
            $arr = [
                'status' => false,
                'message' => 'Số điện thoại không đúng định dạng hoặc không đủ 10 chữ số',
                'data' => $checkphone->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }

        $checkmail = Validator::make($input,[
            'emailnv' => 'email',
        ]);
        if ($checkmail->fails()){
            $arr = [
                'status' => false,
                'message' => 'Email không đúng định dạng',
                'data' => $checkphone->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }

        $matk = $input['matk'];
        $ho = $input['honv'];
        $ten = $input['tennv'];
        $ngay = $input['ngaysinhnv'];    
        $gioitinh = $input['gioitinhnv'];
        $dc = $input['diachinv'];
        $sdt = $input['sdtnv'];
        $email = $input['emailnv'];
        $luong = $input['luong'];
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
