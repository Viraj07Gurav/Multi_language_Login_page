
import React from 'react'
import { useTheme } from './Context/ThemeContext';
function ColorSwitcher() {
    const {Changetheme}=useTheme();
    
    const colors = ["bg-red-100", "bg-blue-100", "bg-green-100", "bg-yellow-200"];
  return (
    <div className="p-4 fixed top-10 z-20">
    <div className="flex justify-end gap-2">
      {colors.map((c) => (
        <button
          key={c}
          className={`${c} text-white px-2 py-2 rounded-full  w-2 h-4  border-1 border-gray-800`}
          onClick={() => Changetheme(c)}
        >
         
        </button>
      ))}
    </div>
  </div>
  )
}

export default ColorSwitcher