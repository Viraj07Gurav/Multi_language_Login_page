import React, { useState,useEffect } from 'react'
import { Input } from "@material-tailwind/react";
import { useTranslation } from 'react-i18next';
import { useTheme } from './Context/ThemeContext';
import { Eye, EyeOff } from "lucide-react";
import { Link } from 'react-router-dom';
import { CgPassword } from 'react-icons/cg';

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";


function Signup() {
    const [fullName, setFullName] = useState("");
    const { t } = useTranslation();
    const { color, buttonBg, buttonTextColor, buttonColor, isRtl,underline ,border} = useTheme()
    const [showPassword, setShowPassword] = useState(false);

    

    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => {
          console.log("Token Response:", tokenResponse);
    
          // Decode the ID token (optional)
          fetch(`https://www.googleapis.com/oauth2/v3/userinfo`, {
            headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
          })
            .then((res) => res.json())
            .then((user) => console.log("User Info:", user))
            .catch((err) => console.log("Error fetching user info:", err));
        },
        onError: () => console.log("Login Failed"),
      });
    
    
    const[formData,setFormData]=useState({
        email:"",
        password:"",

    })
    const handleChange=(e)=>{
        setFormData({ ...formData,[e.target.name]:e.target.value})
    }

    const validation=()=>{
        if(!formData.email.trim()&&!formData.password){
            toast.error("All field required.")
            return false;
        }
        if(!formData.email.trim()){
            toast.error("Email is required.")
            return false;
        }

        if(!formData.password)
        {
            toast.error("Password is required.")
            return false;
        }
        return true
    }
    useEffect(() => {
        const storedData = localStorage.getItem("formData");
        if (storedData) {
            setFormData(JSON.parse(storedData));
        }
    }, []);

   
    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Retrieve stored data from localStorage
        const storedData = JSON.parse(localStorage.getItem("formData"));
        console.log(storedData);
      
        if(validation()){
            if((storedData.email === formData.email && storedData.password === formData.password)){
                toast.success("Login in successfully!");
            }
            else if((storedData.email==formData.email)&& (storedData.password!=formData.password)){
                toast.error("Invalid  password !");
            }
            else if((storedData.email!=formData.email)&&(storedData.password==formData.password)){
                toast.error("Invalid email")
            }

        }
        if(!storedData){
            toast.error("account not found.");
            console.log("password",storedData.password)
        }
      
 
        // else if (validation() && (storedData.email === formData.email && storedData.password === formData.password)) {

        //     toast.success("Logged in successfully!");
        // } 
        // else if((storedData.email==formData.email)&& (storedData.password!=formData.password))
        //  {
        //     toast.error("Invalid  password !");
        //     return false;
        // }
        // else if(storedData.password!=formData.password){
        //     toast.error("invalid password")
        // }    
    };
    return (
        <div className={`${color} bg-[#ffffff] p-4 mx-5 rounded-2xl md:px-8 md:mx-0` } onSubmit={handleSubmit} >
            <ToastContainer autoClose={5000} position="top-center"  />
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
                <h2 className='font-semibold  text-3xl py-3'>{t('signup_title')}</h2>
                <div className='mb-3 flex flex-col justify-center  items-center md:flex-row gap-3' dir={isRtl ? "rtl" : "ltr"}>
                    <p className='text-[#535c6d]'>{t('signup_description')}</p>
                    <Link to="/register" className={`text-[#1e385b] underline decoration-1 ${underline} underline-offset-5 text-[#1e385b] hover:no-underline transition-all duration-800`}>{t('Registration')}</Link>
                </div>
            </div>
            <form>
            <div className='w-full'>
                <div className='p-2'>
                    <div class=" " dir={isRtl ? "rtl" : "ltr"}>  {/*flex items-center */}
                        <div class="relative w-full" dir={isRtl ? "rtl" : "ltr"}>
                            <input
                               id="email"
                               name="email"
                               value={formData.email}
                               onChange={handleChange}
                               type="email"
                               placeholder=""
                                class={` ${isRtl ? "text-right" : "text-left"} w-full border-b ${border} py-1 focus:border-b-1 transition-colors focus:outline-none peer bg-inherit`}
                            />
                            <label
                                for="email"
                                class={`absolute -top-4 text-[#8d9fae]  text-xs left-0 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-500 peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm  ${isRtl ? "right-0 text-right" : "left-0 text-left"}`}
                            >
                                {t('email')} <span className=''>*</span>
                            </label>

                        </div>
                    </div>
                </div>
                <div className='p-2'>
                    <div class="  " dir={isRtl ? "rtl" : "ltr"}>
                        <div class="relative w-full " dir={isRtl ? "rtl" : "ltr"}>
                            <div>
                                <input
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    type={showPassword ? "text" : "password"}
                                    onChange={handleChange}
                                    placeholder=""
                                    className={` ${isRtl ? "text-right" : "text-left"} w-full border-b ${border} py-1 focus:border-b-1 transition-colors focus:outline-none peer bg-inherit`}
                                />
                                <label
                                    for="password"
                                    className={`absolute -top-4 text-[#8d9fae] text-xs left-0 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-500 peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm  ${isRtl ? "right-0 text-right" : "left-0 text-left"}`}
                                >
                                    {t('password')} <span className=''>*</span>
                                </label>
                            </div>
                            <button
                                dir={isRtl ? "rtl" : "ltr"}
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                onChange={handleChange}
                                className={`absolute inset-y-0 ${isRtl ? "left-3" : "right-3"} flex items-center`}
                            >
                                {showPassword ? <EyeOff className="w-5 h-5 text-gray-500" /> : <Eye className="w-5 h-5 text-gray-500" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
          
            <div className='flex flex-col justify-between items-center pb-2 mt-2 w-full px-2'>
                <div className={`flex flex-col items-center md:flex-row md:justify-between lg:justify-between w-full `} dir={isRtl ? "rtl" : "ltr"}>
                    <div >
                        <label className={`text-[#758b9d] text-sm flex ${isRtl ? "flex-row-reverse gap-1" : ""}`} dir={isRtl ? "rtl" : "ltr"}>
                            <input type="checkbox" name="remember" value="1" data-gtm-form-interact-field-id="0" className="form-checkbox border-gray-300 checked:border-blue-500 checked:bg-blue-500 w-auto " />&nbsp;{t("Remember_me")}
                        </label>
                    </div>
                    <a className={`py-4 text-sm flex underline decoration-1 ${underline} underline-offset-5 text-[#1e385b] hover:no-underline transition-all duration-800' href='#' `}>
                        <span className='rotate-80 '><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 26 26"><g fill="none" stroke="#47a1d6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></g></svg> </span> &nbsp;&nbsp;
                        {t('recovery')}</a>
                </div>
                <button type='sumbit' className={`text-white font-semibold  bg-blue-500 w-72 h-12 rounded-[10px] ${buttonBg}  mt-5`}>{t('signIn_btn')}</button>
            </div>
            </form>

            <div className='flex  flex-col justify-center items-center py-6 '>
                <label htmlFor="" className='mb-4 text-[#535c6d]'>{t('login_with')}</label>
                <div className='flex justify-center gap-4' >
                    <button className={`flex w-34 gap-2 items-center ${buttonColor} text-white  rounded-lg  px-6 py-2 text-sm font-medium outline-none  `}>
                        <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                        <span class="">Facebook</span>
                    </button>

                    <button  onClick={() => login()}  className="flex w-34 items-center bg-[#f0f0f0] text-gray-500  rounded-lg  px-6 py-2 text-sm font-medium outline-none  ">
                        <svg className="h-4 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
                        <span>Google</span>
                    </button>

                </div>
            </div>

        </div>
    )
}

export default Signup