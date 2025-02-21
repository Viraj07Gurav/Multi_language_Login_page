import React from 'react'
import '../../src/index.css'

import { useTranslation } from 'react-i18next';
import TemplateDemo from './Country'
import LanguageDropdown from './Lang'
import LanguageSelector from './LanguageSelector';
import ColorSwitcher from './ColorSwitcher';

function Header() {
    const { t } = useTranslation(); // Hook to use translations
    return (
        <div>
            <div className='flex justify-between py-3 px-0 h-15'>
                <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#47a1d6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 18l-6-6l6-6" /></svg>
                   
                    <a href="" className='font-nunito underline decoration-1 decoration-blue-400 underline-offset-5 text-[#1e385b] hover:no-underline transition-all duration-800 '>{t('go_to_home')}</a>
                   
                </div>
              
                <div className='flex justify-between  relative '>
                    <div className='pr-1'>
                    <ColorSwitcher/>
                    </div>
               
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#183f74" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20" /></g></svg>                    </p>
                    <p className='flex'>
                        {/* <p>English</p> */}
                        {/* <TemplateDemo/> */}
                        {/* <LanguageDropdown/> */}
                        <LanguageSelector />

                    </p>
                </div>
            </div>
        </div>
    )
}


export default Header