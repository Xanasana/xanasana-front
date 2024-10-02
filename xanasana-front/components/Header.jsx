'use client';
//IMPORTS REACT/NEXT DEPENDENCIES:
import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
//IMPORTS EXT DEPENDENCIES:
import { motion, AnimatePresence } from 'framer-motion';
//IMPORTS GLOBAL STATES:
import { useGlobalState } from "@/context/GlobalStateContext";
//IMPORTS HOOKS:
//IMPORTS VARIANTS:
// import { fadeIn } from '@/lib/hero-variants';
//IMPORTS COMPONENTS:
import { CursorContext } from "./CursorContext";
//IMPORTS IMAGES:
import { AiOutlineMenu } from "react-icons/ai"
import MobileNav from "./MobileNav";
import Nav from "./Nav";
//IMPORTS CSS:
//IMPORT ENV:

const Header = () => {

    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    const [mobileNav, setMobileNav ] = useState(false);
 
    return (
        <header 
            className="w-full pb-6 xl:pb-[50px] fixed bg-accent-100 xl:bg-transparent z-40"
        >
            {/* Topbar */}
            <div className="bg-secondary-100 mb-6 xl:mb-[50px] py-4 xl:py-0">Topbar</div>
            <div className=" w-[95%] mx-auto flex items-center justify-between px-2">
                <div className="">
                    <Link href='/'>
                        <Image 
                            src='/assets/Xanasana_gord.svg'
                            width={120}
                            height={44}
                            priority
                            style={{ color: '#473936' }} 
                            alt="Logo Xanasana fisioterapia"
                        />
                    </Link>
                </div>
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
                <div className="hidden lg:block">
                    <Nav />
                </div>
            </div>
        </header>
    );
}

export default Header;