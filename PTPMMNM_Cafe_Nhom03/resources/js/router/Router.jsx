import React from "react";
import { Routes, Route } from "react-router-dom";
import IndexLogin from "../admin/features/Login/index";
import HomeAdmin from "../admin/features/HomePage/index";
import NotFoundPage from "../components/NotFound";
const Router = () => {
    return (
        <div>
            {/* Muốn html nào k thay đổi theo router thì làm ở đây */}
            <Routes>
                <Route path="/" element={<HomeAdmin />}></Route>
                <Route path="/login_admin" element={<IndexLogin />}></Route>
                <Route path="/*" element={<NotFoundPage />}></Route>
            </Routes>
        </div>
    )
}
export default Router