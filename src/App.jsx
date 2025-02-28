import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import Signup from './Component/Signup'
import Footer from './Component/Footer'
import '../src/index.css'
import '../src/Component/i18n/i18n'
import { ThemeProvider, useTheme } from './Component/Context/ThemeContext'
import ColorSwitcher from './Component/ColorSwitcher'
import Registration from './Component/Registration_page/Registration'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PasswordRecovery from './Component/PasswordRecovery/PasswordRecovery'
import PrivateRoute from './Component/PrivateRoute/PrivateRoute'
import Dashboard from './Component/Dashboard/Dashboard'


function App() {




  return (

    <ThemeProvider>
      <Router>
        <div className={` flex flex-col h-screen `}>

          <div className="flex flex-col h-auto w-full max-w-lg mx-auto ">
            <div className=''>

              <div className='pb-2 lg:pb-10 md:pb-8'><Header /></div>
              <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/password" element={<PasswordRecovery/>}/>
                <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
              </Routes>
              <div className='pt-5'>
                <Footer />
              </div>

            </div>
          </div>
        </div>
      </Router>
    </ThemeProvider>

  )
}

export default App
