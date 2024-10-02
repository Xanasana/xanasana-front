'use client';
//IMPORTS REACT/NEXT DEPENDENCIES:
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
//IMPORTS EXT DEPENDENCIES:
import { motion, AnimatePresence } from 'framer-motion';
//IMPORTS GLOBAL STATES:
import { useGlobalState } from "@/context/GlobalStateContext";
//IMPORTS HOOKS:
//IMPORTS VARIANTS:
//
//IMPORTS COMPONENTS:
//IMPORTS IMAGES:
import { IoCloseOutline } from "react-icons/io5";
import Socials from "./Socials";
//IMPORTS CSS:
//IMPORT ENV:

const links = [
    {
        href: '/',
        name: 'Inicio'
    },
    {
        href: '/about',
        name: 'Nosotros'
    },
    {
        href: '/treatments',
        name: 'Tratamientos'
    },
    {
        href: '/locations',
        name: 'centros'
    },
    {
        href: '/contact',
        name: 'Contacto'
    },
]

const MobileNav = ({setMobileNav}) => {

    const pathname = usePathname();

    return (
        <nav className="relative flex flex-col justify-between h-full p-8">
            <div className="cursor-pointer text-accent" onClick={() => setMobileNav(false)}>
                <IoCloseOutline className="text-4xl"/>
            </div>
            <ul className="flex flex-col gap-6 text-white text-xl">
                {
                    links.map((link, index) => {
                        return (
                            <li key={index} className="" onClick={() => setMobileNav(false)}>
                                <Link  
                                    href={link.href} 
                                    className={`${pathname === link.href && 'border-b-2 border-accent'} uppercase max-w-max mx-auto`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <Socials 
                containerStyles="text-white text-2xl flex gap-4 justify-center" 
                // setMobileNav={setMobileNav}
            /> 
        </nav>
    )
}

export default MobileNav;