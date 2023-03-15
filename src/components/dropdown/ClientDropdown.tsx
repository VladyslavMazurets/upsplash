import React from 'react'
import { Link } from 'react-router-dom'

import { useClickOutside } from '../../hooks/useClickOutside'

function ClientDropdown({ setClickedOnAvatar }: any) {

    const domNode = useClickOutside(() => setClickedOnAvatar(false))

    return (
        <>
            <div className="client-dropdown" ref={domNode}>
                <Link to="/" className="client-dropdown__btn">
                    View profile
                </Link>
                <Link to="/" className="client-dropdown__btn">
                    Stats
                </Link>
                <Link to="/" className="client-dropdown__btn">
                    Account settings
                </Link>
            </div>
        </>
    )
}

export default ClientDropdown