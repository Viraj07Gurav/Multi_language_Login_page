import React from 'react'
import { useTheme } from '../Context/ThemeContext';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate=useNavigate()
    const handleLogut=()=>{
        localStorage.removeItem("loggedin");
        navigate("/")

    }
    const { color, buttonBg, buttonTextColor, buttonColor, isRtl,underline ,border} = useTheme()
  return (
    <div>
         <div className={`${color} bg-[#ffffff] p-4 mx-5 rounded-2xl md:px-8 md:mx-0` }  >
            <div className='flex justify-between'> 
            <h1>Dashboard</h1>
            <button onClick={handleLogut} className='bg-green-400 text-white font-semibold w-20 rounded-2xl'>Logout</button>
            </div>
      
         </div>
    </div>
  )
}

export default Dashboard