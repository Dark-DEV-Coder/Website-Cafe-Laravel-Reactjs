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
    public function index()
    {
        //
        $quyentaikhoans = QuyenTaiKhoanModel::all();
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
    public function store(Request $request)
    {
        //
        $input = $request->all();
        $validator = Validator::make($input,[
            'MaQuyen' => 'required', 'TenQuyen' => 'required',
        ]);

        if ($validator->fails()){
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }
        $quyentaikhoan = QuyenTaiKhoanModel::create($input);
        $arr = [
            'status' => true,
            'message' => 'Quyền tài khoản đã tạo thành công',
            'data' => new QuyenTaiKhoanResource($quyentaikhoan),
        ];
        return response()->json($arr,201,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $quyentaikhoan = QuyenTaiKhoanModel::find($id);
        if (is_null($quyentaikhoan)){
            $arr = [
                'status' => false,
                'message' => 'Không có quyền tài khoản này',
                'data' => [],
            ];
            return response()->json($arr,200);  
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
    public function update(Request $request, QuyenTaiKhoanModel $quyentaikhoan)
    {
        //
        $input = $request->all();
        $validator = Validator::make($input,[
            'TenQuyen' => 'required',
        ]);

        if ($validator->fails()){
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }

        $quyentaikhoan->TenQuyen = $input['TenQuyen'];

        $arr = [
            'status' => true,
            'message' => 'Quyền tài khoản đã cập nhật thành công',
            'data' => new QuyenTaiKhoanResource($quyentaikhoan),
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(QuyenTaiKhoanModel $quyentaikhoan)
    {
        //
        $quyentaikhoan->delete();
        $arr=[
            'status' => true,
            'message' => 'Quyền tài khoản đã được xóa',
            'data' => [],
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}
