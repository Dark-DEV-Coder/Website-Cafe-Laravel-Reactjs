import React from "react";
import { Routes, Route } from "react-router-dom";
import IndexLogin from "../admin/features/Login/index";
import HomeAdmin from "../admin/features/HomePage/index";
import Products from "../admin/features/Products";
import NotFoundPage from "../components/NotFound";
import New from "../admin/features/Products/components/newproduct/Newproduct";
import { productInputs } from "../admin/features/Products/components/newproduct/formSource";
import SingleProduct from "../admin/features/Products/components/singleproduct/Single";
import { testSingle } from "../listTest";
import Category from "../admin/features/Category";
import NewCategory from "../admin/features/Category/components/newcategory/Newcategory";
import { categoryInputs } from "../admin/features/Category/components/newcategory/formSource";
import Customer from "../admin/features/Customers";
import Newcustomers from "../admin/features/Customers/components/newcustomer/Newcustomers";
import { customerInputs } from "../admin/features/Customers/components/newcustomer/formSource";
import Provider from "../admin/features/Providers";
import Newprovider from "../admin/features/Providers/components/newprovider/Newprovider";
import Staff from "../admin/features/Staffs";
import NewStaff from "../admin/features/Staffs/components/newstaff/Newstaff";
import { staffInputs } from "../admin/features/Staffs/components/newstaff/formSource";
import Bill from "../admin/features/Bills";
import NewBill from "../admin/features/Bills/components/newbill/Newbill";
import { billInputs } from "../admin/features/Bills/components/newbill/formSource";
import Import from "../admin/features/Imports";
import NewImport from "../admin/features/Imports/components/newimport/Newimport";
import { importInputs } from "../admin/features/Imports/components/newimport/formSource";
import Account from "../admin/features/Accounts";
import NewAccount from "../admin/features/Accounts/components/newaccount/Newaccount";
import { accountInputs } from "../admin/features/Accounts/components/newaccount/formSource";
import Function from "../admin/features/Functions";
import NewFunction from "../admin/features/Functions/components/newfunction/Newfunction";
import { functionInputs } from "../admin/features/Functions/components/newfunction/formSource";
import Vote from "../admin/features/Votes";

const Router = () => {
    return (
        <div>
            {/* Muốn html nào k thay đổi theo router thì làm ở đây */}
            <Routes>
                <Route path="/">
                    <Route index element={<HomeAdmin />}></Route>
                    <Route path="home" element={<HomeAdmin />}></Route>
                    <Route path="login_admin" element={<IndexLogin />}></Route>
                    <Route path="/404" element={<NotFoundPage />}></Route>
                    <Route path="products">
                        <Route index element={<Products />}></Route>
                        <Route path="new" element={<New inputs={productInputs} title="Thêm sản phẩm" />}></Route>
                        <Route path="single" element={<SingleProduct />}></Route>
                    </Route>
                    <Route path="category">
                        <Route index element={<Category />}></Route>
                        <Route path="new" element={<NewCategory inputs={categoryInputs} title="Thêm loại sản phẩm" />}></Route>
                        {/* <Route path="single" element={<Single />}></Route> */}
                    </Route>
                    <Route path="customer">
                        <Route index element={<Customer />}></Route>
                        <Route path="new" element={<Newcustomers inputs={customerInputs} title="Thêm khách hàng" />}></Route>
                        {/* <Route path="single" element={<Single />}></Route> */}
                    </Route>
                    <Route path="provider">
                        <Route index element={<Provider />}></Route>
                        <Route path="new" element={<Newprovider title="Thêm nhà cung cấp" />}></Route>
                        {/* <Route path="single" element={<Single />}></Route> */}
                    </Route>
                    <Route path="staff">
                        <Route index element={<Staff />}></Route>
                        <Route path="new" element={<NewStaff inputs={staffInputs} title="Thêm nhân viên" />}></Route>
                        {/* <Route path="single" element={<Single />}></Route> */}
                    </Route>
                    <Route path="bill">
                        <Route index element={<Bill />}></Route>
                        <Route path="new" element={<NewBill inputs={billInputs} title="Thêm hóa đơn" />}></Route>
                        {/* <Route path="single" element={<Single />}></Route> */}
                    </Route>
                    <Route path="imports">
                        <Route index element={<Import />}></Route>
                        <Route path="new" element={<NewImport inputs={importInputs} title="Thêm phiếu nhập hàng" />}></Route>
                        {/* <Route path="single" element={<Single />}></Route> */}
                    </Route>
                    <Route path="accounts">
                        <Route index element={<Account />}></Route>
                        <Route path="new" element={<NewAccount inputs={accountInputs} title="Thêm tài khỏan" />}></Route>
                        {/* <Route path="single" element={<Single />}></Route> */}
                    </Route>
                    <Route path="functions">
                        <Route index element={<Function />}></Route>
                        <Route path="new" element={<NewFunction inputs={functionInputs} title="Thêm quyền tài khoản" />}></Route>
                        {/* <Route path="single" element={<Single />}></Route> */}
                    </Route>
                    <Route path="votes">
                        <Route index element={<Vote />}></Route>
                        {/* <Route path="new" element={<New inputs={productInputs} title="Thêm sản phẩm" />}></Route>
                        <Route path="single" element={<Single />}></Route> */}
                    </Route>
                </Route>


            </Routes>
        </div >
    )
}
export default Router