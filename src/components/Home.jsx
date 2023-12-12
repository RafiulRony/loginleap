import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
    <h2>Home Page</h2>
    <Link to="/signup" 
        className='rounded-full w-20 mb-5 border text-base bg-sky-600 text-center ml-5'
        >
        Sign up
    </Link>
    </>
  )
}
