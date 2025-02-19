import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import Signup from './Component/Signup'
import Footer from './Component/Footer'
import '../src/index.css'
import '../src/Component/i18n/i18n'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="flex flex-col h-screen ">
      
      <div className="flex flex-col h-auto w-full max-w-lg mx-auto ">
        <div className=''>
          <div className='pb-2 lg:pb-10 md:pb-8'><Header/></div>
        
        <Signup/>
        <div className='pt-5'>
        <Footer/>
        </div>
     
       </div>
      </div>
      </div>
    </>
  )
}

export default App
