import React, { useState } from "react";
import LoginImage from '../assets/login.jpg';
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Login(){

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSignup = (e) =>  {
        e.preventDefault();

        // const formData = new FormData(e.target);
        // const name = formData.get('name');
        // const email = formData.get('email');
        // const password = formData.get('password');

        console.log("name:", formData.name);
        console.log("email:", formData.email);
        console.log("password:", formData.password);
    }
    return (
        <div className='grid grid-cols-5'>
            <div className='col-span-2 hidden sm:block h-screen'>
                <img className='h-screen object-cover' src={LoginImage} alt="" />
            </div>
            <div className='m-auto col-span-5 sm:col-span-3 ml-20 max-w-[500px] bg-white p-8 px-8'>
                <form action="" className=''  onSubmit={handleSignup}>
                    <div className='flex justify-end'>
                        <a className='text-gray-400 text-base' href="">Already have an account?</a>
                        <Link to="/login" 
                            className='rounded-full w-20 mb-5 border text-base bg-sky-600 text-center ml-5'>
                            Log in
                        </Link>
                    </div>
                    
                    <h2 className='text-4xl dark:text-white font-bold'>Welcome to Focus!</h2>
                    <a href="" className='text-gray-400'>Register your account</a>
                    <div className='flex flex-col py-2'>
                        <label>Name</label>
                        <input 
                            className='rounded-lg bg-gray-200 mt-2 p-2  focus:outline-blue-800' 
                            type="text" 
                            name="name" 
                            value={formData.name}
                            onChange={handleInputChange}
                            required 
                        />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Email</label>
                        <input 
                            className='rounded-lg bg-gray-200 mt-2 p-2  focus:outline-blue-800' 
                            type="text" 
                            name="email" 
                            value={formData.email}
                            onChange={handleInputChange}
                            required 
                        />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Password</label>
                        <input className='rounded-lg bg-gray-200 mt-2 p-2  focus:outline-blue-800' 
                            type="text" 
                            name="password" 
                            value={formData.password}
                            onChange={handleInputChange}
                            required 
                        />
                    </div>
                    <button className=' rounded-full w-32 my-5 py-2 bg-indigo-700 text-white'>Sign up</button>
                </form>
                <div>
                        <label className='text-base text-gray-400 mr-10'>Create account with</label>
                        <button><FaFacebook/></button>
                        <button className='mr-2 ml-2'><FaLinkedin/></button>
                        <button><MdEmail/></button>
                    </div>
            </div>
        </div>
    )
}