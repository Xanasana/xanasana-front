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
//IMPORTS IMAGES:
//IMPORTS CSS:
//IMPORT ENV:

import React from 'react'

const Home = () => {

    // const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

    return (
      <motion.section 
            className="min-h-screen flex items-center overflow-x-hidden"
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
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center h-full">
                    {/* Text */}
                    <div className="w-full text-center lg:text-left lg:w-[500px] pt-[120px]">
                      <h1 className="h1 mb-4">
                          Libera el potencial de tu cuerpo 
                          con Fisioterapia.
                          {/* Experimente el poder curativo de la fisioterapia */}
                      </h1>
                      <p className="lead max-w-xl max-auto">
                          Experimente el poder curativo de la fisioterapia.
                      </p>
                      <div className="">
                          <button className="btn btn-lg">Contacta con nosotros</button>
                      </div>
                    </div>
                    {/* Image */}
                    
                    <div className="flex-1">
                        <div className="hidden lg:flex fixed bottom-0">
                            <Image 
                                src='/assets/home/hero.png'
                                width={660}
                                height={650}
                                priority
                                quality={100} 
                                alt="Hero Image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Home;
