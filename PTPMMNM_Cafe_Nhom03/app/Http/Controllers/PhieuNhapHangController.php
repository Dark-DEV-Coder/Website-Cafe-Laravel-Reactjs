<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\PhieuNhapHang as PhieuNhapHangResource;
use App\Models\PhieuNhapHangModel;
use Illuminate\Support\Facades\Validator;

class PhieuNhapHangController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() // Hàm lấy danh sách phiếu nhập hàng
    {        
        $phieunhaphangs = PhieuNhapHangModel::where('TrangThai','!=',0)->get();
        $arr=[
            'status' => true,
            'message' => 'Danh sách phiếu nhập hàng',
            'data' => PhieuNhapHangResource::collection($phieunhaphangs),
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) // Hàm tạo mới phiếu nhập hàng
    {        
        $input = $request->all();
        $validator = Validator::make($input,[
            'MaNV' => 'required','MaNCC' => 'required', 'NgayNhapHang' => 'required',
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
        $count = PhieuNhapHangModel::select('MaPNH')->count();
        $mapnh = 'PNH'+($count+1);
        $manv = $input['MaNV'];
        $mancc = $input['MaNCC'];
        $ngay = $input['NgayNhapHang'];
        PhieuNhapHangModel::insert([
            'MaPNH' => $mapnh,
            'MaNV' => $manv,
            'MaNCC' => $mancc,
            'NgayNhapHang' => $ngay,
            'TrangThai' => 1,
            'updated_at' => date('Y-m-d h-i-s'),
        ]);
        $arr = [
            'status' => true,
            'message' => 'Phiếu nhập hàng đã tạo thành công',
        ];
        return response()->json($arr,201,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) // Hàm tìm 1 phiếu nhập hàng
    {        
        $phieunhaphang = PhieuNhapHangModel::where('MaPNH',$id)->get();
        if (is_null($phieunhaphang)){
            $arr = [
                'status' => false,
                'message' => 'Không có phiếu nhập hàng này',
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);  
        }
        $arr = [
            'status' => true,
            'message' => 'Chi tiết phiếu nhập hàng',
            'data' => new PhieuNhapHangResource($phieunhaphang),
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
    public function update(Request $request, $id) // Hàm cập nhật thông tin phiếu nhập hàng
    {        
        $input = $request->all();
        $validator = Validator::make($input,[
            'MaNV' => 'required', 'MaNCC' => 'required', 'NgayNhapHang' => 'required',
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
        $mancc = $input['MaNCC'];
        $ngay = $input['NgayNhapHang'];
        PhieuNhapHangModel::where('MaPNH',$id)->update([
                                                'MaNV' => $manv,
                                                'MaNCC' => $mancc,
                                                'NgayNhapHang' => $ngay,
                                                ]);

        $arr = [
            'status' => true,
            'message' => 'Phiếu nhập hàng đã cập nhật thành công',
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) // Xóa phiếu nhập hàng (xóa ẩn)
    {        
        PhieuNhapHangModel::where('MaPNH',$id)->update(['TrangThai' => 0]);
        $arr=[
            'status' => true,
            'message' => 'Phiếu nhập hàng đã được xóa',
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}


// alo 123