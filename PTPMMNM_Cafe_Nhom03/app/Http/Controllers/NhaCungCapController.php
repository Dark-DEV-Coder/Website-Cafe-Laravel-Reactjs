<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\NhaCungCap as NhaCungCapResource;
use App\Models\NhaCungCapModel;
use Illuminate\Support\Facades\Validator;

class NhaCungCapController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $nhacungcaps = NhaCungCapModel::all();
        $arr=[
            'status' => true,
            'message' => 'Danh sách nhà cung cấp',
            'data' => NhaCungCapResource::collection($nhacungcaps),
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
            'MaNCC' => 'required', 'TenNCC' => 'required','DiaChi' => 'required', 'SoDienThoai' => 'required',
        ]);

        if ($validator->fails()){
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }
        $nhacungcap = NhaCungCapModel::create($input);
        $arr = [
            'status' => true,
            'message' => 'Nhà cung cấp đã tạo thành công',
            'data' => new NhaCungCapResource($nhacungcap),
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
        $nhacungcap = NhaCungCapModel::find($id);
        if (is_null($nhacungcap)){
            $arr = [
                'status' => false,
                'message' => 'Không có nhà cung cấp này',
                'data' => [],
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);  
        }
        $arr = [
            'status' => true,
            'message' => 'Chi tiết nhà cung cấp',
            'data' => new NhaCungCapResource($nhacungcap),
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
    public function update(Request $request, NhaCungCapModel $nhacungcap)
    {
        //
        $input = $request->all();
        $validator = Validator::make($input,[
            'TenNCC' => 'required','DiaChi' => 'required', 'SoDienThoai' => 'required',
        ]);

        if ($validator->fails()){
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }

        $nhacungcap->TenNCC = $input['TenNCC'];
        $nhacungcap->DiaChi = $input['DiaChi'];
        $nhacungcap->SoDienThoai = $input['SoDienThoai'];

        $arr = [
            'status' => true,
            'message' => 'Nhà cung cấp đã cập nhật thành công',
            'data' => new NhaCungCapResource($nhacungcap),
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(NhaCungCapModel $nhacungcap)
    {
        //
        $nhacungcap->delete();
        $arr=[
            'status' => true,
            'message' => 'Nhà cung cấp đã được xóa',
            'data' => [],
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}
