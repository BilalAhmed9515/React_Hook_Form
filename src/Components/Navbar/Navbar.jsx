import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { VscMenu } from "react-icons/vsc";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState()
    const menuopen = () => {
        setOpenMenu(!openMenu)
    }
    return (
        <>
            <div className='shadow-lg flex justify-between p-4 lg:px-20 h-16 items-center'>
                <div><h1>Logo</h1></div>
                <div className='lg:flex hidden'>
                    <ul className=' flex gap-16'>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="contactus">Contact Us</NavLink>
                    </ul>
                </div>
                {/* mobile menu icon */}
                <div className='lg:hidden'>
                    {
                        openMenu ?
                            <RxCross1 onClick={menuopen} /> :
                            <VscMenu onClick={menuopen} />
                    }
                </div>
                {/* mobile menu */}
                {
                    openMenu && (
                        < div className='absolute top-16 left-0 shadow-lg w-full bg-white flex justify-center p-4'>
                            <ul className='flex flex-col gap-2 text-center'>
                                <NavLink to="/" onClick={menuopen}>Home</NavLink>
                                <NavLink to="contactus" onClick={menuopen}>Contact Us</NavLink>
                            </ul>
                        </div>
                    )
                }




            </div >
        </>
    )
}

export default Navbar