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
            className="min-h-screen flex flex-col items-center gap-10 overflow-x-hidden pb-28 max-w-[1920px] mx-auto"
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
            {/* Fisioterapia general */}
            <div className="w-[95%] mx-auto flex items-center pt-[220px] lg:pt-[150px] pb-4 lg:pb-0">
                <div className="w-full h-full mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4">

                    {/* Text */}
                    <motion.div 
                        className="w-full lg:max-w-[40%]"
                        initial={{opacity: 0, x: -60}}
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
                        <h2 
                            className="text-[30px] leading-[34px] lg:text-[40px] lg:leading-[42px] mb-2 mx-auto max-w-[540px] lg:max-w-none text-center lg:text-left">
                                Fisioterapia general
                        </h2>
                        <p className="lead mx-auto max-w-[600px] lg:mx-0 text-[14px] leading-[18px] lg:text-[16px] lg:leading-[20px] text-center lg:text-left">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia magni ex consectetur libero reiciendis obcaecati aperiam eaque laborum quasi enim. Quasi adipisci aperiam amet. Maxime quia non architecto accusantium voluptatum.
                        </p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] mb-8 mx-auto lg:mx-0">
                            {/* Item */}
                            <div className="flex-1 flex flex-col  justify-center lg:justify-start items-center lg:items-start">
                                <div className="flex items-center gap-[12px] mb-0">
                                    <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                    <h3 className="text-1xl font-montserrat font-semibold">Atendemos a domicilio.</h3>
                                    
                                </div>
                                <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </p>  
                            </div>
                            {/* End Item */}
                            {/* Item */}
                            <div className="flex-1 flex flex-col  justify-center lg:justify-start items-center lg:items-start">
                                <div className="flex items-center gap-[12px] mb-0">
                                    <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                    <h3 className="text-1xl font-montserrat font-semibold">Item 2</h3>
                                    
                                </div>
                                <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </p>  
                            </div>
                            {/* End Item */}
                            {/* Item */}
                            <div className="flex-1 flex flex-col  justify-center lg:justify-start items-center lg:items-start">
                                <div className="flex items-center gap-[12px] mb-0">
                                    <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                    <h3 className="text-1xl font-montserrat font-semibold">Item 3</h3>

                                </div>
                                <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </p> 
                            </div>
                            {/* End Item */}
                            {/* Item */}
                            <div className="flex-1 flex flex-col justify-center lg:justify-start items-center lg:items-start">
                                <div className="flex items-center gap-[12px] mb-0">
                                    <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                    <h3 className="text-1xl font-montserrat font-semibold">Item 4</h3>
                                    
                                </div>
                                <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </p>  
                            </div>
                            {/* End Item */}                         
                        </div>
                        <motion.div 
                            className="flex flex-col items-start lg:max-w-[550px] xl:max-w-[650px] text-center lg:text-left mx-auto lg:mx-0"
                            initial={{opacity: 0, y: 60}}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 1.4,
                                    duration: 0.8,
                                    ease: 'easeIn',
                                }
                            }}
                        >
                            <div 
                                className="hidden lg:flex flex-col lg:flex-row items-center gap-4 max-w-max mx-auto lg:mx-0"
                                initial={{opacity: 0, y: 40}}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 1.2,
                                    duration: 1.5,
                                    ease: 'easeIn',
                                }
                            }}
                            >
                                <button onClick={handleClick} className="btn btn-lg font-bold">
                                    Contactar
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                    {/* Image */}
                    <motion.div 
                        className="flex items-center justify-center relative mb-8 lg:mb-0"
                        initial={{opacity: 0, x: 120}}
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
                        <Image
                            className="object-contain  "
                            src='/assets/treatments/treatments-1.webp'
                            width={800}
                            height={506}
                            priority
                            quality={100}
                            alt="About Image"
                        />
                    </motion.div>
                    <div 
                        className="lg:hidden flex flex-col lg:flex-row items-center gap-4 max-w-max mx-auto lg:mx-0"
                        initial={{opacity: 0, y: 40}}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: 1.2,
                                duration: 1.5,
                                ease: 'easeIn',
                            }
                        }}
                        >
                        <button onClick={handleClick} className="btn btn-lg font-bold">
                            Contactar
                        </button>
                    </div>

                </div>
            </div>
            {/* Fisioterapia para deportistas */}
            <div className="w-[95%] mx-auto flex items-center mt-[0px] pb-4 lg:pb-0">
                <div className="w-full h-full mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4">
                    
                    {/* Image */}
                    <motion.div 
                        className="flex items-center justify-center relative mb-8 lg:mb-0 order-2 lg:order-first"
                        initial={{opacity: 0, x: -120}}
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
                        <Image
                            className="object-contain  "
                            src='/assets/treatments/treatments-2.webp'
                            width={800}
                            height={506}
                            priority
                            quality={100}
                            alt="About Image"
                        />
                    </motion.div>

                    {/* Text */}
                    <motion.div 
                        className="w-full lg:max-w-[40%] order-1 lg:order-2"
                        initial={{opacity: 0, x: 60}}
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
                        <h2 
                            className="text-[30px] leading-[34px] lg:text-[40px] lg:leading-[42px] mb-2 mx-auto max-w-[540px] lg:max-w-none text-center lg:text-left">
                                Fisioterapia para deportistas
                        </h2>
                        <p className="lead mx-auto max-w-[600px] lg:mx-0 text-[14px] leading-[18px] lg:text-[16px] lg:leading-[20px] text-center lg:text-left">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia magni ex consectetur libero reiciendis obcaecati aperiam eaque laborum quasi enim. Quasi adipisci aperiam amet. Maxime quia non architecto accusantium voluptatum.
                        </p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] mb-8 mx-auto lg:mx-0">
                            {/* Item */}
                            <div className="flex-1 flex flex-col  justify-center lg:justify-start items-center lg:items-start">
                                <div className="flex items-center gap-[12px] mb-0">
                                    <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                    <h3 className="text-1xl font-montserrat font-semibold">Atendemos a domicilio.</h3>
                                    
                                </div>
                                <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </p>  
                            </div>
                            {/* End Item */}
                            {/* Item */}
                            <div className="flex-1 flex flex-col  justify-center lg:justify-start items-center lg:items-start">
                                <div className="flex items-center gap-[12px] mb-0">
                                    <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                    <h3 className="text-1xl font-montserrat font-semibold">Item 2</h3>
                                    
                                </div>
                                <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </p>  
                            </div>
                            {/* End Item */}
                            {/* Item */}
                            <div className="flex-1 flex flex-col  justify-center lg:justify-start items-center lg:items-start">
                                <div className="flex items-center gap-[12px] mb-0">
                                    <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                    <h3 className="text-1xl font-montserrat font-semibold">Item 3</h3>

                                </div>
                                <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </p> 
                            </div>
                            {/* End Item */}
                            {/* Item */}
                            <div className="flex-1 flex flex-col justify-center lg:justify-start items-center lg:items-start">
                                <div className="flex items-center gap-[12px] mb-0">
                                    <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                    <h3 className="text-1xl font-montserrat font-semibold">Item 4</h3>
                                    
                                </div>
                                <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </p>  
                            </div>
                            {/* End Item */}                         
                        </div>
                        <motion.div 
                            className="hidden lg:flex flex-col items-start lg:max-w-[550px] xl:max-w-[650px] text-center lg:text-left mx-auto lg:mx-0"
                            initial={{opacity: 0, y: 60}}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 1.4,
                                    duration: 0.8,
                                    ease: 'easeIn',
                                }
                            }}
                        >
                            <div 
                                className="flex flex-col lg:flex-row items-center gap-4 max-w-max mx-auto lg:mx-0"
                                initial={{opacity: 0, y: 40}}
                                animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 1.2,
                                    duration: 1.5,
                                    ease: 'easeIn',
                                }
                            }}
                            >
                                <button onClick={handleClick} className="btn btn-lg font-bold">
                                    Contactar
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                    
                    <div 
                        className=" flex lg:hidden flex-col lg:flex-row items-center gap-4 max-w-max mx-auto lg:mx-0 order-3"
                        initial={{opacity: 0, y: 40}}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: 1.2,
                                duration: 1.5,
                                ease: 'easeIn',
                            }
                        }}
                        >
                        <button onClick={handleClick} className="btn btn-lg font-bold ">
                            Contactar
                        </button>
                    </div>

                </div>
            </div>
            {/* Fisioterapia Postoperatoria */}
            <div className="w-[95%] mx-auto flex items-center pt-[0px] pb-4 lg:pb-0">
                <div className="w-full h-full mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4">

                    {/* Text */}
                    <motion.div 
                        className="w-full lg:max-w-[40%]"
                        initial={{opacity: 0, x: -60}}
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
                        <h2 
                            className="text-[30px] leading-[34px] lg:text-[40px] lg:leading-[42px] mb-2 mx-auto max-w-[540px] lg:max-w-none text-center lg:text-left">
                                Fisioterapia Postoperatoria
                        </h2>
                        <p className="lead mx-auto max-w-[600px] lg:mx-0 text-[14px] leading-[18px] lg:text-[16px] lg:leading-[20px] text-center lg:text-left">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia magni ex consectetur libero reiciendis obcaecati aperiam eaque laborum quasi enim. Quasi adipisci aperiam amet. Maxime quia non architecto accusantium voluptatum.
                        </p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] mb-8 mx-auto lg:mx-0">
                            {/* Item */}
                            <div className="flex-1 flex flex-col  justify-center lg:justify-start items-center lg:items-start">
                                <div className="flex items-center gap-[12px] mb-0">
                                    <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                    <h3 className="text-1xl font-montserrat font-semibold">Atendemos a domicilio.</h3>
                                    
                                </div>
                                <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </p>  
                            </div>
                            {/* End Item */}
                            {/* Item */}
                            <div className="flex-1 flex flex-col  justify-center lg:justify-start items-center lg:items-start">
                                <div className="flex items-center gap-[12px] mb-0">
                                    <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                    <h3 className="text-1xl font-montserrat font-semibold">Item 2</h3>
                                    
                                </div>
                                <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </p>  
                            </div>
                            {/* End Item */}
                            {/* Item */}
                            <div className="flex-1 flex flex-col  justify-center lg:justify-start items-center lg:items-start">
                                <div className="flex items-center gap-[12px] mb-0">
                                    <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                    <h3 className="text-1xl font-montserrat font-semibold">Item 3</h3>

                                </div>
                                <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </p> 
                            </div>
                            {/* End Item */}
                            {/* Item */}
                            <div className="flex-1 flex flex-col justify-center lg:justify-start items-center lg:items-start">
                                <div className="flex items-center gap-[12px] mb-0">
                                    <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                    <h3 className="text-1xl font-montserrat font-semibold">Item 4</h3>
                                    
                                </div>
                                <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </p>  
                            </div>
                            {/* End Item */}                         
                        </div>
                        <motion.div 
                            className="flex flex-col items-start lg:max-w-[550px] xl:max-w-[650px] text-center lg:text-left mx-auto lg:mx-0"
                            initial={{opacity: 0, y: 60}}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 1.4,
                                    duration: 0.8,
                                    ease: 'easeIn',
                                }
                            }}
                        >
                            <div 
                                className="hidden lg:flex flex-col lg:flex-row items-center gap-4 max-w-max mx-auto lg:mx-0"
                                initial={{opacity: 0, y: 40}}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 1.2,
                                    duration: 1.5,
                                    ease: 'easeIn',
                                }
                            }}
                            >
                                <button onClick={handleClick} className="btn btn-lg font-bold">
                                    Contactar
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                    {/* Image */}
                    <motion.div 
                        className="flex items-center justify-center relative mb-8 lg:mb-0"
                        initial={{opacity: 0, x: 120}}
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
                        <Image
                            className="object-contain  "
                            src='/assets/treatments/treatments-3.webp'
                            width={800}
                            height={506}
                            priority
                            quality={100}
                            alt="About Image"
                        />
                    </motion.div>
                    <div 
                        className="lg:hidden flex flex-col lg:flex-row items-center gap-4 max-w-max mx-auto lg:mx-0"
                        initial={{opacity: 0, y: 40}}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: 1.2,
                                duration: 1.5,
                                ease: 'easeIn',
                            }
                        }}
                        >
                        <button onClick={handleClick} className="btn btn-lg font-bold">
                            Contactar
                        </button>
                    </div>

                </div>
            </div>
            {/* Fisioterapia para deportistas */}
            <div className="w-[95%] mx-auto flex items-center mt-[0px] pb-4 lg:pb-0">
                <div className="w-full h-full mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4">
                    
                    {/* Image */}
                    <motion.div 
                        className="flex items-center justify-center relative mb-8 lg:mb-0 order-2 lg:order-first"
                        initial={{opacity: 0, x: -120}}
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
                        <Image
                            className="object-contain  "
                            src='/assets/treatments/treatments-4.webp'
                            width={800}
                            height={506}
                            priority
                            quality={100}
                            alt="About Image"
                        />
                    </motion.div>

                    {/* Text */}
                    <motion.div 
                        className="w-full lg:max-w-[40%] order-1 lg:order-2"
                        initial={{opacity: 0, x: 60}}
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
                        <h2 
                            className="text-[30px] leading-[34px] lg:text-[40px] lg:leading-[42px] mb-2 mx-auto max-w-[540px] lg:max-w-none text-center lg:text-left">
                                Fisioterapia Gerontológica

                        </h2>
                        <p className="lead mx-auto max-w-[600px] lg:mx-0 text-[14px] leading-[18px] lg:text-[16px] lg:leading-[20px] text-center lg:text-left">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia magni ex consectetur libero reiciendis obcaecati aperiam eaque laborum quasi enim. Quasi adipisci aperiam amet. Maxime quia non architecto accusantium voluptatum.
                        </p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] mb-8 mx-auto lg:mx-0">
                            {/* Item */}
                            <div className="flex-1 flex flex-col  justify-center lg:justify-start items-center lg:items-start">
                                <div className="flex items-center gap-[12px] mb-0">
                                    <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                    <h3 className="text-1xl font-montserrat font-semibold">Atendemos a domicilio.</h3>
                                    
                                </div>
                                <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </p>  
                            </div>
                            {/* End Item */}
                            {/* Item */}
                            <div className="flex-1 flex flex-col  justify-center lg:justify-start items-center lg:items-start">
                                <div className="flex items-center gap-[12px] mb-0">
                                    <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                    <h3 className="text-1xl font-montserrat font-semibold">Item 2</h3>
                                    
                                </div>
                                <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </p>  
                            </div>
                            {/* End Item */}
                            {/* Item */}
                            <div className="flex-1 flex flex-col  justify-center lg:justify-start items-center lg:items-start">
                                <div className="flex items-center gap-[12px] mb-0">
                                    <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                    <h3 className="text-1xl font-montserrat font-semibold">Item 3</h3>

                                </div>
                                <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </p> 
                            </div>
                            {/* End Item */}
                            {/* Item */}
                            <div className="flex-1 flex flex-col justify-center lg:justify-start items-center lg:items-start">
                                <div className="flex items-center gap-[12px] mb-0">
                                    <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                    <h3 className="text-1xl font-montserrat font-semibold">Item 4</h3>
                                    
                                </div>
                                <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </p>  
                            </div>
                            {/* End Item */}                         
                        </div>
                        <motion.div 
                            className="hidden lg:flex flex-col items-start lg:max-w-[550px] xl:max-w-[650px] text-center lg:text-left mx-auto lg:mx-0"
                            initial={{opacity: 0, y: 60}}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 1.4,
                                    duration: 0.8,
                                    ease: 'easeIn',
                                }
                            }}
                        >
                            <div 
                                className="flex flex-col lg:flex-row items-center gap-4 max-w-max mx-auto lg:mx-0"
                                initial={{opacity: 0, y: 40}}
                                animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 1.2,
                                    duration: 1.5,
                                    ease: 'easeIn',
                                }
                            }}
                            >
                                <button onClick={handleClick} className="btn btn-lg font-bold">
                                    Contactar
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                    
                    <div 
                        className=" flex lg:hidden flex-col lg:flex-row items-center gap-4 max-w-max mx-auto lg:mx-0 order-3"
                        initial={{opacity: 0, y: 40}}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: 1.2,
                                duration: 1.5,
                                ease: 'easeIn',
                            }
                        }}
                        >
                        <button onClick={handleClick} className="btn btn-lg font-bold ">
                            Contactar
                        </button>
                    </div>

                </div>
            </div>
        </motion.section>
    )
}

export default Treatments;