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
    public function index() // Lấy danh sách đánh giá sản phẩm
    {        
        $danhgiasanphams = DanhGiaSanPhamModel::join('users','users.id','=','danh_gia_san_pham.MaTK')
                                                ->where('danh_gia_san_pham.TrangThai','!=',0)
                                                ->select('danh_gia_san_pham.*','users.email')
                                                ->get();
        $arr=[
            'status' => true,
            'message' => 'Danh sách đánh giá sản phẩm',
            'data' => $danhgiasanphams,
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function detail($id) // Tìm 1 sản phẩm theo mã sản phẩm
    {
        $dgsp = DanhGiaSanPhamModel::join('users','users.id','=','danh_gia_san_pham.MaTK')
                                    ->where('MaBinhLuan',$id)
                                    ->select('danh_gia_san_pham.*','users.email')
                                    ->first();        
        $arr = [
            'status' => true,
            'message' => 'Đánh giá sản phẩm cần tìm',
            'data' => $dgsp,
        ];
        return response()->json($arr,201,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) // Hàm thêm mới đánh giá
    {        
        $input = $request->all();
        $validator = Validator::make($input,[
            'MaBinhLuan' => 'required','MaTK' => 'required', 'MaSP' => 'required',
            'BinhLuan' => 'required','SoSao' => 'required', 
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
        $masp = $input['MaSP'];
        $mabl = 'BL' + $matk + $masp;
        $bl = $input['BinhLuan'];
        $sosao = $input['SoSao'];
        DanhGiaSanPhamModel::insert([
            'MaBinhLuan' => $mabl,
            'MaTK' => $matk,
            'MaSP' => $masp,
            'BinhLuan' => $bl,
            'SoSao' => $sosao,
            'TrangThai' => 1,
            'updated_at' => date('Y-m-d h-i-s'),
        ]);

        $arr = [
            'status' => true,
            'message' => 'Đánh giá sản phẩm đã tạo thành công',
        ];
        return response()->json($arr,201,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($ten) // Tìm thông tin 1 đánh giá
    {        
        $danhgiasanpham = DanhGiaSanPhamModel::join('users','users.id','=','danh_gia_san_pham.MaTK')
                                            ->where('users.email','like',"%$ten%")
                                            ->select('danh_gia_san_pham.*','users.email')
                                            ->get();
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
            'data' => $danhgiasanpham,
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
    public function update(Request $request, $id) // Cập nhật đánh giá
    {        
        $input = $request->all();
        $validator = Validator::make($input,[            
            'BinhLuan' => 'required','SoSao' => 'required', 
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

        $bl = $input['BinhLuan'];
        $sosao = $input['SoSao'];
        DanhGiaSanPhamModel::where('MaBinhLuan',$id)->update([
            'BinhLuan' => $bl,
            'SoSao' => $sosao,
        ]);

        $arr = [
            'status' => true,
            'message' => 'Đánh giá sản phẩm đã cập nhật thành công',
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) // Xóa đánh giá (xóa ẩn)
    {        
        DanhGiaSanPhamModel::where('MaBinhLuan',$id)->update(['TrangThai' => 0]);
        $arr=[
            'status' => true,
            'message' => 'Đánh giá sản phẩm đã được xóa',
            'data' => [],
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}
