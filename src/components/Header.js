import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className="header__logo">
                <a ><img className='cred__logo' src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png" alt="" /></a>
            </div>

            <div className="header__options">
                <ul>
                    <li className="header__option">
                        <a href="#">credit score check</a>
                        <div className="option__top">free</div>
                    </li>
                    <li className="header__option">
                        <a href="#">credit card bill payment</a>
                        <div className="option__top">new</div>
                    </li>
                    <li className="header__option">
                        <a href="#">blog</a>
                    </li>
                    <li className="header__option">
                        <a href="#">we're hiring</a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Header
