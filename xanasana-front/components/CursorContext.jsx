'use client';
//IMPORTS REACT/NEXT DEPENDENCIES:
import { useEffect, useState, createContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
//IMPORTS EXT DEPENDENCIES:
import { motion,useMotionValue, useSpring } from 'framer-motion';
//IMPORTS GLOBAL STATES:
import { useGlobalState } from "@/context/GlobalStateContext";
//IMPORTS HOOKS:
//IMPORTS VARIANTS:
// import { fadeIn } from '@/lib/hero-variants';
//IMPORTS COMPONENTS:
//IMPORTS IMAGES:
//IMPORTS CSS:
//IMPORT ENV:


//Create context:
export const CursorContext = createContext();

const CursorProvider = ({children}) => {

    const [cursor, setCursor] = useState({size: 30, background: '#473936'});
    const [isHovering, setIsHovering] = useState(false);
    const smallViewportIsActive = useMediaQuery({
        query: '(max-width: 1200px)',
    });
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = {damping: 20, stiffness: 290, mass: 0.45};
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e) => {
        if ( !smallViewportIsActive ) {
            mouseX.set(e.clientX - cursor.size / 2);
            mouseY.set(e.clientY - cursor.size / 2);
        }else {
            setCursor({ size: 0, background: 'none' });
        }
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [cursor]);

    const mouseEnterHandler = () => {
        setCursor({ size: 50, background: '#00423a'});
        setIsHovering(true);
    }

    const mouseLeaveHandler = () => {
        setCursor({ size: 30, background: '#473936'});
        setIsHovering(false);
    }
    

    return (
        <CursorContext.Provider value={{ mouseEnterHandler, mouseLeaveHandler }}>
        <motion.div 
            className="fixed z-[99] pointer-events-none transition-all duration-300" 
            style={{
                left:springX,
                top: springY,
                width: cursor.size,
                height: cursor.size,
                borderRadius: '50%', // Esto redondea el cursor
                backgroundColor: cursor.background,
                mixBlendMode: isHovering ? 'difference' : 'normal',
                transition: 'width 0s ease-in-out, height 0s ease-in-out',
            }} 

        />
            {children}
        </CursorContext.Provider>
    )
}

export default CursorProvider;