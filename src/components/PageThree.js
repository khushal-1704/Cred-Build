import React from 'react'
import './PageThree.css'

function PageThree({ header, sndHeader, detail, backgroundImg, btn }) {
    return (
        <section className='pageThree' style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className="container">
                <div className='box__top' >
                    <div className="top_one">{header}</div>
                    <div className="top_two">{sndHeader}</div>
                </div>
                <div className="box__bottom">
                    <div className="bottom_one">{detail}</div>

                    <div className="btn">{btn}</div>
                </div>
            </div>
        </section>
    )
}

export default PageThree;
