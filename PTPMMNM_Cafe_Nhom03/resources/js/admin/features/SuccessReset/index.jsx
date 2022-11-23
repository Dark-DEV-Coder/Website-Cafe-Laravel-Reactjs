import React from 'react';
import "../../../../css/bootstrap2.min.css";
import "./SuccessReset.scss";
const SuccessReset = () => {
    return (
        <div className="maincontainer">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-7 mx-auto">
                        <div className="bg-white rounded-lg shadow-sm p-5">

                            <p className="alert alert-success" style={{ textAlign: 'center', fontSize: '22px', fontWeight: 'bold' }}>Khôi phục mật khẩu thành công</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessReset
