<?php

namespace App\Http\Controllers;

use App\Models\TaiKhoanModel;
use App\Http\Resources\TaiKhoan as TaiKhoanResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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
        $taikhoans = TaiKhoanModel::all();
        $arr=[
            'status' => true,
            'message' => 'Danh sách tài khoản',
            'data' => TaiKhoanResource::collection($taikhoans),
        ];
        return response()->json($arr,200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
                'success' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr,200);            
        }
        $taikhoan = TaiKhoanModel::create($input);
        $arr = [
            'status' => true,
            'message' => 'Tài khoản đã tạo thành công',
            'data' => new TaiKhoanResource($taikhoan),
        ];
        return response()->json($arr,201);
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
                'success' => false,
                'message' => 'Không có tài khoản này',
                'data' => [],
            ];
            return response()->json($arr,200);  
        }
        $arr = [
            'status' => true,
            'message' => 'Chi tiết tài khoản',
            'data' => new TaiKhoanResource($taikhoan),
        ];
        return response()->json($arr,201);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
            'MaTK' => 'required', 'MaQuyen' => 'required', 'TenDangNhap' => 'required', 'MatKhau' => 'required',
        ]);

        if ($validator->fails()){
            $arr = [
                'success' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr,200);            
        }

        $taikhoan->MaTK = $input['MaTK'];
        $taikhoan->MaQuyen = $input['MaQuyen'];
        $taikhoan->TenDangNhap = $input['TenDangNhap'];
        $taikhoan->MatKhau = $input['MatKhau'];

        $arr = [
            'status' => true,
            'message' => 'Tài khoản đã cập nhật thành công',
            'data' => new TaiKhoanResource($taikhoan),
        ];
        return response()->json($arr,200);
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
        return response()->json($arr,200);
    }
}
