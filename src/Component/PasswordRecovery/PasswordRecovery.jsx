import React from 'react'
import { useTheme } from '../Context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function PasswordRecovery() {
    const { color, buttonBg, buttonTextColor, buttonColor, isRtl, underline, border, textColor } = useTheme()
    const { t } = useTranslation();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(validation()){
            toast.success("")
        }

    };

    return (
        <div>
            <div className={`${color} bg-[#ffffff] p-4 mx-5 rounded-2xl md:px-8 md:mx-0 `}  >
                <div>

                </div>
                <div className='flex flex-col justify-center  items-center '>
                    <div className='flex justify-center items-center  p-0 m-0 gap-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" class="po-logo po-logo-color" clip-rule="evenodd" viewBox="0 0 90 55" width="30%" height="50" >
                            <g transform="scale(0.56504 0.66298)">
                                <path fill="none" d="M0 0h410.59v99.55H0z"></path>

                                <g>
                                    <path fill="#002dda" d="M71.006 4.544c18.717 6.815 31.528 21.323 31.528 38.07 0 16.756-12.815 31.264-31.532 38.072C52.29 73.878 39.47 59.37 39.47 42.615c0-16.752 12.82-31.26 31.536-38.07Z"></path>
                                    <path fill="#009cff" d="M71.003 4.542C77.489 1.581 84.888 0 92.713 0c27.201 0 49.283 19.095 49.283 42.617 0 23.519-22.082 42.614-49.283 42.614-7.825 0-15.224-1.578-21.714-4.543 16.357-6.811 27.564-21.319 27.564-38.07 0-16.753-11.203-31.26-27.56-38.075Z"></path>
                                    <path fill="#004ee7" d="M70.997 80.685c-6.49 2.965-13.893 4.546-21.715 4.546H20.197L7.106 96.551c-1.189 1.029-2.978 1.336-4.535.78C1.015 96.773 0 95.46 0 94.002V5.5C0 2.463 2.848 0 6.36 0h43.08C57.21.02 64.558 1.602 71 4.543c-16.361 6.812-27.568 21.32-27.568 38.07 0 16.756 11.207 31.264 27.565 38.072Z"></path>
                                    <path fill="#fff" class="logo__letter-1" d="M223.772 70.316h-7.362V46.441l.016.287c0-12.394 13.525-22.308 26.697-15.534l-3.255 5.518c-7.168-3.735-16.096-.354-16.096 8.81v24.794ZM341.537 65.425c-4.566 3.695-10.749 5.964-17.55 5.964-14.05 0-25.46-9.682-25.46-21.61 0-11.927 11.41-21.613 25.46-21.613 6.801 0 12.984 2.269 17.55 5.964V14.263h7.903v55.993h-7.903v-4.831Zm-17.55.328c-9.962 0-17.797-7.003-17.797-15.974 0-8.974 7.835-15.877 17.796-15.877 9.962 0 17.628 6.903 17.628 15.877 0 8.97-7.666 15.974-17.628 15.974ZM365.534 52.717c.645 3.841 2.674 6.936 6.084 9.289 3.462 2.39 7.761 3.59 12.905 3.59 6.004 0 10.884-1.657 14.645-4.96l4.273 4.258c-2.174 2.056-4.838 3.634-7.988 4.739-3.349 1.172-7.087 1.758-11.217 1.758-5.257 0-9.92-.918-13.99-2.758-4.046-1.83-7.175-4.387-9.385-7.677-2.215-3.298-3.32-7.023-3.32-11.172 0-4.098 1.075-7.798 3.228-11.096 2.149-3.29 5.104-5.85 8.87-7.68 3.776-1.834 8.033-2.75 12.775-2.75 4.74 0 8.965.914 12.674 2.747 3.703 1.83 6.595 4.39 8.68 7.677 2.091 3.302 3.134 7.085 3.134 11.347 0 .484-.044 1.094-.13 1.833h-41.356c.023.205.046.407.078.605.012.084.025.168.04.25Zm33.806-5.978-.004-.043c-.532-3.785-2.344-6.875-5.427-9.277-3.085-2.405-6.915-3.613-11.495-3.613-4.578 0-8.409 1.194-11.494 3.57-3.083 2.374-4.896 5.48-5.428 9.322l-.002.041h33.85Z"></path>
                                    <path fill="#fff" class="logo__letter-1" d="m223.573 29.33.198 8.144v32.843h-7.36l.087-40.986h7.075ZM282.626 64.54l-.81 1.275c-1.463 1.806-3.682 3.05-6.29 4.026-2.773 1.034-6.062 1.549-9.863 1.549-5.528 0-9.959-1.127-13.282-3.403-3.282-2.249-4.921-5.202-4.921-8.862s1.56-6.797 4.69-9.02c3.174-2.254 8.223-3.533 15.133-3.533h14.705c.266 0 .479-.183.479-.408v-1.172c0-3.492-1.427-6.532-3.804-8.39-2.362-1.846-5.834-2.788-10.426-2.788-3.04 0-6.014.428-8.925 1.283-2.706.793-4.909 2.373-6.835 3.667l-3.45-5.283c2.495-1.653 5.45-2.925 8.865-3.818 3.578-.937 7.375-1.404 11.393-1.404 6.846 0 12.095 1.415 15.735 4.28 3.631 2.855 5.421 7.118 5.421 12.777v25h-7.84l.025-5.775Zm-21.124-12.168c-3.98.998-5.944 3.163-5.944 6.429 0 2.304 1.052 4.118 3.148 5.444 2.04 1.29 4.865 1.948 8.481 1.948 3.593 0 6.693-.685 9.306-2.049 2.63-1.373 4.755-3.32 5.94-5.842a.348.348 0 0 0 .034-.152v-6.01a.367.367 0 0 0-.017-.109h-17.72c-1.827 0-2.414.207-3.228.34ZM180.65 13.423h7.741V70.28h-7.741z"></path>
                                    <path fill="#fff" class="logo__letter-1" d="M208.776 13.423v6.598h-48.51v-6.598z"></path>
                                </g>
                            </g>
                        </svg>
                        <p className='font-medium text-xl text-[#1e385b]'>Trade</p>
                    </div>
                    <h2 className='font-semibold  text-3xl py-3'>{t('password_recover.title')}</h2>
                    <div className='mb-3 flex flex-col justify-center  items-center md:flex-row gap-3' dir={isRtl ? "rtl" : "ltr"}>
                        <p className='text-[#535c6d] text-center'>{t('password_recover.description')}</p>
                    </div>
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <div className='w-full'>

                        <div className='p-2'>
                            <div class=" " dir={isRtl ? "rtl" : "ltr"}>  {/*flex items-center */}
                                <div class="relative w-full" dir={isRtl ? "rtl" : "ltr"}>
                                    <input
                                        id="email"
                                        name="email"
                                        // value={formData.email}
                                        // onChange={handleChange}
                                        type="email"
                                        placeholder=""
                                        class={` ${isRtl ? "text-right" : "text-left"} w-full border-b ${border} py-1 focus:border-b-1 transition-colors focus:outline-none peer bg-inherit`}
                                    />
                                    <label
                                        for="username"
                                        class={`absolute -top-4 text-[#8d9fae]  text-xs left-0 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-500 peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm  ${isRtl ? "right-0 text-right" : "left-0 text-left"}`}
                                    >
                                        {t('registration.email')} <span className=''>*</span>
                                        {/* {validFields.email && <span className={`h-4 w-4 rounded-2xl inline-block text-center ${buttonColor} ${textColor} ml-[5px]`}>✔</span>} */}

                                    </label>


                                </div>
                            </div>
                        </div>


                    </div>

                    <div className='flex flex-col justify-start items-center pb-2 mt-2 w-full px-2'>
                        {/* <div className={`flex flex-col items-center md:flex-row md:justify-between lg:justify-between w-full `} dir={isRtl ? "rtl" : "ltr"}>
                    <div className=''>
                        <label className={`text-[#758b9d] text-sm flex ${isRtl ? "flex-row-reverse gap-1" : ""}`} dir={isRtl ? "rtl" : "ltr"}>
                            <input type="checkbox" name="remember" value="1" data-gtm-form-interact-field-id="0" className="form-checkbox border-gray-300 checked:border-blue-500 checked:bg-blue-500 w-auto " />&nbsp;I have read and accepted the following agreement:
                        </label>
                        <a className={`py-4 text-sm flex underline decoration-1 ${underline} underline-offset-5 text-[#1e385b] hover:no-underline transition-all duration-800' href='#' `}>
                     &nbsp;&nbsp;Public offer agreement
                       </a>
                    </div>
                    <a className={`py-4 text-sm flex underline decoration-1 ${underline} underline-offset-5 text-[#1e385b] hover:no-underline transition-all duration-800' href='#' `}>
                     &nbsp;&nbsp;Public offer agreement
                       </a>
                </div> */}
                        <button type='submit' className={`text-white font-semibold  bg-blue-500 w-72 h-12 rounded-[10px] ${buttonBg}  mt-5`}>{t('password_recover.restore_button')}</button>
                        <div className='py-4'>
                            <Link to="/" className={`border-b ${border}  hover:border-none`}>{t('password_recover.back_to_login')}</Link>
                        </div>
                    </div>

                </form>


            </div>
        </div>
    )
}

export default PasswordRecovery