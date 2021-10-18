import React, { useEffect } from 'react'
import './PageTwo.css'


function PageTwo() {

    return (
        <section className='pageTwo'>
            <div className="phone__display">
                <img src="/images/p-left-1.png" alt="" className="phone__left-1 phone__width" data-aos='fade-up-left' />

                <img src="/images/p-left-2.png" alt="" className="phone__left-2 phone__width"
                    data-aos='fade-up-left' />


                <img src="/images/p-center.png" alt="" className="phone__center phone__width"
                    data-aos='fade-up'
                />
                <img src="/images/p-right-2.png" alt="" className="phone__right-1 phone__width"
                    data-aos='fade-up-right'
                />
                <img src="/images/p-right-1.png" alt="" className="phone__right-2 phone__width"
                    data-aos='fade-up-right' />
            </div>
        </section>
    )
}

export default PageTwo



