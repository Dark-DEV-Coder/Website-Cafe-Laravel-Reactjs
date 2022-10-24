import React from "react";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
    const navigate = useNavigate()
    const click = () => {
        navigate("/admin/login")
    }

    return (
        <>
            <h1>Not Found Page </h1>
            <button onClick={() => click()} >Click me</button>
        </>

    )
}
export default NotFound