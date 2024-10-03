'use client';
//IMPORTS REACT/NEXT DEPENDENCIES:
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
//IMPORTS EXT DEPENDENCIES:
import CountUp from 'react-countup';
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



const StatsItem = ({countNum, countText, text}) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detectar si es móvil
        const checkIfMobile = () => {
            const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
            const isMobileDevice = /android|iphone|ipad|ipod|windows phone|blackberry|mobile/i.test(userAgent);
            setIsMobile(isMobileDevice);
        };

        checkIfMobile();
    }, []);

    const handleClick = () => {
        if (isMobile) {
            // Redirigir a WhatsApp
            window.open('https://wa.me/34666666666', '_blank'); // Reemplaza con tu número de WhatsApp
        } else {
            // Abrir el cliente de correo electrónico
            window.location.href = 'mailto:correo@ejemplo.com'; // Reemplaza con tu correo electrónico
        }
    };

    return (
        <div className="text-center font-marcellus">
            <div className="text-[40px] text-accent mb-2">
                <CountUp end={countNum} delay={1.2} duration={5}/>
                <span>{countText}</span>
            </div>
            <p className="text-[18px]">{text}</p>
        </div>
    )
}

export default StatsItem;