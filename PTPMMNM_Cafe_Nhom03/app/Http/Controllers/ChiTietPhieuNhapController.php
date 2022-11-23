<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\ChiTietPhieuNhap as ChiTietPhieuNhapResource;
use App\Models\ChiTietPhieuNhapModel;
use App\Models\PhieuNhapHangModel;
use App\Models\SanPhamModel;
use Illuminate\Support\Facades\Validator;

class ChiTietPhieuNhapController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    // public function index() // Hàm lấy danh sách tất cả chi tiết phiếu nhập
    // {        
    //     $chitietphieunhaps = ChiTietPhieuNhapModel::all();
    //     $arr=[
    //         'status' => true,
    //         'message' => 'Danh sách chi tiết phiếu nhập',
    //         'data' => ChiTietPhieuNhapResource::collection($chitietphieunhaps),
    //     ];
    //     return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    // }

    public function detail($id) // Tìm 1 sản phẩm theo mã sản phẩm
    {
        
        $pnh = ChiTietPhieuNhapModel::where('MaPNH',$id)->get(); 
        $arr = [
            'status' => true,
            'message' => 'Phiếu nhập hàng cần tìm',
            'data' => ChiTietPhieuNhapResource::collection($pnh),
        ];
        return response()->json($arr,201,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function DeleteDetail(Request $request) // Tìm 1 sản phẩm theo mã sản phẩm    
    {
        $input = $request->all();
        $mapnh = $input['mapnh'];
        $masp = $input['masp'];
        $sl1 = ChiTietPhieuNhapModel::where('MaPNH',$mapnh)->where('MaSP',$masp)->select('SoLuong')->first();
        $sl2 = SanPhamModel::where('MaSP',$masp)->select('SoLuong')->first();
        ChiTietPhieuNhapModel::where('MaPNH',$mapnh)->where('MaSP',$masp)->delete();
        SanPhamModel::where('MaSP',$masp)
                    ->update([
                            'SoLuong' => $sl2->SoLuong - $sl1->SoLuong
                        ]);
        $tongtien = ChiTietPhieuNhapModel::where('MaPNH',$mapnh)->sum('ThanhTien');
        PhieuNhapHangModel::where('MaPNH',$mapnh)
                    ->update([
                            'TongTien' => $tongtien
                        ]);                      
        $arr=[
            'status' => true,
            'message' => 'Chi tiết phiếu nhập đã được xóa',
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) // Thêm mới chi tiết phiếu nhập
    {        
        $input = $request->all();
        $validator = Validator::make($input,[
            'mapnh' => 'required', 'masp' => 'required','soluong' => 'required',
             'dongia' => 'required'
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
        $mapnh = $input['mapnh'];
        $masp = $input['masp'];
        $soluong = $input['soluong'];
        $dongia = $input['dongia'];
        $thanhtien = $soluong * $dongia;

        $checktontai = ChiTietPhieuNhapModel::where('MaPNH',$mapnh)->where('MaSP',$masp)->count();
        if ($checktontai != 0){
            $ctpn = ChiTietPhieuNhapModel::where('MaPNH',$mapnh)->where('MaSP',$masp)->first();
            $sl1 = $ctpn->SoLuong;
            $sl2 = $soluong + $sl1;
            $tien = $sl2 * $dongia;
            ChiTietPhieuNhapModel::where('MaPNH',$mapnh)->where('MaSP',$masp)
                                ->update([
                                        'SoLuong' => $sl2, 'ThanhTien' => $tien, 'DonGia' => $dongia
                                    ]);                        
        }
        else{
            ChiTietPhieuNhapModel::insert([
                'MaPNH' => $mapnh,
                'MaSP' => $masp,
                'SoLuong' => $soluong,
                'DonGia' => $dongia,
                'ThanhTien' => $thanhtien,
                'updated_at' => date('Y-m-d h-i-s'),
            ]);
        }        
        $slsp = SanPhamModel::where('MaSP',$masp)->select('SoLuong')->first();
        SanPhamModel::where('MaSP',$masp)
                    ->update([
                            'SoLuong' => $slsp->SoLuong + $soluong,
                            'Gia' => $dongia,
                            'GiaBan' => $dongia + ($dongia*0.2),
                        ]); 
        $tongtien = ChiTietPhieuNhapModel::where('MaPNH',$mapnh)->sum('ThanhTien');
        PhieuNhapHangModel::where('MaPNH',$mapnh)
                        ->update([
                                'TongTien' => $tongtien
                            ]);   

        $arr = [
            'status' => true,
            'message' => 'Thêm chi tiết thành công',
        ];
        return response()->json($arr,201,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // public function show($id) 
    // {        
    //     $chitietphieunhap = ChiTietPhieuNhapModel::find($id);
    //     if (is_null($chitietphieunhap)){
    //         $arr = [
    //             'status' => false,
    //             'message' => 'Không có chi tiết phiếu nhập này',
    //             'data' => [],
    //         ];
    //         return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);  
    //     }
    //     $arr = [
    //         'status' => true,
    //         'message' => 'Chi tiết phiếu nhập',
    //         'data' => new ChiTietPhieuNhapResource($chitietphieunhap),
    //     ];
    //     return response()->json($arr,201,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    // }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // public function update(Request $request, ChiTietPhieuNhapModel $chitietphieunhap)
    // {        
    //     $input = $request->all();
    //     $validator = Validator::make($input,[
    //         'MaSP' => 'required','SoLuong' => 'required',
    //          'DonGia' => 'required', 'ThanhTien' => 'required',
    //     ]);

    //     if ($validator->fails()){
    //         $arr = [
    //             'status' => false,
    //             'message' => 'Lỗi kiểm tra dữ liệu',
    //             'data' => $validator->errors()
    //         ];
    //         return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
    //     }

    //     $chitietphieunhap->MaSP = $input['MaSP'];
    //     $chitietphieunhap->SoLuong = $input['SoLuong'];
    //     $chitietphieunhap->DonGia = $input['DonGia'];
    //     $chitietphieunhap->ThanhTien = $input['ThanhTien'];

    //     $arr = [
    //         'status' => true,
    //         'message' => 'Chi tiết phiếu nhập đã cập nhật thành công',
    //         'data' => new ChiTietPhieuNhapResource($chitietphieunhap),
    //     ];
    //     return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    // }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // public function destroy($mapnh,$masp) // Xóa chi tiết phiếu nhập
    // {
    //     ChiTietPhieuNhapModel::where('MaPNH',$mapnh)->where('MaSP',$masp)->delete();
    //     $arr=[
    //         'status' => true,
    //         'message' => 'Chi tiết phiếu nhập đã được xóa',
    //     ];
    //     return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    // }
}
