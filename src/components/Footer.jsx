import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/image/logo.png';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';

const navlink = [
    {
        path: "/",
        display: "Home"
    },
    {
        path: "/about",
        display: "About Us"
    },
    {
        path: "/services",
        display: "Services"
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

const Footer = () => {
    return (
        <div className='lg:px-[120px] md:px-[50px] px-[20px] lg:py-[50px] md:py-[45px] py-[35px] bg-[#03373D] flex flex-col justify-center items-center text-center w-full'>
            <Link className='flex items-end' to={"/"}>
                <img className='lg:h-[50px] md:h-[40px] h-[35px]' src={logo} alt="image" />
                <h4 className='lg:font-bold text-[#fff] font-medium lg:text-[24px] md:text-[20px] text-[18px]'>Profast</h4>
            </Link>
            <p className='w-[50%] text-[#DADADA] pt-[20px] pb-[25px]'>
                Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
            </p>
            <ul className='flex items-center justify-center gap-[30px] py-[25px] border-b-[2px] border-t-[2px] border-dashed border-[#DADADA] w-full'>
                {
                    navlink?.map((link, index) => (
                        <li key={index} className='font-medium text-[#fff]'>
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

            <div className='flex items-center gap-[12px] pt-[25px]'>
                <a href="" className='bg-[#00B2FF] text-[#fff] h-[40px] w-[40px] flex items-center justify-center text-[25px] rounded-full'>
                    <FaFacebookF />
                </a>
                <a href="" className='bg-[#fff] text-[#000] h-[40px] w-[40px] flex items-center justify-center text-[25px] rounded-full'>
                    <FaXTwitter />
                </a>
                <a href="" className='bg-[#FD1D1D] text-[#fff] h-[40px] w-[40px] flex items-center justify-center text-[25px] rounded-full'>
                    <AiFillInstagram />
                </a>
                <a href="" className='bg-[#0c9702] text-[#fff] h-[40px] w-[40px] flex items-center justify-center text-[25px] rounded-full'>
                    <IoLogoWhatsapp />
                </a>
            </div>

        </div>
    );
};

export default Footer;