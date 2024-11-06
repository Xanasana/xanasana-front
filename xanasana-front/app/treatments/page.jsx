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
        <div className="relative w-full h-full">
            <div
                className="absolute top-0 right-0 w-full h-full z-0"
                style={{
                backgroundImage: 'url("/assets/backgrounds/bg-2-vi.svg")', // Ruta de la imagen
                backgroundPosition: 'top left', // Ajustado a la esquina superior izquierda
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
                
                {/* Fisioterapia general */}
                <div className="w-[95%] mx-auto flex items-center pt-[220px] lg:pt-[150px] pb-4 lg:pb-0 z-10">
                    <div className="w-full h-full mx-auto flex flex-col lg:flex-row items-start justify-center lg:justify-between gap-4">

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
                            <p className="lead mx-auto w-full lg:max-w-[600px] lg:mx-0 text-[16px] leading-[20px] lg:text-[14px] lg:leading-[18px] text-center lg:text-left mb-4">
                                En nuestra práctica de fisioterapia general, ofrecemos un enfoque holístico para el tratamiento de diversas condiciones musculo-esqueléticas. Ya sea que estés lidiando con dolores crónicos, lesiones agudas o simplemente busques mejorar tu bienestar general, nuestro equipo está aquí para ayudarte. Utilizamos una combinación de técnicas manuales, ejercicios terapéuticos y educación al paciente para abordar la causa de tu malestar y mejorar tu calidad de vida. Cada sesión está diseñada para adaptarse a tus necesidades específicas, promoviendo un camino hacia la salud y el bienestar integral.
                            </p>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] mb-4 mx-auto lg:mx-0">
                                {/* Item */}
                                <div className="  flex-1 flex flex-col  justify-center lg:justify-start items-center lg:items-start">
                                    <div className="  flex items-center gap-[12px] mb-0">
                                        <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                        <h3 className="w-full text-[14px] lg:text-[12px] font-montserrat font-semibold">Atendemos a domicilio.</h3>
                                        
                                    </div>
                                    {/* <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    </p>   */}
                                </div>
                                {/* End Item */}
                                {/* Item */}
                                {/* <div className="flex-1 flex flex-col  justify-center lg:justify-start items-center lg:items-start">
                                    <div className="flex items-center gap-[12px] mb-0">
                                        <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                        <h3 className="text-1xl font-montserrat font-semibold">Item 2</h3>
                                        
                                    </div>
                                    <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    </p>  
                                </div> */}
                                {/* End Item */}
                                {/* Item */}
                                {/* <div className="flex-1 flex flex-col  justify-center lg:justify-start items-center lg:items-start">
                                    <div className="flex items-center gap-[12px] mb-0">
                                        <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                        <h3 className="text-1xl font-montserrat font-semibold">Item 3</h3>

                                    </div>
                                    <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    </p> 
                                </div> */}
                                {/* End Item */}
                                {/* Item */}
                                {/* <div className="flex-1 flex flex-col justify-center lg:justify-start items-center lg:items-start">
                                    <div className="flex items-center gap-[12px] mb-0">
                                        <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                        <h3 className="text-1xl font-montserrat font-semibold">Item 4</h3>
                                        
                                    </div>
                                    <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    </p>  
                                </div> */}
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
                            className="w-full flex items-center justify-center relative mb-8 lg:mb-0 border-2 border-[#f2dfce] rounded-tl-[50px] rounded-bl-[0px] rounded-tr-[0px] rounded-br-[50px] overflow-hidden shadow-lg"
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
                                className="w-full h-auto object-contain  "
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
                <div className="w-[95%] mx-auto flex items-center mt-[0px] pb-4 lg:pb-0 z-10">
                    <div className="w-full h-full mx-auto flex flex-col lg:flex-row items-start justify-center lg:justify-between gap-4">
                        
                        {/* Image */}
                        <motion.div 
                            className="w-full flex items-center justify-center relative mb-8 lg:mb-0 border-2 border-[#f2dfce] rounded-tl-[0px] rounded-bl-[50px] rounded-tr-[50px] rounded-br-[0px] overflow-hidden shadow-lg order-2 lg:order-1"
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
                                className="w-full h-auto object-contain"
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
                            <p className="lead mx-auto w-full lg:max-w-[600px] lg:mx-0 text-[16px] leading-[20px] lg:text-[14px] lg:leading-[18px] text-center lg:text-left mb-4">
                                En nuestra área de fisioterapia deportiva, entendemos la pasión por el deporte y el compromiso con un rendimiento óptimo. Nos especializamos en la prevención, el tratamiento y la rehabilitación de lesiones deportivas, trabajando con atletas de todos los niveles.<br/>
                                Nuestros profesionales están capacitados para diseñar programas de recuperación
                                personalizados que te ayudarán a volver a la actividad lo más rápido y seguro posible.<br/>
                                Además, te proporcionamos estrategias de prevención que te permitirán reducir el riesgo de futuras lesiones. Juntos, te ayudaremos a alcanzar tus objetivos deportivos y a disfrutar de cada entrenamiento al máximo.
                            </p>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] mb-4 mx-auto lg:mx-0">
                                {/* Item */}
                                <div className="  flex-1 flex flex-col  justify-center lg:justify-start items-center lg:items-start">
                                    <div className="  flex items-center gap-[12px] mb-0">
                                        <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                        <h3 className="w-full text-[14px] lg:text-[12px] font-montserrat font-semibold">Atendemos a domicilio.</h3>
                                        
                                    </div>
                                    {/* <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    </p>   */}
                                </div>
                                {/* End Item */}
                                {/* Item */}
                                {/* <div className="flex-1 flex flex-col  justify-center lg:justify-start items-center lg:items-start">
                                    <div className="flex items-center gap-[12px] mb-0">
                                        <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                        <h3 className="text-1xl font-montserrat font-semibold">Item 2</h3>
                                        
                                    </div>
                                    <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    </p>  
                                </div> */}
                                {/* End Item */}
                                {/* Item */}
                                {/* <div className="flex-1 flex flex-col  justify-center lg:justify-start items-center lg:items-start">
                                    <div className="flex items-center gap-[12px] mb-0">
                                        <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                        <h3 className="text-1xl font-montserrat font-semibold">Item 3</h3>

                                    </div>
                                    <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    </p> 
                                </div> */}
                                {/* End Item */}
                                {/* Item */}
                                {/* <div className="flex-1 flex flex-col justify-center lg:justify-start items-center lg:items-start">
                                    <div className="flex items-center gap-[12px] mb-0">
                                        <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                        <h3 className="text-1xl font-montserrat font-semibold">Item 4</h3>
                                        
                                    </div>
                                    <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    </p>  
                                </div> */}
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
                <div className="w-[95%] mx-auto flex items-center pt-[0px] pb-4 lg:pb-0 z-10">
                    <div className="w-full h-full mx-auto flex flex-col lg:flex-row items-start justify-center lg:justify-between gap-4">

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
                            <p className="lead mx-auto w-full lg:max-w-[600px] lg:mx-0 text-[16px] leading-[20px] lg:text-[14px] lg:leading-[18px] text-center lg:text-left mb-4">
                                La fisioterapia postoperatoria es fundamental para una recuperación eficaz tras una cirugía.<br/>
                                Nuestro equipo de expertos trabaja estrechamente contigo para diseñar un plan de rehabilitación adaptado a tu intervención específica y a tus necesidades. A través de ejercicios guiados y técnicas manuales, te ayudaremos a restaurar la movilidad, reducir el dolor y mejorar la función general. Nuestro objetivo es facilitar tu vuelta a las actividades diarias y deportivas, asegurando una recuperación integral y rápida.<br/> Confía en nosotros para acompañarte en cada paso de este proceso hacia tu bienestar total.
                            </p>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] mb-4 mx-auto lg:mx-0">
                                {/* Item */}
                                <div className="  flex-1 flex flex-col  justify-center lg:justify-start items-center lg:items-start">
                                    <div className="  flex items-center gap-[12px] mb-0">
                                        <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                        <h3 className="w-full text-[14px] lg:text-[12px] font-montserrat font-semibold">Atendemos a domicilio.</h3>
                                        
                                    </div>
                                    {/* <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    </p>   */}
                                </div>
                                {/* End Item */}
                                {/* Item */}
                                {/* <div className="flex-1 flex flex-col  justify-center lg:justify-start items-center lg:items-start">
                                    <div className="flex items-center gap-[12px] mb-0">
                                        <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                        <h3 className="text-1xl font-montserrat font-semibold">Item 2</h3>
                                        
                                    </div>
                                    <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    </p>  
                                </div> */}
                                {/* End Item */}
                                {/* Item */}
                                {/* <div className="flex-1 flex flex-col  justify-center lg:justify-start items-center lg:items-start">
                                    <div className="flex items-center gap-[12px] mb-0">
                                        <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                        <h3 className="text-1xl font-montserrat font-semibold">Item 3</h3>

                                    </div>
                                    <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    </p> 
                                </div> */}
                                {/* End Item */}
                                {/* Item */}
                                {/* <div className="flex-1 flex flex-col justify-center lg:justify-start items-center lg:items-start">
                                    <div className="flex items-center gap-[12px] mb-0">
                                        <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                        <h3 className="text-1xl font-montserrat font-semibold">Item 4</h3>
                                        
                                    </div>
                                    <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    </p>  
                                </div> */}
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
                            className="w-full flex items-center justify-center relative mb-8 lg:mb-0 border-2 border-[#f2dfce] rounded-tl-[50px] rounded-bl-[0px] rounded-tr-[0px] rounded-br-[50px] overflow-hidden shadow-lg"
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
                                className="w-full h-auto object-contain"
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
                {/* Fisioterapia para Geriatrica */}
                <div className="w-[95%] mx-auto flex items-center mt-[0px] pb-4 lg:pb-0 z-10">
                    <div className="w-full h-full mx-auto flex flex-col lg:flex-row items-start justify-center lg:justify-between gap-4">
                        
                        {/* Image */}
                        <motion.div 
                            className="w-full flex items-center justify-center relative mb-8 lg:mb-0 border-2 border-[#f2dfce] rounded-tl-[0px] rounded-bl-[50px] rounded-tr-[50px] rounded-br-[0px] overflow-hidden shadow-lg order-2 lg:order-1"
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
                                className="w-full h-auto object-contain"
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
                            <p className="lead mx-autow-full lg:max-w-[600px] lg:mx-0 text-[16px] leading-[20px] lg:text-[14px] lg:leading-[18px] text-center lg:text-left mb-4">
                                La fisioterapia gerontológica se centra en el cuidado y la rehabilitación de las personas mayores, ayudándolas a mantener su movilidad y calidad de vida. Nuestro enfoque personalizado aborda las limitaciones físicas y funcionales que pueden surgir con la edad, utilizando técnicas suaves y adaptadas a las necesidades individuales de cada paciente. A través de programas específicos, buscamos mejorar la fuerza, la flexibilidad y la independencia, promoviendo un envejecimiento activo y saludable.
                            </p>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] mb-4 mx-auto lg:mx-0">
                                {/* Item */}
                                <div className="  flex-1 flex flex-col  justify-center lg:justify-start items-center lg:items-start">
                                    <div className="  flex items-center gap-[12px] mb-0">
                                        <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                        <h3 className="w-full text-[14px] lg:text-[12px] font-montserrat font-semibold">Atendemos a domicilio.</h3>
                                        
                                    </div>
                                    {/* <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    </p>   */}
                                </div>
                                {/* End Item */}
                                {/* Item */}
                                {/* <div className="flex-1 flex flex-col  justify-center lg:justify-start items-center lg:items-start">
                                    <div className="flex items-center gap-[12px] mb-0">
                                        <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                        <h3 className="text-1xl font-montserrat font-semibold">Item 2</h3>
                                        
                                    </div>
                                    <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    </p>  
                                </div> */}
                                {/* End Item */}
                                {/* Item */}
                                {/* <div className="flex-1 flex flex-col  justify-center lg:justify-start items-center lg:items-start">
                                    <div className="flex items-center gap-[12px] mb-0">
                                        <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                        <h3 className="text-1xl font-montserrat font-semibold">Item 3</h3>

                                    </div>
                                    <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    </p> 
                                </div> */}
                                {/* End Item */}
                                {/* Item */}
                                {/* <div className="flex-1 flex flex-col justify-center lg:justify-start items-center lg:items-start">
                                    <div className="flex items-center gap-[12px] mb-0">
                                        <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[28px] rounded-tr-[4px]"></div>
                                        <h3 className="text-1xl font-montserrat font-semibold">Item 4</h3>
                                        
                                    </div>
                                    <p className="text-[14px] leading-[16px] text-center lg:text-left">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    </p>  
                                </div> */}
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
        </div>
    )
}

export default Treatments;