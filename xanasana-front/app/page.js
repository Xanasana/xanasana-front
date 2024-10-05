'use client';

//IMPORTS REACT/NEXT DEPENDENCIES:
import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
//IMPORTS EXT DEPENDENCIES:
import { motion, AnimatePresence } from 'framer-motion';
//IMPORTS GLOBAL STATES:
import { useGlobalState } from "@/context/GlobalStateContext";
import { CursorContext } from "../components/CursorContext";
//IMPORTS HOOKS:
//IMPORTS VARIANTS:
// import { fadeIn } from '@/lib/hero-variants';
//IMPORTS COMPONENTS:
import ModalVideo from "@/components/ModalVideo";
//IMPORTS IMAGES:
//IMPORTS CSS:
//IMPORT ENV:



const Home = () => {

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
      <motion.section 
            className="min-h-screen flex items-center overflow-x-hidden"
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {
                    delay: 1,
                }
            }}
        >
            <div className="absolute top-0 left-0 w-screen h-screen z-0"
                style={{
                backgroundImage: 'url("/assets/backgrounds/bg-2-b.svg")', // Reemplaza esta ruta con la ubicación de tu imagen
                backgroundPosition: 'center',  // Centra la imagen
                backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
                backgroundSize: 'cover',
                opacity:0.1
                }}
            ></div>
            <div className="container mx-auto z-10">
                <div className="flex flex-col lg:flex-row items-center h-full w-full">
                    {/* Text */}
                    <motion.div 
                        initial={{
                            opacity: 0,
                            y: -100
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition:{
                                delay: 1.2,
                                duration: 1,
                                ease: 'easeInOut'
                            }
                        }}
                        className="w-full text-center lg:text-left lg:w-[500px] pt-[120px]"
                    >
                      <h1 className="h1 mb-4">
                          Libera el potencial de tu cuerpo 
                          con Fisioterapia.
                      </h1>
                      <p className="lead max-w-xl mx-auto">
                          Experimente el poder curativo de la fisioterapia.
                      </p>
                      <div className="flex flex-col lg:flex-row items-center gap-4 max-w-max mx-auto lg:mx-0 z-10">
                          <button onClick={handleClick} className="btn btn-lg font-bold">
                              Contacta con nosotros
                          </button>
                          <div className="">
                            <ModalVideo />
                          </div>
                      </div>
                    </motion.div>
                    {/* Image */}
                    <div className="flex-1">
                        <motion.div 
                        initial={{
                            opacity: 0,
                            right: '-100%'
                        }}
                        animate={{
                            opacity: 1,
                            right: 0,
                            y: 0,
                            transition:{
                                delay: 0.1,
                                duration: 2,
                                ease: 'easeInOut'
                            }
                        }}
                            className="hidden lg:flex fixed bottom-0 max-h-[700px] max-w-[560px] mr-[50px] xxl:mr-[180px]"
                        >
                            <Image 
                                src='/assets/home/hero.png'
                                width={660}
                                height={826}
                                priority
                                quality={100} 
                                alt="Hero Image"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Home;
