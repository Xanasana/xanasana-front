'use client';
//IMPORTS REACT/NEXT DEPENDENCIES:
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
//IMPORTS EXT DEPENDENCIES:
import { motion, AnimatePresence } from 'framer-motion';
//IMPORTS GLOBAL STATES:
import { useGlobalState } from "@/context/GlobalStateContext";
//IMPORTS HOOKS:
//IMPORTS VARIANTS:
//import { fadeIn } from '@/lib/hero-variants';
//IMPORTS COMPONENTS:
//IMPORTS IMAGES:
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
//IMPORTS CSS:
//IMPORT ENV:

 

const Socials = ({containerStyles}) => {

    const {mobileNav, setMobileNav } = useGlobalState(false);

    return (
        <ul className={`${containerStyles}`}>
            <li className="">
                <Link href="https://www.facebook.com" legacyBehavior passHref>
                    <a target="_blank" rel="noopener noreferrer">
                        <FaFacebook 
                            className={`text-xl transition-all duration-300 ${
                                mobileNav
                                    ? "text-white hover:text-[#f19687]"
                                    : "text-[#473936] hover:text-white"
                                }`}
                        />
                    </a>
                </Link>
            </li>
            <li className="">
                <Link href="https://www.instagram.com" legacyBehavior passHref>
                    <a target="_blank" rel="noopener noreferrer">
                        <FaInstagram 
                            className={`text-xl transition-all duration-300 ${
                                mobileNav
                                    ? "text-white hover:text-[#f19687]"
                                    : "text-[#473936] hover:text-white"
                                }`}
                        />
                    </a>
                </Link>
            </li>
            <li className="">
                <Link href="https://www.youtube.com" legacyBehavior passHref>
                    <a target="_blank" rel="noopener noreferrer">
                        <FaYoutube 
                            className={`text-xl transition-all duration-300 ${
                                mobileNav
                                    ? "text-white hover:text-[#f19687]"
                                    : "text-[#473936] hover:text-white"
                                }`}
                        />
                    </a>
                </Link>
            </li>
        </ul>

    )
}

export default Socials