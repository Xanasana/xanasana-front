
'use client';

import React, { createContext, useContext, useState } from "react";

// Crear contexto
const GlobalStateContext = createContext();

// Hook para usar el contexto
export const useGlobalState = () => useContext(GlobalStateContext);

// Proveedor de contexto
const GlobalStateContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isOpenNav, setIsOpenNav] = useState(false);
    const [isNavActive, setIsNavActive] = useState(false);
    const [heroSliders, setHeroSliders] = useState();
    const [mobileNav, setMobileNav ] = useState(false);
    

    

    return (
        <GlobalStateContext.Provider
            value={{
                
                isLoading, setIsLoading,
                isOpenNav, setIsOpenNav,
                isNavActive, setIsNavActive,
                mobileNav, setMobileNav
            }}
        >
            {children}
        </GlobalStateContext.Provider>
    );
}

export default GlobalStateContextProvider;
