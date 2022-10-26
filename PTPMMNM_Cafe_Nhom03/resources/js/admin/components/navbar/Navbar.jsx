import React from 'react';
import "./Navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import TranslateIcon from '@mui/icons-material/Translate';
import NightsStayIcon from '@mui/icons-material/NightsStay';
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Search...' />
                    <SearchIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <TranslateIcon className='icon' />
                        English
                    </div>
                    <div className="item">
                        <NightsStayIcon className='icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
