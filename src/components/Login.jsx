import React, { useState } from "react";
import LoginImage from '../assets/login.jpg';
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";




export default function Login(){

    // const handleEmail = (e) => {
    //     console.log(e.target.value)
    // }
    // const handlePassword = (e) => {
    //     console.log(e.target.value)
    // }
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const HandleInputChange = (e) =>{
        console.log("handleInputChange");
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    const handleLogin = (e) =>{
        e.preventDefault();
        console.log("email: ", formData.email);
        console.log("password: ", formData.password);
    }

    return (
        <div className='grid grid-cols-3'>
            <div className='col-span-1 hidden sm:block h-screen'>   
                <img className='h-screen object-cover' src={LoginImage} alt="" />
            </div>
            <div className='m-auto col-span-3 sm:col-span-2 ml-20 max-w-[500px] bg-white p-8 px-8'>
                <form action="" className='' onSubmit={handleLogin}>
                    <div className='flex justify-end'>
                        <a className='text-gray-400 text-base' href="">Already have an account?</a>
                        <Link to="/signup" 
                            className='rounded-full w-20 mb-5 border text-base bg-sky-600 text-center ml-5'>
                            Sign up
                        </Link>
                    </div>
                    
                    <h2 className='text-4xl dark:text-white font-bold'>Welcome to Focus!</h2>
                    <a href="" className='text-gray-400'>Register your account</a>
                    
                    <div className='flex flex-col py-2'>
                        <label>Email</label>
                        <input className='rounded-lg bg-gray-200 mt-2 p-2  focus:outline-blue-800' 
                        type="text" 
                        name="email" 
                        value={formData.email}
                        onChange={HandleInputChange} 
                        required />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Password</label>
                        <input className='rounded-lg bg-gray-200 mt-2 p-2  focus:outline-blue-800' 
                        type="text" 
                        name="password" 
                        value={formData.password}
                        onChange={HandleInputChange} 
                        required />
                    </div>
                    <button className=' rounded-full w-32 my-5 py-2 bg-indigo-700 text-white'>Login</button>
                </form>
                <div>
                    <label className=' text-gray-400 mr-10'>Create account with</label>
                        
                    <button><FaFacebook/></button>
                    <button className='mr-2 ml-2'><FaLinkedin/></button>
                    <button><MdEmail/></button>
                </div>
            </div>
        </div>
    )
}