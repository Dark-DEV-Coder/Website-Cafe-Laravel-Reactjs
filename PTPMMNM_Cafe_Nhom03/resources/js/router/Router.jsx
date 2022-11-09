import React from "react";
import { Routes, Route } from "react-router-dom";
import IndexLogin from "../admin/features/Login/index";
import HomeAdmin from "../admin/features/HomePage/index";
import Products from "../admin/features/Products";
import NotFoundPage from "../components/NotFound";
import New from "../admin/features/Products/components/newproduct/Newproduct";
import { productInputs } from "../admin/features/Products/components/newproduct/formSource";
import Single from "../admin/features/Products/components/singleproduct/Single";
import Category from "../admin/features/Category";
import Customer from "../admin/features/Customers";
import Provider from "../admin/features/Providers";
import Staff from "../admin/features/Staffs";
import Bill from "../admin/features/Bills";
import Import from "../admin/features/Imports";
import Account from "../admin/features/Accounts";
import Function from "../admin/features/Functions";
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
                        <Route path="single" element={<Single />}></Route>
                    </Route>
                    <Route path="category">
                        <Route index element={<Category />}></Route>
                        {/* <Route path="new" element={<New inputs={productInputs} title="Thêm sản phẩm" />}></Route>
                        <Route path="single" element={<Single />}></Route> */}
                    </Route>
                    <Route path="customer">
                        <Route index element={<Customer />}></Route>
                        {/* <Route path="new" element={<New inputs={productInputs} title="Thêm sản phẩm" />}></Route>
                        <Route path="single" element={<Single />}></Route> */}
                    </Route>
                    <Route path="provider">
                        <Route index element={<Provider />}></Route>
                        {/* <Route path="new" element={<New inputs={productInputs} title="Thêm sản phẩm" />}></Route>
                        <Route path="single" element={<Single />}></Route> */}
                    </Route>
                    <Route path="staff">
                        <Route index element={<Staff />}></Route>
                        {/* <Route path="new" element={<New inputs={productInputs} title="Thêm sản phẩm" />}></Route>
                        <Route path="single" element={<Single />}></Route> */}
                    </Route>
                    <Route path="bill">
                        <Route index element={<Bill />}></Route>
                        {/* <Route path="new" element={<New inputs={productInputs} title="Thêm sản phẩm" />}></Route>
                        <Route path="single" element={<Single />}></Route> */}
                    </Route>
                    <Route path="imports">
                        <Route index element={<Import />}></Route>
                        {/* <Route path="new" element={<New inputs={productInputs} title="Thêm sản phẩm" />}></Route>
                        <Route path="single" element={<Single />}></Route> */}
                    </Route>
                    <Route path="accounts">
                        <Route index element={<Account />}></Route>
                        {/* <Route path="new" element={<New inputs={productInputs} title="Thêm sản phẩm" />}></Route>
                        <Route path="single" element={<Single />}></Route> */}
                    </Route>
                    <Route path="functions">
                        <Route index element={<Function />}></Route>
                        {/* <Route path="new" element={<New inputs={productInputs} title="Thêm sản phẩm" />}></Route>
                        <Route path="single" element={<Single />}></Route> */}
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