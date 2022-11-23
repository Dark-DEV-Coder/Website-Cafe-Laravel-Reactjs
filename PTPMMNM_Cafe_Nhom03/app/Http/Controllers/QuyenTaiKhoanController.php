<?php

namespace App\Http\Controllers;

use App\Http\Resources\QuyenTaiKhoan as QuyenTaiKhoanResource;
use App\Models\ChucNangModel;
use App\Models\QuyenTaiKhoanModel;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class QuyenTaiKhoanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() // Hàm lấy danh sách quyền tài khoản
    {    
        $quyentaikhoans = QuyenTaiKhoanModel::where('TrangThai','!=',0)->get();
        $arr=[
            'status' => true,
            'message' => 'Danh sách quyền tài khoản',
            'data' => QuyenTaiKhoanResource::collection($quyentaikhoans),
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) // Hàm thêm mới quyền tài khoản
    {        
        $input = $request->all();
        $validator = Validator::make($input,[
            'maqtk' => 'required', 'tenqtk' => 'required',
        ]);
        //Kiểm tra dữ liệu
        if ($validator->fails()){
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }
        $maq = $input['maqtk'];
        $ten = $input['tenqtk'];
        QuyenTaiKhoanModel::insert([
                                    'MaQuyen' => $maq,
                                    'TenQuyen' => $ten,
                                    'TrangThai' => 1,                                
                                    'updated_at' => date('Y-m-d h-i-s'),
                                    ]);
        $arr = [
            'status' => true,
            'message' => 'Quyền tài khoản đã tạo thành công',
            'data' => $maq,
        ];
        return response()->json($arr,201,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($ten) // Hàm tìm 1 quyền tài khoản
    {        
        $quyentaikhoan = QuyenTaiKhoanModel::where('TenQuyen','like',"%$ten%")->where('TrangThai','!=',0)->get();
        if (is_null($quyentaikhoan)){
            $arr = [
                'status' => false,
                'message' => 'Không có quyền tài khoản này',
                'data' => [],
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);  
        }
        $arr = [
            'status' => true,
            'message' => 'Chi tiết quyền tài khoản',
            'data' => $quyentaikhoan,
        ];
        return response()->json($arr,201,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function detail($id) // Tìm 1 sản phẩm theo mã sản phẩm
    {
        $qtk = QuyenTaiKhoanModel::where('MaQuyen',$id)->first();
        if (is_null($qtk)){
            $arr = [
                'status' => false,
                'message' => 'Không có loại sản phẩm này',
                'data' => [],
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);  
        }
        $arr = [
            'status' => true,
            'message' => 'Loại sản phẩm cần tìm',
            'data' => new QuyenTaiKhoanResource($qtk),
        ];
        return response()->json($arr,201,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function ListChucNang() // Tìm 1 sản phẩm theo mã sản phẩm
    {
        $cn = ChucNangModel::get();        
        $arr = [
            'status' => true,
            'message' => 'Danh sách chức năng',
            'data' => $cn,
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
    public function update(Request $request, $id) // Hàm cập nhật thông tin quyền tài khoản
    {        
        $input = $request->all();
        $validator = Validator::make($input,[
            'tenqtk' => 'required',
        ]);
        //Kiểm tra dữ liệu
        if ($validator->fails()){
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $input
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }

        $ten = $input['tenqtk'];
        QuyenTaiKhoanModel::where('MaQuyen',$id)->update(['TenQuyen' => $ten]);

        $arr = [
            'status' => true,
            'message' => 'Quyền tài khoản đã cập nhật thành công',
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) // Hàm xóa quyền tài khoản (xóa ẩn)
    {        
        QuyenTaiKhoanModel::where('MaQuyen',$id)->update(['TrangThai' => 0]);
        $arr=[
            'status' => true,
            'message' => 'Quyền tài khoản đã được xóa',
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}
