import React from "react";
import './PageOne.css'

const PageOne = () => {
    return (
        <section className="pageOne">
            <div className="page__header">
                <div className="header__logo">
                    <a href="#">
                        <img src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png" alt="" className='cred__logo' />
                    </a>
                </div>
                <div className="top__options">
                    <ul>
                        <li className="top__option">
                            <a href="#">credit score check</a>
                            <div className="top">free</div>
                        </li>
                        <li className="top__option">
                            <a href="#">credit card bill payment</a>
                            <div className="top">new</div>
                        </li>
                        <li className="top__option">
                            <a href="#">blog</a>
                        </li>
                        <li className="top__option">
                            <a href="#">we're hiring</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="page__bottom">
                <div className="bottom__header">
                    rewards for paying
                    credit card bills.
                </div>
                <div className='header__two' >join 5.9M+ members and win rewards worth ₹5 crores daily.
                </div>
                <div className="btn d__btn">Download CRED</div>
            </div>
        </section>
    )
}

export default PageOne;