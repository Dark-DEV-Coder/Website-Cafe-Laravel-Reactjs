<?php

namespace App\Http\Controllers;

use App\Models\ChiTietQuyenModel;
use App\Http\Resources\ChiTietQuyen as ChiTietQuyenResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ChiTietQuyenController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    // public function index()
    // {
    //     //
    // }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input,[
            'maqtk' => 'required', 'macn' => 'required',
        ]);
        // Kiểm tra dữ liệu
        if ($validator->fails()){
            $arr = [
                'status' => false,
                'message' => 'Chưa nhập đủ dữ liệu',
                'data' => $input
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }
        $maqtk = $input['maqtk'];
        $macn = $input['macn'];

        $checktontai = ChiTietQuyenModel::where('MaQuyen',$maqtk)->where('MaChucNang',$macn)->count();
        if ($checktontai != 0){
            $arr = [
                'status' => false,
                'message' => 'Quyền này đã tồn tại',
            ];            
        }
        else{
            ChiTietQuyenModel::insert([
                'MaQuyen' => $maqtk,
                'MaChucNang' => $macn,
                'updated_at' => date('Y-m-d h-i-s'),
            ]);
        }

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
    public function show($id) // Hàm lấy danh sách chi tiết 1 quyền tài khoản
    {
        $chitietquyens = ChiTietQuyenModel::where('MaQuyen',$id)->get();
        if (is_null($chitietquyens)){
            $arr = [
                'status' => false,
                'message' => 'Không có chi tiết quyền này',
                'data' => [],
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);  
        }
        $arr = [
            'status' => true,
            'message' => 'Chi tiết quyền',
            'data' => ChiTietQuyenResource::collection($chitietquyens),
        ];
        return response()->json($arr,201,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function detailfunction($id) // Tìm 1 sản phẩm theo mã sản phẩm
    {
        $chitiet = ChiTietQuyenModel::join('chuc_nang','chuc_nang.MaChucNang','=','chi_tiet_quyen.MaChucNang')
                                ->where('chi_tiet_quyen.MaQuyen',$id)
                                ->select('chi_tiet_quyen.*','chuc_nang.TenChucNang','chuc_nang.Icon','chuc_nang.Link')
                                ->get();
        if (is_null($chitiet)){
            $arr = [
                'status' => false,
                'message' => 'Không có chi tiết quyền này',
                'data' => [],
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);  
        }
        $arr = [
            'status' => true,
            'message' => 'Danh sách chi tiết quyền',
            'data' => $chitiet,
        ];
        return response()->json($arr,201,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function DeleteDetail(Request $request) // Tìm 1 sản phẩm theo mã sản phẩm    
    {
        $input = $request->all();
        $maqtk = $input['maqtk'];
        $macn = $input['macn'];
        ChiTietQuyenModel::where('MaQuyen',$maqtk)->where('MaChucNang',$macn)->delete();                     
        $arr=[
            'status' => true,
            'message' => 'Chi tiết quyền đã được xóa',
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // public function update(Request $request, $id)
    // {
    //     //
    // }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // public function destroy($id)
    // {
    //     //
    // }
}
