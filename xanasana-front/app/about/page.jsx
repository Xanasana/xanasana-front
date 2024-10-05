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
import StatsItem from "@/components/StatsItem";
//IMPORTS IMAGES:
//IMPORTS CSS:
//IMPORT ENV:

const About = () => {
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
        <div className="relative w-full h-full">
            <div
                className="absolute top-0 right-0 w-full h-full z-0"
                style={{
                backgroundImage: 'url("/assets/backgrounds/bg-2-vd.svg")', // Ruta de la imagen
                backgroundPosition: 'top right', // Ajustado a la esquina superior izquierda
                backgroundRepeat: 'repeat-y', // Repetir solo en el eje Y
                backgroundSize: '1080px 1920px', // Cubrir todo el contenedor
                opacity: 0.1,
                 
                }}
            ></div>
            <motion.section
            className="min-h-screen flex items-center overflow-x-hidden max-w-[1920px] mx-auto z-10"
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {
                    delay: 1,
                    // duration: 1,
                    // ease: 'easeIn',
                    }
            }}
            >
                <div className="container mx-auto flex items-center pt-48 pb-4 lg:pt-32 lg:pb-0 z-10">
                    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-8">
                        {/* Image */}
                        <motion.div 
                            className="relative w-[300px] h-[420px] lg:w-[380px] xl:w-[450px] lg:h-[530px] xl:h-[600px] mb-8 lg:mb-0 border-2 border-[#f2dfce] rounded-tl-[50px] rounded-bl-[0px] rounded-tr-[0px] rounded-br-[50px] overflow-hidden shadow-lg"
                            initial={{opacity: 0, x: -60}}
                            animate={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    delay: 0.8,
                                    duration: 0.8,
                                    ease: 'easeIn',
                                }
                            }}
                        >
                            <Image
                                className="object-contain w-[300px] h-[420px] lg:w-[380px] xl:w-[450px] lg:h-[530px] xl:h-[600px] max-w-[450px] max-h-[600px] object-cover"
                                src='/assets/about/about-1.webp'
                                width={660}
                                height={826}
                                priority
                                quality={100}
                                alt="About Image"
                            />
                        </motion.div>
                        {/* Text */}
                        <motion.div 
                            className="flex flex-col items-start lg:max-w-[550px] xl:max-w-[650px] text-center lg:text-left mx-auto lg:mx-0"
                            initial={{opacity: 0, x: 60}}
                            animate={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    delay: 0.8,
                                    duration: 0.5,
                                    ease: 'easeIn',
                                }
                            }}
                        >
                            <h2 
                                className="text-[30px] leading-[34px] lg:text-[40px] lg:leading-[42px] mb-0 mx-auto max-w-[540px] lg:max-w-none">Nos esforzamos por alcanzar la excelencia en nuestros tratamientos de fisioterapia.
                            </h2>
                            <p className="lead mx-auto max-w-[600px] lg:mx-0 text-[14px] leading-[18px] lg:text-[16px] lg:leading-[20px]">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia magni ex consectetur libero reiciendis obcaecati aperiam eaque laborum quasi enim. Quasi adipisci aperiam amet. Maxime quia non architecto accusantium voluptatum.
                            </p>
                            {/* Items */}
                            <div className="grid grid-cols-3 gap-[30px] mb-4 mx-auto lg:mx-0">
                                <div className="">
                                    <StatsItem countNum={12} countText={'+'} text={'Años de Experiencia'}/>
                                </div>
                                <div className="">
                                    <StatsItem countNum={10} countText={'+'} text={'Tratamientos'}/>
                                </div>
                                <div className="">
                                    <StatsItem countNum={200} countText={'+'} text={'Clientes de satisfechos'}/>
                                </div>
                                
                                {/* <div className="">
                                    <StatsItem countNum={12} countText={''} text={'Años de Experiencia'}/>
                                </div> */}
                            </div>
                            <motion.div 
                                className="flex flex-col items-start lg:max-w-[550px] xl:max-w-[650px] text-center lg:text-left mx-auto lg:mx-0"
                                initial={{opacity: 0, y: 60}}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: 0.8,
                                        duration: 0.5,
                                        ease: 'easeIn',
                                    }
                                }}
                            >
                                <div className="flex flex-col  items-center gap-0 max-w-max mx-auto lg:mx-0">
                                    <h2 
                                        className="w-full text-center lg:text-left text-[30px] leading-[34px] lg:text-[40px] lg:leading-[44px] mb-0 mx-auto max-w-[540px] lg:max-w-none">Formacion:
                                    </h2>
                                    <p className="lead mx-auto max-w-[600px] lg:mx-0 text-[14px] leading-[18px] lg:text-[16px] lg:leading-[20px]">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia magni ex consectetur libero reiciendis obcaecati aperiam eaque laborum quasi enim. Quasi adipisci aperiam amet. Maxime quia non architecto accusantium voluptatum.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div 
                                className="flex flex-col items-start lg:max-w-[550px] xl:max-w-[650px] text-center lg:text-left mx-auto lg:mx-0"
                                initial={{opacity: 0, y: 60}}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: 1.2,
                                        duration: 0.5,
                                        ease: 'easeIn',
                                    }
                                }}
                            >
                                <div className="flex flex-col lg:flex-row items-center gap-4 max-w-max mx-auto lg:mx-0">
                                    <button onClick={handleClick} className="btn btn-lg font-bold">
                                        Contactar
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                        
                    </div>
                </div>
            </motion.section>
        </div>
        
    )
}

export default About;