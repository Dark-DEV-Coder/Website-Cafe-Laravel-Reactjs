import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import CategoryIcon from '@mui/icons-material/Category';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
export const listChucNang = [
    {
        id: 1,
        name: "Dashboard",
        icon: <DashboardIcon className='icon' />,
        link: "home",
    },
    {
        id: 2,
        name: "Sản phẩm",
        icon: <LocalCafeIcon className='icon' />,
        link: "products",
    },
    {

        id: 3,
        name: "Loại sản phẩm",
        icon: <CategoryIcon className='icon' />,
        link: "category",
    },
    {
        id: 4,
        name: "Khách hàng",
        icon: <GroupsIcon className='icon' />,
        link: "customer",
    },
    {
        id: 5,
        name: "Nhà cung cấp",
        icon: <LocalShippingIcon className='icon' />,
        link: "provider",
    },
    {
        id: 6,
        name: "Nhân viên",
        icon: <ContactEmergencyIcon className='icon' />,
        link: "staff",
    },
    {
        id: 7,
        name: "Hóa đơn",
        icon: <ReceiptLongIcon className='icon' />,
        link: "bill",
    },
    {
        id: 8,
        name: "Phiếu nhâp hàng",
        icon: <FactCheckIcon className='icon' />,
        link: "imports",
    },
    {
        id: 9,
        name: "Tài khoản",
        icon: <RecordVoiceOverIcon className='icon' />,
        link: "accounts",
    },
    {
        id: 10,
        name: "Quyền tài khoản",
        icon: <PsychologyIcon className='icon' />,
        link: "kj",
    },
    {
        id: 11,
        name: "Đánh giá",
        icon: <ThumbsUpDownIcon className='icon' />,
        link: "kjj",
    },
]