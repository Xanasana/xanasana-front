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

 

const Socials = ({containerStyles, setMobileNav}) => {


    return (
        <ul className={`${containerStyles}`}>
            <li className="">
                <Link href="https://www.facebook.com" legacyBehavior passHref>
                    <a target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                </Link>
            </li>
            <li className="">
                <Link href="https://www.instagram.com" legacyBehavior passHref>
                    <a target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </Link>
            </li>
            <li className="">
                <Link href="https://www.youtube.com" legacyBehavior passHref>
                    <a target="_blank" rel="noopener noreferrer">
                        <FaYoutube />
                    </a>
                </Link>
            </li>
        </ul>

    )
}

export default Socials