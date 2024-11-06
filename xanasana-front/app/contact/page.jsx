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

import React from 'react'
import FormContact from "@/components/FormContact";

const Contact = () => {


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
                className="min-h-screen flex flex-col items-center gap-10 overflow-x-hidden pb-28 max-w-[1920px] mx-auto z-10"
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
                <div className="w-[95%] h-full mx-auto flex pt-[220px] lg:pt-[150px] pb-4 lg:pb-0 z-10">
                    <div className="h-full w-full flex flex-col lg:flex-row  items-center lg:items-start lg:top-10 justify-center lg:justify-between gap-12 z-10">
                        {/* Text */}
                        <motion.div 
                            className="flex flex-col items-center lg:items-start gap-4"
                            initial={{opacity: 0, x: -80}}
                                animate={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    delay: 1.2,
                                    duration: 0.8,
                                    ease: 'easeIn',
                                }
                            }}
                        >    
                            <h3 className="h3 mb-8 lg:mt-10 text-center lg:text-left">
                                Información de contacto
                            </h3>
                            
                            <div 
                                className="flex flex-col items-center lg:items-start gap-4"
                                
                            >
                                {/* Items */}
                                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-0 lg:gap-2">
                                    <div className="relative lg:flex lg:items-center lg:justify-center w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]">
                                        {/* Icon */}
                                        <Image
                                            className="object-contain lg:w-[50px] lg:h-[50px] "
                                            src='/assets/contact/pin.svg'
                                            width={30}
                                            height={30}
                                            priority
                                            quality={100}
                                            alt="location icon"
                                        />
                                    </div>
                                    <div className="text-center lg:text-left pt-0 flex-1">
                                        <h4 className="h4 mb-0 font-semibold">Dirección</h4>
                                        <p className="leading-relaxed ">
                                            C/ Santa lucia, 34 23462 Gijon Asturias
                                        </p>
                                    </div>
                                </div>
                                {/* End Item */}
                                {/* Items */}
                                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-0 lg:gap-2">
                                    <div className="relative lg:flex lg:items-center lg:justify-center w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]">
                                        {/* Icon */}
                                        <Image
                                            className="object-contain lg:w-[50px] lg:h-[50px] "
                                            src='/assets/contact/email.svg'
                                            width={30}
                                            height={30}
                                            priority
                                            quality={100}
                                            alt="email icon"
                                        />
                                    </div>
                                    <div className="text-center lg:text-left pt-0 flex-1">
                                        <h4 className="h4 mb-0 font-semibold">Dirección de correo</h4>
                                        <p className="leading-relaxed ">
                                            mail@mail.com
                                        </p>
                                    </div>
                                </div>
                                {/* End Item */}
                                {/* Items */}
                                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-0 lg:gap-2">
                                    <div className="relative lg:flex lg:items-center lg:justify-center w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]">
                                        {/* Icon */}
                                        <Image
                                            className="object-contain lg:w-[50px] lg:h-[50px] "
                                            src='/assets/contact/phone.svg'
                                            width={30}
                                            height={30}
                                            priority
                                            quality={100}
                                            alt="phone icon"
                                        />
                                    </div>
                                    <div className="text-center lg:text-left pt-0 flex-1">
                                        <h4 className="h4 mb-0 font-semibold">Nº de movil</h4>
                                        <p className="leading-relaxed ">
                                            +34 624 717 068
                                        </p>
                                    </div>
                                </div>
                                {/* End Item */}
                            </div>

                        </motion.div>
                        {/* Form */}
                        <motion.div 
                            className="w-full lg:w-[50%]"
                            initial={{opacity: 0, x: 80}}
                                animate={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    delay: 1.2,
                                    duration: 0.8,
                                    ease: 'easeIn',
                                }
                                }}
                        >
                            <div className="bg-[#f0cfbc] w-full max-w-[580px] gap-4 p-5 sm:p-10 mx-auto lg:mx-0 rounded-tl-[50px] rounded-bl-[0px] rounded-tr-[0px] rounded-br-[50px] overflow-hidden shadow-lg">
                                <h3 className="h3 text-[30px] leading-[30px] mb-8 text-center">
                                    Contacto con nosotros
                                </h3>
                                <FormContact />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </div>
    )
}

export default Contact;