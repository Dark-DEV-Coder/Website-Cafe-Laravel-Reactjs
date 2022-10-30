<?php

namespace App\Http\Controllers;

use App\Models\ChiTietQuyenModel;
use App\Http\Resources\ChiTietQuyen as ChiTietQuyenResource;
use Illuminate\Http\Request;

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
    // public function store(Request $request)
    // {
    //     //
    // }

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
