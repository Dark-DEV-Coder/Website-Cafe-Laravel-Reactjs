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
const Sidebar = ({chucNangList}) => {
    // const iconchucnang = [
    //     {icon: <DashboardIcon className='icon' />,},
    //     {icon: <LocalCafeIcon className='icon' />,},
    //     {icon: <CategoryIcon className='icon' />,},
    //     {icon: <GroupsIcon className='icon' />,},
    //     {icon: <LocalShippingIcon className='icon' />,},
    //     {icon: <ContactEmergencyIcon className='icon' />,},
    //     {icon: <ReceiptLongIcon className='icon' />,},
    //     {icon: <FactCheckIcon className='icon' />,},
    //     {icon: <RecordVoiceOverIcon className='icon' />,},
    //     {icon: <PsychologyIcon className='icon' />,},
    //     {icon: <ThumbsUpDownIcon className='icon' />,},
    // ];
    const navigate = useNavigate()
    const click = (link) => {
        navigate("/admin/" + link)
    }
    function Logout(){
        window.location.assign("http://127.0.0.1:8000/admin");
    }
    // const [listChucNang, setChucNang] = React.useState([]);
    // const [error, setError] = React.useState("");
    // const [loaded, setLoaded] = React.useState(false);
    // React.useEffect(() => {
    //     (async () => {
    //         try {
    //             const maquyen = JSON.parse(localStorage.getItem('quyentk'));
    //             await axios.get("http://127.0.0.1:8000/api/chitietquyen/"+maquyen).then((response) => {
    //                 setChucNang(response.data.data);
    //             });
    //         }
    //         catch (error) {
    //             setError(error.message);
    //         }
    //         finally {
    //             setLoaded(true);
    //         }
    //     })();

    // }, []);
    return (
        <div className='sidebar'>
            <div className="top">
                <span className="logo">Mizuuu</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    {
                        // listChucNang.map((chucnang) => (
                        //     <li key={chucnang.MaChucNang} onClick={() => click(chucnang.Link)} >
                        //         {chucnang.Icon}
                        //         <span>{chucnang.TenChucNang}</span>
                        //     </li>
                        // ))}
                        chucNangList.map((chucnang) => (
                            <li key={chucnang.id} onClick={() => click(chucnang.link)} >
                                {chucnang.icon}
                                <span>{chucnang.name}</span>
                            </li>
                        ))}

                    <p className="title">LOG OUT</p>
                    <li onClick={Logout}>
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
