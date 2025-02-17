import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import Signup from './Component/Signup'
import Footer from './Component/Footer'
import '../src/index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="flex flex-col h-screen ">
      
      <div className="flex flex-col h-auto w-full max-w-md mx-auto ">
        <div className=''>
        <Header/>
        <Signup/>
       <Footer/>
       </div>
      </div>
      </div>
    </>
  )
}

export default App
