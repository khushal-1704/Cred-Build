import React from 'react'
import './Header.css'

function Header({ opacity }) {
    return (
        <div className='header' style={{ opacity: `${opacity}` }}>
            <div className="header__logo">
                <a ><img className='cred__logo' src="/images/cred-logo.png" alt="" /></a>
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
