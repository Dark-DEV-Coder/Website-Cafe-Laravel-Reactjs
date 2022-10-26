<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\TaiKhoanModel;
use App\Http\Resources\TaiKhoan as TaiKhoanResource;
use Illuminate\Support\Facades\DB;

class TaiKhoanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $taikhoans = DB::table('tai_khoan')->get();
        $arr=[
            'status' => true,
            'message' => 'Danh sách tài khoản',
            'data' => TaiKhoanResource::collection($taikhoans),
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
            'MaTK' => 'required', 'MaQuyen' => 'required', 'TenDangNhap' => 'required', 'MatKhau' => 'required',
        ]);

        if ($validator->fails()){
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }
        $taikhoan = TaiKhoanModel::create($input);
        $arr = [
            'status' => true,
            'message' => 'Tài khoản đã tạo thành công',
            'data' => new TaiKhoanResource($taikhoan),
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
        $taikhoan = TaiKhoanModel::find($id);
        if (is_null($taikhoan)){
            $arr = [
                'status' => false,
                'message' => 'Không có tài khoản này',
                'data' => [],
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);  
        }
        $arr = [
            'status' => true,
            'message' => 'Chi tiết tài khoản',
            'data' => new TaiKhoanResource($taikhoan),
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
    public function update(Request $request, TaiKhoanModel $taikhoan)
    {
        //
        $input = $request->all();
        $validator = Validator::make($input,[
            'MaQuyen' => 'required', 'TenDangNhap' => 'required', 'MatKhau' => 'required',
        ]);

        if ($validator->fails()){
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }

        $taikhoan->MaQuyen = $input['MaQuyen'];
        $taikhoan->TenDangNhap = $input['TenDangNhap'];
        $taikhoan->MatKhau = $input['MatKhau'];

        $arr = [
            'status' => true,
            'message' => 'Tài khoản đã cập nhật thành công',
            'data' => new TaiKhoanResource($taikhoan),
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(TaiKhoanModel $taikhoan)
    {
        //
        $taikhoan->delete();
        $arr=[
            'status' => true,
            'message' => 'Tài khoản đã được xóa',
            'data' => [],
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}
