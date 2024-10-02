'use client';
//IMPORTS REACT/NEXT DEPENDENCIES:
import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
//IMPORTS EXT DEPENDENCIES:
import { motion, AnimatePresence } from 'framer-motion';
//IMPORTS GLOBAL STATES:
import { useGlobalState } from "@/context/GlobalStateContext";
import { CursorContext } from "./CursorContext";
//IMPORTS HOOKS:
//IMPORTS VARIANTS:
// import { fadeIn } from '@/lib/hero-variants';
//IMPORTS COMPONENTS:
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Socials from "./Socials";
//IMPORTS IMAGES:
import { AiOutlineMenu } from "react-icons/ai"
import { FaPhoneAlt, FaWhatsapp  } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
//IMPORTS CSS:
//IMPORT ENV:

const Header = () => {

    // const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    const [mobileNav, setMobileNav ] = useState(false);
 
    return (
        <header 
            className="w-full pb-6 lg:pb-[50px] fixed bg-accent-100 lg:bg-transparent z-40"
        >
            {/* Topbar */}
            <div className="bg-secondary-100 mb-6 lg:mb-[50px] py-4 lg:py-0">
                <div className="w-[95%] mx-auto h-full">
                    <div className="flex items-center justify-between h-full">
                        {/* Phone & email */}
                        <div 
                            // onMouseEnter={mouseEnterHandler}
                            // onMouseLeave={mouseLeaveHandler}
                            className="flex flex-col lg:flex-row items-center h-full gap-2 lg:gap-6 w-full justify-between lg:w-auto lg:justify-normal"
                        >
                            {/* Phone */}
                            <div className="flex items-center gap-2 text-white">
                                <FaPhoneAlt />
                                <a href="tel:+34624717068" className="hover:underline">
                                    +34 624 717 068
                                </a>
                            </div>
                            {/* Email */}
                            <div className="flex items-center gap-2 text-white">
                                <FaWhatsapp  />
                                <a 
                                    href="https://wa.me/34624717068" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="hover:underline"
                                >
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                        {/* Socials */}
                        <div 
                            // onMouseEnter={mouseEnterHandler}
                            // onMouseLeave={mouseLeaveHandler}
                            className="hidden lg:block"
                        >
                            <Socials containerStyles='flex gap-4 text-white'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-[95%] mx-auto flex items-center justify-between px-2">
                <motion.div 
                    // onMouseEnter={mouseEnterHandler}
                    // onMouseLeave={mouseLeaveHandler}
                    className=""
                >
                    <Link href='/'>
                        <Image 
                            src='/assets/Xanasana_gord.svg'
                            width={150}
                            height={44}
                            priority
                            style={{ color: '#473936' }} 
                            alt="Logo Xanasana fisioterapia"
                        />
                    </Link>
                </motion.div>
                {/* Mobile Nav Trigger */}
                <div className="lg:hidden cursor-pointer" onClick={() => setMobileNav(!mobileNav)}>
                    <AiOutlineMenu className="text-3xl text-primary"/>
                </div>
                {/* Movile Nav */}
                <motion.div 
                    className="lg:hidden fixed w-[300px] bg-primary top-0 bottom-0 right-0 z-50"
                    initial={{right: '-100%'}}
                    animate={{right: mobileNav ? 0 : '-100%'}}
                    exit={{}}
                >
                    <MobileNav setMobileNav={setMobileNav}/>
                </motion.div>
                {/* Desktop nav */}
                <motion.div 
                    // onMouseEnter={mouseEnterHandler}
                    // onMouseLeave={mouseLeaveHandler}
                    className="hidden lg:block"
                >
                    <Nav />
                </motion.div>
            </div>
        </header>
    );
}

export default Header;