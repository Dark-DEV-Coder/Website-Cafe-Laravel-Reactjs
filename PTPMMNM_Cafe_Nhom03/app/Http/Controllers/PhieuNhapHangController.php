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
    public function index()
    {
        //
        $phieunhaphangs = PhieuNhapHangModel::all();
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
    public function store(Request $request)
    {
        //
        $input = $request->all();
        $validator = Validator::make($input,[
            'MaPNH' => 'required', 'MaNV' => 'required','MaNCC' => 'required', 'NgayNhapHang' => 'required',
        ]);

        if ($validator->fails()){
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }
        $phieunhaphang = PhieuNhapHangModel::create($input);
        $arr = [
            'status' => true,
            'message' => 'Phiếu nhập hàng đã tạo thành công',
            'data' => new PhieuNhapHangResource($phieunhaphang),
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
        $phieunhaphang = PhieuNhapHangModel::find($id);
        if (is_null($phieunhaphang)){
            $arr = [
                'status' => false,
                'message' => 'Không có phiếu nhập hàng này',
                'data' => [],
            ];
            return response()->json($arr,200);  
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
    public function update(Request $request, PhieuNhapHangModel $phieunhaphang)
    {
        //
        $input = $request->all();
        $validator = Validator::make($input,[
            'MaNCC' => 'required', 'NgayNhapHang' => 'required',
        ]);

        if ($validator->fails()){
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }

        $phieunhaphang->MaNCC = $input['MaNCC'];
        $phieunhaphang->NgayNhapHang = $input['NgayNhapHang'];

        $arr = [
            'status' => true,
            'message' => 'Phiếu nhập hàng đã cập nhật thành công',
            'data' => new PhieuNhapHangResource($phieunhaphang),
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(PhieuNhapHangModel $phieunhaphang)
    {
        //
        $phieunhaphang->delete();
        $arr=[
            'status' => true,
            'message' => 'Phiếu nhập hàng đã được xóa',
            'data' => [],
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}
