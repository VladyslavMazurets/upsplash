import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineMapsHomeWork } from 'react-icons/md'

import { companyData } from '../../assets/constData/companyData'

function HamburgerDropdown() {
    return (
        <>
            <div className="hamburger-dropdown">
                <div className="hamburger-dropdown__company">
                    <p> <MdOutlineMapsHomeWork />
                        Company
                    </p>
                    {companyData.map(item =>
                        <Link key={item.id} to="/"
                            className="hamburger-dropdown__btn">
                            {item.title}
                        </Link>
                    )}
                </div>

                <div>

                </div>

                <div>

                </div>
            </div>
        </>
    )
}

export default HamburgerDropdown