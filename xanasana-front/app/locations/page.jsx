'use client';
//IMPORTS REACT/NEXT DEPENDENCIES:
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
//IMPORTS EXT DEPENDENCIES:
import { motion, AnimatePresence } from 'framer-motion';
//IMPORTS GLOBAL STATES:
import { useGlobalState } from "@/context/GlobalStateContext";
import MapLocations from "@/components/MapLocations";
//IMPORTS HOOKS:
//IMPORTS VARIANTS:
//import { fadeIn } from '@/lib/hero-variants';
//IMPORTS COMPONENTS:
//IMPORTS IMAGES:
//IMPORTS CSS:
//IMPORT ENV:

const Locations = () => {


    return (
        <motion.section 
            className="w-full min-h-screen flex flex-col items-center pt-[220px] lg:pt-[150px] overflow-x-hidden "
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
            <h3 className="h3 text-center lg:text-left mb-4">
                Centros donde encontrarnos
            </h3>
            <MapLocations />
        </motion.section>
    )
}

export default Locations;