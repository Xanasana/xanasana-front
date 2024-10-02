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
//
//IMPORTS COMPONENTS:
//IMPORTS IMAGES:
import { IoCloseOutline } from "react-icons/io5";
//IMPORTS CSS:
//IMPORT ENV:



const MobileNav = ({setMobileNav}) => {


    return (
        <nav className="text-white">
            <div className="cursor-pointer" onClick={() => setMobileNav(false)}>
                <IoCloseOutline className="text-4xl"/>
            </div>
        </nav>
    )
}

export default MobileNav;