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
    public function index() // Hàm lấy danh sách sản phẩm
    {
        $sanphams = SanPhamModel::where('TrangThai','!=',0)->get();
        $arr=[
            'status' => true,
            'message' => 'Danh sách sản phẩm',
            'data' => SanPhamResource::collection($sanphams),
        ];
        // Trả về dữ liệu dạng json
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) // Hàm thêm mới 1 sản phẩm
    {        
        $input = $request->all();
        $validator = Validator::make($input,[
            'MaSP' => 'required', 'MaLoaiSP' => 'required', 'MaNCC' => 'required', 'TenSP' => 'required',
            'Hinh' => 'required', 'MoTa' => 'required',
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
        $masp = $input['MaSP'];
        $count = SanPhamModel::where('MaSP',$masp)->count();
        if ($count > 0){ // Kiểm tra sản phẩm đã tồn tại hay chưa
            $arr = [
                'status' => false,
                'message' => 'Mã sản phẩm đã tồn tại',
                'data' => [],
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }       
        $loaisp = $input['MaLoaiSP'];
        $ncc = $input['MaNCC'];
        $tensp = $input['TenSP'];
        $hinh = $input['Hinh'];
        $mota = $input['MoTa'];
        SanPhamModel::insert([
                            'MaSP' => $masp,
                            'MaLoaiSP' => $loaisp,
                            'MaNCC' => $ncc,
                            'TenSP' => $tensp,
                            'Hinh' => $hinh,
                            'MoTa' => $mota,
                            'SoLuong' => 0,
                            'Gia' => 0,
                            'TrangThai' => 1,
                            ]);
        $arr = [
            'status' => true,
            'message' => 'Sản phẩm đã tạo thành công',
        ];
        return response()->json($arr,201,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) // Tìm 1 sản phẩm theo mã sản phẩm
    {
        $sanpham = SanPhamModel::where('MaSP',$id)->get();
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
    public function update(Request $request, $id) // Hàm cập nhật dữ liệu sản phẩm
    {    
        $input = $request->all();
        $validator = Validator::make($input,[
            'MaLoaiSP' => 'required', 'MaNCC' => 'required', 'TenSP' => 'required',
            'Hinh' => 'required', 'MoTa' => 'required',
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

        $masp = $id;        
        $loaisp = $input['MaLoaiSP'];
        $ncc = $input['MaNCC'];
        $tensp = $input['TenSP'];
        $hinh = $input['Hinh'];
        $mota = $input['MoTa'];
        SanPhamModel::where('MaSP',$masp)
                ->update([
                        'MaLoaiSP' => $loaisp,'MaNCC' => $ncc,'TenSP' => $tensp,
                        'Hinh' => $hinh,'MoTa' => $mota
                    ]);

        $arr = [
            'status' => true,
            'message' => 'Sản phẩm đã cập nhật thành công',
            'data' => [],
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        SanPhamModel::where('MaSP',$id)->update(['TrangThai' => 0]);
        $arr=[
            'status' => true,
            'message' => 'Sản phẩm đã được xóa',
            'data' => [],
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}
