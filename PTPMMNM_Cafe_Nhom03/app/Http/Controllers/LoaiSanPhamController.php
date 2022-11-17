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
    public function index() // Hàm lấy danh sách loại sản phẩm
    {        
        $loaisanphams = LoaiSanPhamModel::where('TrangThai','!=',0)->get();
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
    public function store(Request $request) // Hàm thêm mới loại sản phẩm
    {        
        $input = $request->all();
        $validator = Validator::make($input,[
            'maloai' => 'required', 'tenloai' => 'required',
        ]);
        // Kiểm tra dữ liệu
        if ($validator->fails()){
            $arr = [
                'status' => false,
                'message' => 'Chưa nhập đủ dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }
                
        $malsp = $input['maloai'];
        $checkmalsp = LoaiSanPhamModel::where('MaLoaiSP',$malsp)->count();
        if ($checkmalsp!=0){
            $arr = [
                'status' => false,
                'message' => 'Mã loại sản phẩm đã tồn tại',
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE); 
        }

        $ten = $input['tenloai'];
        LoaiSanPhamModel::insert([
            'MaLoaiSP' => $malsp,
            'TenLoai' => $ten,
            'TrangThai' => 1,
            'updated_at' => date('Y-m-d h-i-s'),
        ]);

        $arr = [
            'status' => true,
            'message' => 'Loại sản phẩm đã tạo thành công',
        ];
        return response()->json($arr,201,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) // Hàm tìm thông tin 1 loại sản phẩm
    {        
        $loaisanpham = LoaiSanPhamModel::where('MaLoaiSP',$id)->get();
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
    public function update(Request $request, $id) // Hàm cập nhật thông tin 1 loại sản phẩm
    {        
        $input = $request->all();
        $validator = Validator::make($input,[
            'TenLoai' => 'required'
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

        $ten = $input['TenLoai'];
        LoaiSanPhamModel::where('MaLoaiSP',$id)->update([
            'TenLoai' => $ten,
        ]);

        $arr = [
            'status' => true,
            'message' => 'Loại sản phẩm đã cập nhật thành công',
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) // Xóa loại sản phẩm (xóa ẩn)
    {        
        LoaiSanPhamModel::where('MaLoaiSP',$id)->update(['TrangThai' => 0]);
        $arr=[
            'status' => true,
            'message' => 'Loại sản phẩm đã được xóa',
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}
