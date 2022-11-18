<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\SanPhamModel;
use App\Http\Resources\SanPham as SanPhamResource;


class SanPhamController extends Controller
{    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() // Hàm lấy danh sách sản phẩm
    {
        $sanphams = SanPhamModel::where('TrangThai','!=',0)->get();
        $arr=[
            'status' => true,
            'message' => 'Danh sách sản phẩm',
            'data' => SanPhamResource::collection($sanphams),
        ];
        // Trả về dữ liệu dạng json
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) // Hàm thêm mới 1 sản phẩm
    {        
        $input = $request->all();
        $validator = Validator::make($input,[
            'masp' => 'required', 'lsp' => 'required', 'nccap' => 'required', 'tensp' => 'required',
            'motasp' => 'required', 'hinhsp' => 'required',
        ]);
        // Kiểm tra dữ liệu
        if ($validator->fails()){
            $arr = [
                'status' => false,
                'message' => 'Chưa nhập đủ dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }
        $masp = $input['masp'];
        if ($input['Method']=='PUT'){             
            $hinhsp = $request->file('hinhsp');  
            $loaisp = $input['lsp'];
            $ncc = $input['nccap'];
            $tensp = $input['tensp'];        
            $mota = $input['motasp'];      
            if ($input['doihinh'] == 1){
                $filename= date('YmdHis').'-'.$hinhsp->getClientOriginalName();        
                $hinhsp->move('uploads/product/', $filename); 
                $hinh = 'uploads/product/'.$filename;     
                SanPhamModel::where('MaSP',$masp)
                    ->update([
                            'MaLoaiSP' => $loaisp,'MaNCC' => $ncc,'TenSP' => $tensp,
                            'Hinh' => $hinh,'MoTa' => $mota
                        ]);
            }  
            else{
                SanPhamModel::where('MaSP',$masp)
                    ->update([
                            'MaLoaiSP' => $loaisp,'MaNCC' => $ncc,'TenSP' => $tensp,'MoTa' => $mota
                        ]);       
            }
            
            $arr = [
                'status' => true,
                'message' => 'Sản phẩm đã cập nhật thành công',
                'data' => [],
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }
        else{            
            $count = SanPhamModel::where('MaSP',$masp)->count();
            if ($count != 0){ // Kiểm tra sản phẩm đã tồn tại hay chưa
                $arr = [
                    'status' => false,
                    'message' => 'Mã sản phẩm đã tồn tại',
                    'data' => [],
                ];
                return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
            }       
            
            $hinhsp = $request->file('hinhsp');        
            $filename= date('YmdHis').'-'.$hinhsp->getClientOriginalName();        
            $hinhsp->move('uploads/product/', $filename);                

            $loaisp = $input['lsp'];
            $ncc = $input['nccap'];
            $tensp = $input['tensp'];
            $hinh = 'uploads/product/'.$filename;
            $mota = $input['motasp'];
            SanPhamModel::insert([
                                'MaSP' => $masp,
                                'MaLoaiSP' => $loaisp,
                                'MaNCC' => $ncc,
                                'TenSP' => $tensp,
                                'Hinh' => $hinh,
                                'MoTa' => $mota,
                                'SoLuong' => 0,
                                'Gia' => 0,
                                'GiaBan' => 0,
                                'TrangThai' => 1,
                                'updated_at' => date('Y-m-d h-i-s'),
                                ]);
            $arr = [
                'status' => true,
                'message' => 'Sản phẩm đã tạo thành công',
            ];
            return response()->json($arr,201,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($ten) // Tìm 1 sản phẩm theo mã sản phẩm
    {
        $sanpham = SanPhamModel::where('TenSP','like',"%$ten%")->get();
        if (is_null($sanpham)){
            $arr = [
                'status' => false,
                'message' => 'Không có sản phẩm này',
                'data' => [],
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);  
        }
        $arr = [
            'status' => true,
            'message' => 'Các sản phẩm cần tìm',
            'data' => SanPhamResource::collection($sanpham),
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
        $sanpham = SanPhamModel::where('MaSP',$id)->first();
                                // join('loai_sp','san_pham.MaLoaiSP','=','loai_sp.MaLoaiSP')
                                // ->join('nha_cung_cap','san_pham.MaNCC','=','nha_cung_cap.MaNCC')
                                // ->where('san_pham.MaSP',$id)
                                // ->select('san_pham.MaSP','loai_sp.MaLoaiSP','loai_sp.TenLoai',
                                //         'nha_cung_cap.MaNCC','nha_cung_cap.TenNCC','san_pham.TenSP'
                                //         ,'san_pham.Hinh','san_pham.MoTa','san_pham.SoLuong',
                                //         'san_pham.Gia','san_pham.GiaBan')
                                // ->first();
        if (is_null($sanpham)){
            $arr = [
                'status' => false,
                'message' => 'Không có sản phẩm này',
                'data' => [],
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);  
        }
        $arr = [
            'status' => true,
            'message' => 'Các sản phẩm cần tìm',
            'data' => new SanPhamResource($sanpham),
                        // ['MaSP' => $sanpham->MaSP,'MaLoaiSP' => $sanpham->MaLoaiSP,'TenLoai' => $sanpham->TenLoai,
                        // 'MaNCC' => $sanpham->MaNCC,'TenNCC' => $sanpham->TenNCC,'TenSP' => $sanpham->TenSP
                        // ,'Hinh' => $sanpham->Hinh,'MoTa' => $sanpham->MoTa,'SoLuong' => $sanpham->SoLuong
                        // ,'Gia' => $sanpham->Gia,'GiaBan' => $sanpham->GiaBan],
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
    public function update(Request $request, $id) // Hàm cập nhật dữ liệu sản phẩm
    {    
        $input = $request->all();
        $validator = Validator::make($input,[
            'masp' => 'required', 'lsp' => 'required', 'nccap' => 'required', 'tensp' => 'required',
            'motasp' => 'required', 'hinhsp' => 'required',
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

        $masp = $id;    
        $checkhinh = SanPhamModel::where('MaSP',$masp)->first();
        $hinhsp = $request->file('hinhsp');        
        if ($checkhinh->Hinh != $hinhsp){
            $filename= date('YmdHis').'-'.$hinhsp->getClientOriginalName();        
            $hinhsp->move('uploads/product/', $filename); 
            $hinh = 'uploads/product/'.$filename;      
        }  
        else
            $hinh=$hinhsp;       

        $loaisp = $input['lsp'];
        $ncc = $input['nccap'];
        $tensp = $input['tensp'];        
        $mota = $input['motasp'];
        SanPhamModel::where('MaSP',$masp)
                ->update([
                        'MaLoaiSP' => $loaisp,'MaNCC' => $ncc,'TenSP' => $tensp,
                        'Hinh' => $hinh,'MoTa' => $mota
                    ]);

        $arr = [
            'status' => true,
            'message' => 'Sản phẩm đã cập nhật thành công',
            'data' => [],
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        SanPhamModel::where('MaSP',$id)->update(['TrangThai' => 0]);
        $arr=[
            'status' => true,
            'message' => 'Sản phẩm đã được xóa',
            'data' => [],
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}
