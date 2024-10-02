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
//import { fadeIn } from '@/lib/hero-variants';
//IMPORTS COMPONENTS:
//IMPORTS IMAGES:
//IMPORTS CSS:
//IMPORT ENV:

const PageTransition = ({children}) => {

    const pathname = usePathname();

    return (
        <AnimatePresence>
            <motion.div 
                className="w-screen h-screen fixed bg-white top-0 pointer-events-none z-30"
                key={pathname}
                initial={{ opacity: 1}}
                animate={{ 
                    opacity: 0,
                    transition: {
                        delay: 1,
                        duration: 1,
                        ease: 'easeIn',
                     }
                }}
            />
            {children}
        </AnimatePresence>
    )
}

export default PageTransition