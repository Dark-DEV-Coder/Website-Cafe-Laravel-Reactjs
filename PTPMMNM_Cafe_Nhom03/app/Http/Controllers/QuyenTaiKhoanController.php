<?php

namespace App\Http\Controllers;

use App\Http\Resources\QuyenTaiKhoan as QuyenTaiKhoanResource;
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
            'MaQuyen' => 'required', 'TenQuyen' => 'required',
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
        $maq = $input['MaQuyen'];
        $ten = $input['TenQuyen'];
        QuyenTaiKhoanModel::insert([
                                    'MaQuyen' => $maq,
                                    'TenQuyen' => $ten,
                                    'TrangThai' => 1,                                
                                    'updated_at' => date('Y-m-d h-i-s'),
                                    ]);
        $arr = [
            'status' => true,
            'message' => 'Quyền tài khoản đã tạo thành công',
        ];
        return response()->json($arr,201,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) // Hàm tìm 1 quyền tài khoản
    {        
        $quyentaikhoan = QuyenTaiKhoanModel::where('MaQuyen',$id)->get();
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
            'data' => new QuyenTaiKhoanResource($quyentaikhoan),
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
            'TenQuyen' => 'required',
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

        $ten = $input['TenQuyen'];
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
