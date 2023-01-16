import React, { useState, createContext } from 'react'

export const BottomBarIndexContext = createContext();

export const BottomBarIndexProvider = ({ children }) => {

    const [index, setIndex] = useState(1);

    return (
        <BottomBarIndexContext.Provider value={{ index, changeIndex }}>
            {children}
        </BottomBarIndexContext.Provider>
    )

    function changeIndex(index) {
        setIndex(index);
    }
}