import { SearchOutlined } from '@material-ui/icons'
import React from 'react'
import './Header.css'
import Logo from './robinhood.svg'

function Header() {
    return (
        <div className="header">
            {/**logo */}
            <div className="header__logo">
                    <img src={Logo} width={25} alt="logo" />
            </div>
            {/**search input */}
            <div className="header__search">
                <div className="search__container">
                    <SearchOutlined className="search" />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            {/**Menu items */}
            <div className="header__menuItems">
                <a href="/">Free Stocks</a>
                <a href="/">Portfolio</a>
                <a href="/">Cash</a>
                <a href="/">Messages</a>
                <a href="/">Account</a>
            </div>
        </div>
    )
}

export default Header
