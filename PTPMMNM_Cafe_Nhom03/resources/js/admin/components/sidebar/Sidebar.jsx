import React from 'react'
import "./Sidebar.scss";
import { useNavigate } from 'react-router-dom';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import LocalCafeIcon from '@mui/icons-material/LocalCafe';
// import CategoryIcon from '@mui/icons-material/Category';
// import GroupsIcon from '@mui/icons-material/Groups';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
// import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
// import FactCheckIcon from '@mui/icons-material/FactCheck';
// import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
// import PsychologyIcon from '@mui/icons-material/Psychology';
// import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
const Sidebar = ({ chucNangList }) => {
    const navigate = useNavigate()
    const click = (link) => {
        navigate("/admin/" + link)
    }
    return (
        <div className='sidebar'>
            <div className="top">
                <span className="logo">Mizuuu</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    {
                        chucNangList.map((chucnang, index) => (
                            <li key={chucnang.id} onClick={() => click(chucnang.link)} >
                                {chucnang.icon}
                                <span>{chucnang.name}</span>
                            </li>
                        ))}

                    <p className="title">LOG OUT</p>
                    <li>
                        <LogoutIcon className='icon' />
                        <span>Logout</span>
                    </li>

                </ul>

            </div>
            {/* <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div> */}
        </div>
    )
}

export default Sidebar
