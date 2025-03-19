import { createContext } from "react";
import React from "react";
export const AppContext = createContext();

export const AppContextProvider = (props)=>{

    const values = {

    }

    return (
        <AppContext.Provider value={values}>
            {props.children}
        </AppContext.Provider>
    )
}