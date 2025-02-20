import { createContext, useContext, useState } from "react";

const ThemesContext=createContext()

// const[textcolor,setTextcolor]=useState("text-gray-500")



export function ThemeProvider({children}){
    const[color,setColor]=useState("bg-[#ffffff]")

    const Changetheme=(color)=>{
        setColor(color);
    }
    return(
        <ThemesContext.Provider value={{color,Changetheme}}>
            {children}
        </ThemesContext.Provider>
    )

}

export function useTheme(){
    return useContext(ThemesContext);
}