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
//IMPORTS CSS:
//IMPORT ENV:

const Treatments = () => {


    return (
        <motion.section 
            className="min-h-screen flex items-center overflow-x-hidden"
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2,
                    // duration: 1,
                    // ease: 'easeIn',
                    }
            }}
        >
            Treatments Page
        </motion.section>
    )
}

export default Treatments;