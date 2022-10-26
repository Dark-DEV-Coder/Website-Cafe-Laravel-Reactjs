import React from 'react'
import "./Dashboard.scss";
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
const Dashboard = ({ type }) => {
    let data;
    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlineOutlinedIcon className='icon' style={{ color: "crimson", backgroundColor: "rgba(255, 0, 0, 0.2)" }} />,

            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "See all orders",
                icon: <ShoppingCartCheckoutIcon className='icon' style={{ color: "goldenrod", backgroundColor: "rgba(218, 165 , 32, 0.2)" }} />,

            };
            break;
        case "erarning":
            data = {
                title: "EARNINGS",
                isMoney: false,
                link: "See all earnings",
                icon: <LocalAtmIcon className='icon' style={{ color: "green", backgroundColor: "rgba(0, 128, 0, 0.2)" }} />,

            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: false,
                link: "See all balances",
                icon: <AccountBalanceWalletOutlinedIcon className='icon' style={{ color: "purple", backgroundColor: "rgba(128, 0, 128, 0.2)" }} />,

            };
            break;
        default:
            break;
    }
    return (
        <div className='widget'>
            <div className="left">
                <span className='title'>{data.title}</span>
                <span className='counter'>100</span>
                <span className='link'>{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardControlKeyIcon className='icon-icon' />
                    20%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Dashboard
