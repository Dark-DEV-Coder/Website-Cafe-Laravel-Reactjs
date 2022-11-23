<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\HoaDon as HoaDonResource;
use App\Models\ChiTietHoaDonModel;
use App\Models\HoaDonModel;
use Illuminate\Support\Facades\Validator;

class HoaDonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() // Hàm lấy danh sách hóa đơn
    {        
        $hoadons = HoaDonModel::where('TrangThai','!=',0)->get();
        $arr=[
            'status' => true,
            'message' => 'Danh sách hóa đơn',
            'data' => HoaDonResource::collection($hoadons),
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) // Hàm thêm mới hóa đơn
    {        
        $input = $request->all();
        $validator = Validator::make($input,[
            'ho' => 'required', 'ten' => 'required',
            'ngaysinh' => 'required', 'gioitinh' => 'required', 'diachi' => 'required','sdt' => 'required', 
            'email' => 'required'
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
        
        $count = HoaDonModel::select('MaHD')->count();
        $mahd = 'HD'.strval($count+1);
        $ho = $input['ho'];
        $ten = $input['ten'];
        $ngay = $input['ngaysinh'];
        $gioitinh = $input['gioitinh'];
        $dc = $input['diachi'];
        $sdt = $input['sdt'];
        $email = $input['email'];        
        HoaDonModel::insert([
            'MaHD' => $mahd,
            'MaNV' => 'null',
            'MaKH' => 'null',            
            'HoKH' => $ho,
            'TenKH' => $ten,
            'NgaySinh' => $ngay,
            'DiaChi' => $dc,
            'GioiTinh' => $gioitinh,
            'SoDienThoai' => $sdt,
            'Email' => $email,
            'NgayLapHD' => date('Y-m-d'),
            'TrangThai' => 1,
            'TongTien' => 0,
            'updated_at' => date('Y-m-d h-i-s'),
        ]);

        $tongtien =0;
        $cthd = $input['cthd'];
        for($i=0;$i<count($cthd);$i++){
            ChiTietHoaDonModel::insert([
                'MaHD' => $mahd,
                'MaSP' => $cthd[$i]['productid'],
                'SoLuong' => $cthd[$i]['productcount'],
                'DonGia' => $cthd[$i]['productprice'],
                'ThanhTien' => $cthd[$i]['productcount'] * $cthd[$i]['productprice'],
                'updated_at' => date('Y-m-d h-i-s'),
            ]);
            $tongtien+=$cthd[$i]['productcount'] * $cthd[$i]['productprice'];
        }
        HoaDonModel::where('MaHD',$mahd)->update([
            'TongTien' => $tongtien,
        ]);

        $arr = [
            'status' => true,
            'message' => 'Hóa đơn đã tạo thành công',
        ];
        return response()->json($arr,201,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($ten) // Hàm tìm thông tin 1 hóa đơn
    {        
        $hd = HoaDonModel::where('HoKH','like',"%$ten%")->orWhere('TenKH','like',"%$ten%")->get();
        if (is_null($hd)){
            $arr = [
                'status' => false,
                'message' => 'Không có hóa đơn này',
                'data' => [],
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        }
        $arr = [
            'status' => true,
            'message' => 'Các hóa đơn cần tìm',
            'data' => HoaDonResource::collection($hd),
        ];
        return response()->json($arr,201,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function detail($id) // Tìm 1 sản phẩm theo mã sản phẩm
    {
        $hd = HoaDonModel::where('MaHD',$id)->first();
        if (is_null($hd)){
            $arr = [
                'status' => false,
                'message' => 'Không có hóa đơn này',
                'data' => [],
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);  
        }
        $arr = [
            'status' => true,
            'message' => 'Hóa đơn cần tìm',
            'data' => $hd,
        ];
        return response()->json($arr,201,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function ThongKe(Request $request) // Tìm 1 sản phẩm theo mã sản phẩm
    {
        $input = $request->all();
        $validator = Validator::make($input,[
            'tungay' => 'required', 'denngay' => 'required', 
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
        $tungay = $input['tungay'];
        $denngay = $input['denngay'];

        $currentdate = date('Y-m-d');
        $checkngay = Validator::make($input,[
            "denngay" => "before_or_equal:$currentdate",
        ]);
        if ($checkngay->fails()){
            $arr = [
                'status' => false,
                'message' => 'Ngày kết thúc thống kê quá ngày hiện tại',
                'data' => $checkngay->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }

        $checkngay = Validator::make($input,[
            "tungay" => "before_or_equal:$denngay",
        ]);
        if ($checkngay->fails()){
            $arr = [
                'status' => false,
                'message' => 'Ngày bắt đầu thống kê quá ngày kết thúc thống kê',
                'data' => $checkngay->errors()
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);            
        }

        $hd = HoaDonModel::where('NgayLapHD','>=',$tungay)->where('NgayLapHD','<=',$denngay)->get();
        $doanhthu = HoaDonModel::where('NgayLapHD','>=',$tungay)->where('NgayLapHD','<=',$denngay)->sum('TongTien');
        if (is_null($hd)){
            $arr = [
                'status' => false,
                'message' => 'Không có phiếu nhập hàng này',
                'data' => [],
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);  
        }
        $arr = [
            'status' => true,
            'message' => 'Phiếu nhập hàng cần tìm',
            'price' => $doanhthu,
            'data' => $hd,
        ];
        return response()->json($arr,201,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function ThongKeSPNoiBat() // Tìm 1 sản phẩm theo mã sản phẩm
    {        
        $hd = HoaDonModel::join('chi_tiet_hoa_don','chi_tiet_hoa_don.MaHD','=','hoa_don.MaHD')
                            ->where('hoa_don.TrangThai','=',4)
                            ->groupBy('chi_tiet_hoa_don.MaSP')
                            ->select('chi_tiet_hoa_don.MaSP')
                            ->get();
        if (is_null($hd)){
            $arr = [
                'status' => false,
                'message' => 'Không có phiếu nhập hàng này',
                'data' => [],
            ];
            return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);  
        }
        $arr = [
            'status' => true,
            'message' => 'Phiếu nhập hàng cần tìm',
            'data' => $hd,
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
    public function update(Request $request, $id) // Cập nhật thông tin hóa đơn
    {        
        $input = $request->all();
        $validator = Validator::make($input,[
            'manv' => 'required', 'trangthai' => 'required', 
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

        $manv = $input['manv'];
        $trangthai = $input['trangthai'];
        HoaDonModel::where('MaHD',$id)->update([
            'MaNV' => $manv,
            'TrangThai' => $trangthai,
        ]);

        $arr = [
            'status' => true,
            'message' => 'Hóa đơn đã cập nhật thành công',
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) // Xóa hóa đơn (xóa ẩn)
    {        
        HoaDonModel::where('MaHD',$id)->update(['TrangThai' => 0]);
        $arr=[
            'status' => true,
            'message' => 'Hóa đơn đã được xóa',
        ];
        return response()->json($arr,200,['Content-type','application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
}
