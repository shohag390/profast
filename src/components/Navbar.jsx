import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/image/logo.png';
import { IoIosMenu } from 'react-icons/io';
import { IoCloseOutline } from 'react-icons/io5';

const navlink = [
    {
        path: "/",
        display: "Home"
    },
    {
        path: "/services",
        display: "Services"
    },
    {
        path: "/about",
        display: "About Us"
    },
    {
        path: "/pricing",
        display: "Pricing"
    },
    {
        path: "/be-a-rider",
        display: "Be a Rider"
    },
]

const Navbar = () => {

    const [user, setUser] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <nav className='container mx-auto lg:px-[120px] md:px-[50px] px-[20px] lg:h-[11vh] md:h-[9vh] h-[8vh] flex items-center justify-between bg-[#fff]'>
            {/* Logo */}
            <Link className='flex items-end' to={"/"}>
                <img className='lg:h-[50px] md:h-[40px] h-[35px]' src={logo} alt="image" />
                <h4 className='lg:font-bold font-medium lg:text-[24px] md:text-[20px] text-[18px]'>Profast</h4>
            </Link>

            {/* Laptop Display Menu */}
            <ul className='lg:flex lg:items-center lg:gap-[30px] hidden'>
                {
                    navlink?.map((link, index) => (
                        <li key={index} className='font-medium text-[#606060]'>
                            <NavLink
                                className={(navClass) =>
                                    navClass.isActive ? "text-[#ACC857]" : "hover:text-[#ACC857]"
                                }
                                to={link?.path}
                            >
                                {link?.display}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>

            {/* Auth button */}
            <div className='flex items-center gap-[20px]'>
                <div>
                    {
                        !user ? (
                            <Link className='px-[30px] py-[10px] bg-[#ACC857] text-[#fff] rounded-full' to={"/login"}>
                                Sign In
                            </Link>
                        ) : (
                            <button className='px-[30px] py-[10px] bg-[#ACC857] text-[#fff] rounded-full'>
                                Profile
                            </button>
                        )
                    }
                </div>

                {/* Phone Menu bar Open Button */}
                <button className='' onClick={() => setOpen(!open)}>
                    {
                        !open ? <IoIosMenu />
                            : <IoCloseOutline />
                    }
                </button>
            </div >

            {/* Phone Display Menu */}
            <ul className='flex flex-col items-center justify-center gap-[30px] md:hidden'>
                {
                    navlink?.map((link, index) => (
                        <li key={index}>
                            <NavLink to={link?.path}>
                                {link?.display}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav >
    );
};

export default Navbar;