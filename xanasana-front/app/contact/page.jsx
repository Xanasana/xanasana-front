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
                    <div className="h-full w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 z-10">
                        {/* Text */}
                        <div className="">    
                            <h3 className="h3 mb-8 text-center lg:text-left">
                                Información de contacto
                            </h3>
                            
                            <div className="flex flex-col items-center lg:items-start gap-4">
                                {/* Items */}
                                <div className="flex flex-col items-start gap-0">
                                    <div className="relative w-[30px] h-[30px]">
                                        {/* Icon */}
                                        <Image
                                            className="object-contain  "
                                            src='/assets/contact/pin.svg'
                                            width={30}
                                            height={30}
                                            priority
                                            quality={100}
                                            alt="pin icon"
                                        />
                                    </div>
                                    <div className="pt-0 flex-1">
                                        <h4 className="h4 mb-0">Dirección</h4>
                                        <p className="leading-relaxed ">
                                            C/ Los pinos, 23
                                            <br/>
                                            Gijon, 08792 España.
                                        </p>
                                    </div>
                                </div>
                                
                                {/* End Item */}
                                <div className="">
                                    <div className="relative w-[36px] h-[36px]">
                                        {/* Icon */}
                                        <Image
                                            className="object-contain  "
                                            src='/assets/contact/email.svg'
                                            width={35}
                                            height={35}
                                            priority
                                            quality={100}
                                            alt="email icon"
                                        />
                                    </div>
                                    <div className="">
                                        <h4 className=""></h4>
                                        <p className=""></p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="relative w-[36px] h-[36px]">
                                        {/* Icon */}
                                        <Image
                                            className="object-contain  "
                                            src='/assets/contact/phone.svg'
                                            width={35}
                                            height={35}
                                            priority
                                            quality={100}
                                            alt="phone icon"
                                        />
                                    </div>
                                    <div className="">
                                        <h4 className=""></h4>
                                        <p className=""></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* Form */}
                        <div className="">
                            <FormContact />
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    )
}

export default Contact;