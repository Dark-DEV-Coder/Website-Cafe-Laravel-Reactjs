import React from "react";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
    const navigate = useNavigate()
    const click = () => {
        navigate("/admin/login")
    }

    return (
        <>
            <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Không tìm thấy trang </h1>

        </>

    )
}
export default NotFound