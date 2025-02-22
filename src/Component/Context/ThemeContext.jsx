import { createContext, useContext, useState } from "react";

const ThemesContext=createContext()

// const[textcolor,setTextcolor]=useState("text-gray-500")



export function ThemeProvider({children}){
    const[color,setColor]=useState("bg-[#ffffff]")
    const[textColor,setTextColor]=useState(" ");
    const[buttonBg,setButtonBg]=useState("bg-linear-to-r from-[#0099fa] to-[#002ed9]");
    const[buttonTextColor,setButtonTextColor]=useState("text-white");
    const[buttonColor,setButtonColor]=useState("bg-blue-400");
    const [isRtl, setIsRtl] = useState(false); // Add RTL state
    const[underline,setUnderline]=useState("decoration-blue-400");
    const[border,setBorder]=useState("border-gray-400");

    const colorMap = {
        "bg-red-200": { text: "text-white", buttonBg: "bg-linear-to-r from-[#eab9a9] to-[#c14921]", buttonText: "text-white",buttonColor:"bg-[#de9881]",underline:"decoration-red-600" , border:"border-red-300"},
        "bg-blue-100": { text: "text-white", buttonBg: "bg-linear-to-r from-[#a3c3ef] to-[#4a7ec0]", buttonText: "text-black" ,buttonColor:"bg-blue-300",underline:"decoration-blue-400", border:"border-blue-300"},
        "bg-green-100": { text: "text-black", buttonBg: "bg-linear-to-r from-[#acefa3] to-[#4fc128]", buttonText: "text-white" ,buttonColor:"bg-[#a6e89f]",underline:"decoration-green-500", border:"border-green-300"},
        "bg-yellow-100": { text: "text-red-800", buttonBg: "bg-linear-to-r from-[#e4d98f] to-[#d7b02e]", buttonText: "text-black" ,buttonColor:"bg-[#e4d98f]",underline:"decoration-yellow-400", border:"border-yellow-300"},
        "bg-gray-100": { text: "text-white", buttonBg: "bg-blue-500", buttonText: "text-white",buttonColor:"bg-blue-200", border:"border-gray-400" },
        "bg-white": { text: "text-black", buttonBg: "bg-gray-900", buttonText: "text-white" ,buttonColor:"bg-blue-200",underline:"decoration-blue-400", border:"border-gray-400"},
      };

    const Changetheme=(color)=>{
        setColor(color);
        setTextColor(colorMap[color]?.text || 'text-gray-800');
        setButtonBg(colorMap[color]?.buttonBg || 'bg-linear-to-r from-[#0099fa] to-[#002ed9]');
        setButtonTextColor(colorMap[color]?.buttonText || 'text-white');
        setButtonColor(colorMap[color]?.buttonColor||"bg-blue-200");
        setUnderline(colorMap[color]?.underline||"decoration-blue-400");
        setBorder(colorMap[color]?.border||"border-gray-400")
        
    }
    return(
        <ThemesContext.Provider value={{color,Changetheme,buttonBg,buttonTextColor,buttonColor,isRtl, setIsRtl,underline,border }}>
            {children}
        </ThemesContext.Provider>
    )

}

export function useTheme(){
    return useContext(ThemesContext);
}