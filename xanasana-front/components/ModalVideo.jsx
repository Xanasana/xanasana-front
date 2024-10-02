'use client';
//IMPORTS REACT/NEXT DEPENDENCIES:
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
//IMPORTS EXT DEPENDENCIES:
import ReactPlayer from 'react-player';
import { motion, AnimatePresence } from 'framer-motion';
//IMPORTS GLOBAL STATES:
import { useGlobalState } from "@/context/GlobalStateContext";
//IMPORTS HOOKS:
//IMPORTS VARIANTS:
//import { fadeIn } from '@/lib/hero-variants';
//IMPORTS COMPONENTS:
//IMPORTS IMAGES:
import { AiOutlineClose } from 'react-icons/ai';
//IMPORTS CSS:
//IMPORT ENV:

const ModalVideo = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    // Función para cerrar el modal si se hace clic fuera del video
    const handleClickOutside = (e) => {
        if (e.target.id === "modalBackground") {
            closeModal();
        }
    };

    return (
        <div>
            {/* Botón para abrir el modal */}
            <div onClick={openModal} className="font-medium cursor-pointer flex items-center gap-2 hover:text-accent transition-all duration-300">
                <Image 
                    src='/assets/home/play.svg'
                    width={36}
                    height={36}
                    priority
                    quality={100} 
                    alt="play icon"
                />
                <p>Ver Video</p>
            </div>

            {/* Modal solo se muestra si isOpen es true */}
            {isOpen && (
                <div
                    id="modalBackground" // Identificador para detectar clic fuera
                    className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
                    onClick={handleClickOutside} // Detectar clic fuera del video
                >
                    {/* Botón para cerrar el modal */}
                    <button 
                        onClick={closeModal} 
                        className="absolute top-4 right-8 text-white rounded-full p-2 z-50"
                    >
                        <AiOutlineClose size={24} /> {/* Ícono de cierre */}
                    </button>

                    {/* Contenedor del video con 90% del ancho de la pantalla */}
                    <div className="w-[90%] h-auto aspect-video flex justify-center items-center">
                        <ReactPlayer
                            url="https://www.youtube.com/embed/yf0J_CaXDmU?si=MkAXEmxaf8mPdfv4" // URL del video de YouTube
                            width="100%"
                            height="100%" // Mantener el tamaño proporcional
                            controls
                            playing={isOpen} // Solo reproduce cuando el modal está abierto
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalVideo;
