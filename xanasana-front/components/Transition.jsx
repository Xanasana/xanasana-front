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

//Variants:
const animation = {
    initial: {
        top: '100%',
        opacity: 0
    },
    animate: {
        top: '100%',
        opacity:1
    },
    exit: {
        top: ['100%', '0%'],
    },
}

const Transition = () => {

    const pathname = usePathname();

    return (
        <div className=" ">
            <AnimatePresence mode='wait'>
                <div key={pathname}>
                    <div className="hidden xl:flex lg:h-screen lg:w-screen fixed top-0 left-0 right-0 pointer-events-none z-40">
                        <motion.div 
                            className="h-full w-full bg-[#e2cfbd] relative" 
                            variants={animation} 
                            initial='initial' 
                            animate='animate' 
                            // exit='exit' 
                            transition={{ 
                                duration: 0.2, 
                                ease: 'easeInOut', 
                                delay: 0.2, 
                            }} 
                        />
                    </div>
                </div>
            </AnimatePresence>
        </div>
    )
}

export default Transition