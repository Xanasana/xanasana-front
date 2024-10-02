'use client';
//IMPORTS REACT/NEXT DEPENDENCIES:
import { useEffect, useState, useContext } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
//IMPORTS EXT DEPENDENCIES:
import { motion, AnimatePresence } from 'framer-motion';
//IMPORTS GLOBAL STATES:
import { useGlobalState } from "@/context/GlobalStateContext";
import { CursorContext } from "./CursorContext";
//IMPORTS HOOKS:
//IMPORTS VARIANTS:
//import { fadeIn } from '@/lib/hero-variants';
//IMPORTS COMPONENTS:
//IMPORTS IMAGES:
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

const Nav = () => {

    const pathname = usePathname();

    return (
        <nav>
            <div className="container mx-auto flex flex-row items-center justify-center gap-8 min-w-[620px]">
                {
                    links.map((link, index) => {
                        return (
                            <div key={index} className="">
                                <Link  
                                    href={link.href} 
                                    className={`${pathname === link.href && 'border-b-2 border-accent'} uppercase hover:font-semibold transition-all duration-300`}
                                >
                                    {link.name}
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </nav>
    )
}

export default Nav;