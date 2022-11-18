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
    public function index() // Hàm lấy danh sách nhà cung cấp
    {        
        $nhacungcaps = NhaCungCapModel::where('TrangThai','!=',0)->get();
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
    public function store(Request $request) // Hàm thêm mới thông tin nhà cung cấp
    {        
        $input = $request->all();
        $validator = Validator::make($input,[
            'mancc' => 'required','tenncc' => 'required','diachincc' => 'required', 'sdtncc' => 'required',
        ]);

        if ($validator->fails()){
            $arr = [
                'status' => false,
                'message' => 'Chưa nhập đủ dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }

        $checkphone = Validator::make($input,[
            'sdtncc' => 'regex:/^(0)+([0-9]{9})$/',
        ]);
        if ($checkphone->fails()){
            $arr = [
                'status' => false,
                'message' => 'Số điện thoại không đúng định dạng hoặc không đủ 10 chữ số',
                'data' => $checkphone->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }
       
        $mancc = $input['mancc'];

        $checkmancc = NhaCungCapModel::where('MaNCC',$mancc)->count();
        if ($checkmancc!=0){
            $arr = [
                'status' => false,
                'message' => 'Mã nhà cung cấp đã tồn tại',
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE); 
        }

        $ten = $input['tenncc'];
        $dc = $input['diachincc'];
        $sdt = $input['sdtncc'];
        NhaCungCapModel::insert([
            'MaNCC' => $mancc,
            'TenNCC' => $ten,
            'DiaChi' => $dc,
            'SoDienThoai' => $sdt,
            'TrangThai' => 1,
            'updated_at' => date('Y-m-d h-i-s'),
        ]);

        $arr = [
            'status' => true,
            'message' => 'Nhà cung cấp đã tạo thành công',
        ];
        return response()->json($arr,201,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($ten) // Hàm tìm thông tin 1 nhà cung cấp
    {        
        $nhacungcap = NhaCungCapModel::where('TenNCC','like',"%$ten%")->get();
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
            'message' => 'Các nhà cung cấp cần tìm',
            'data' => NhaCungCapResource::collection($nhacungcap),
        ];
        return response()->json($arr,201,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function detail($id) // Tìm 1 sản phẩm theo mã sản phẩm
    {
        $nhacungcap = NhaCungCapModel::where('MaNCC',$id)->first();
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
            'message' => 'Nhà cung cấp cần tìm',
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
    public function update(Request $request, $id) // Hàm cập nhật thông tin nhà cung cấp
    {        
        $input = $request->all();
        $validator = Validator::make($input,[
            'tenncc' => 'required','diachincc' => 'required', 'sdtncc' => 'required',
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

        $checkphone = Validator::make($input,[
            'sdtncc' => 'regex:/^(0)+([0-9]{9})$/',
        ]);
        if ($checkphone->fails()){
            $arr = [
                'status' => false,
                'message' => 'Số điện thoại không đúng định dạng hoặc không đủ 10 chữ số',
                'data' => $checkphone->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }

        $ten = $input['tenncc'];
        $dc = $input['diachincc'];
        $sdt = $input['sdtncc'];
        NhaCungCapModel::where('MaNCC',$id)->update([
            'TenNCC' => $ten,
            'DiaChi' => $dc,
            'SoDienThoai' => $sdt,
        ]);

        $arr = [
            'status' => true,
            'message' => 'Nhà cung cấp đã cập nhật thành công',
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) // xóa nhà cung cấp (xóa ẩn)
    {        
        NhaCungCapModel::where('MaNCC',$id)->update(['TrangThai' => 0]);
        $arr=[
            'status' => true,
            'message' => 'Nhà cung cấp đã được xóa',
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}
