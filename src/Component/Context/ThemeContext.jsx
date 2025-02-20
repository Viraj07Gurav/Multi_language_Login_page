import { createContext, useContext, useState } from "react";

const ThemesContext=createContext()

// const[textcolor,setTextcolor]=useState("text-gray-500")



export function ThemeProvider({children}){
    const[color,setColor]=useState("bg-[#ffffff]")
    const[textColor,setTextColor]=useState(" ");
    const[buttonBg,setButtonBg]=useState("bg-linear-to-r from-[#0099fa] to-[#002ed9]");
    const[buttonTextColor,setButtonTextColor]=useState("text-white");

    const colorMap = {
        "bg-red-100": { text: "text-white", buttonBg: "bg-linear-to-r from-[#eab9a9] to-[#c14921]", buttonText: "text-white" },
        "bg-blue-100": { text: "text-white", buttonBg: "bg-linear-to-r from-[#a3c3ef] to-[#4a7ec0]", buttonText: "text-black" },
        "bg-green-100": { text: "text-black", buttonBg: "bg-linear-to-r from-[#acefa3] to-[#4fc128]", buttonText: "text-white" },
        "bg-yellow-100": { text: "text-red-800", buttonBg: "bg-linear-to-r from-[#e4d98f] to-[#d7b02e]", buttonText: "text-black" },
        "bg-gray-100": { text: "text-white", buttonBg: "bg-blue-500", buttonText: "text-white" },
        "bg-white": { text: "text-black", buttonBg: "bg-gray-900", buttonText: "text-white" },
      };

    const Changetheme=(color)=>{
        setColor(color);
        setTextColor(colorMap[color]?.text || 'text-gray-800');
        setButtonBg(colorMap[color]?.buttonBg || 'bg-linear-to-r from-[#0099fa] to-[#002ed9]');
        setButtonTextColor(colorMap[color]?.buttonText || 'text-white');
    }
    return(
        <ThemesContext.Provider value={{color,Changetheme,buttonBg,buttonTextColor}}>
            {children}
        </ThemesContext.Provider>
    )

}

export function useTheme(){
    return useContext(ThemesContext);
}