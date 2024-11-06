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


const FormContact = () => {
    return (
      <form
        className="flex flex-col justify-center items-center gap-4"
      >
          <input type="text" className="input" placeholder="Nombre completo" />
          <input type="text" className="input" placeholder="Direción de email" />
          <input type="text" className="input" placeholder="Nº de teléfono" />
          <textarea type="text" className="textarea m-2" placeholder="Tu mensaje" />
          <button type="submit" className="btn self-start">Enviar</button>
      </form>
    )
}

export default FormContact;