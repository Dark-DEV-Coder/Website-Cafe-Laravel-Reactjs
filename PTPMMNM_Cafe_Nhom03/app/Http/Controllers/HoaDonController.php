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
    public function index() // Hàm lấy danh sách hóa đơn
    {        
        $hoadons = HoaDonModel::where('TrangThai','!=',0)->get();
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
    public function store(Request $request) // Hàm thêm mới hóa đơn
    {        
        $input = $request->all();
        $validator = Validator::make($input,[
            'MaHD' => 'required', 'MaNV' => 'required','MaKH' => 'required',
             'HoKH' => 'required', 'TenKH' => 'required','NgaySinh' => 'required', 'DiaChi' => 'required',
             'SoDienThoai' => 'required', 'Email' => 'required', 'NgayLapHoaDon' => 'required', 
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
        
        $count = HoaDonModel::select('MaHD')->count();
        $mahd = 'HD'+($count+1);
        $manv = $input['MaNV'];
        $makh = $input['MaKH'];
        $ho = $input['HoKH'];
        $ten = $input['TenKH'];
        $ngay = $input['NgaySinh'];
        $dc = $input['DiaChi'];
        $sdt = $input['SoDienThoai'];
        $email = $input['Email'];
        $ngay = $input['NgayLapHoaDon'];
        HoaDonModel::insert([
            'MaHD' => $mahd,
            'MaNV' => $manv,
            'MaKH' => $makh,            
            'HoKH' => $ho,
            'TenKH' => $ten,
            'NgaySinh' => $ngay,
            'DiaChi' => $dc,
            'SoDienThoai' => $sdt,
            'Email' => $email,
            'NgayLapHoaDon' => $ngay,
            'TrangThai' => 1,
            'updated_at' => date('Y-m-d h-i-s'),
        ]);

        $arr = [
            'status' => true,
            'message' => 'Hóa đơn đã tạo thành công',
        ];
        return response()->json($arr,201,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) // Hàm tìm thông tin 1 hóa đơn
    {        
        $hoadon = HoaDonModel::where('MaHD',$id)->get();
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
    public function update(Request $request, $id) // Cập nhật thông tin hóa đơn
    {        
        $input = $request->all();
        $validator = Validator::make($input,[
            'MaNV' => 'required','HoKH' => 'required', 'TenKH' => 'required','NgaySinh' => 'required', 
            'DiaChi' => 'required','SoDienThoai' => 'required', 'Email' => 'required', 
            'NgayLapHoaDon' => 'required', 
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

        $manv = $input['MaNV'];
        $ho = $input['HoKH'];
        $ten = $input['TenKH'];
        $ngay = $input['NgaySinh'];
        $dc = $input['DiaChi'];
        $sdt = $input['SoDienThoai'];
        $email = $input['Email'];
        $ngay = $input['NgayLapHoaDon'];
        HoaDonModel::where('MaHD',$id)->update([
            'MaNV' => $manv,          
            'HoKH' => $ho,
            'TenKH' => $ten,
            'NgaySinh' => $ngay,
            'DiaChi' => $dc,
            'SoDienThoai' => $sdt,
            'Email' => $email,
            'NgayLapHoaDon' => $ngay,
        ]);

        $arr = [
            'status' => true,
            'message' => 'Hóa đơn đã cập nhật thành công',
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) // Xóa hóa đơn (xóa ẩn)
    {        
        HoaDonModel::where('MaHD',$id)->update(['TrangThai' => 0]);
        $arr=[
            'status' => true,
            'message' => 'Hóa đơn đã được xóa',
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}
