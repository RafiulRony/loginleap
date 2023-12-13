import React from 'react'
import { Link } from 'react-router-dom'
import useWindowWidth from './Hooks/useWindowWidth'


export default function Home() {
  const onSmallScreen = useWindowWidth()

  return (
    <>
    <h2>Home Page</h2>
    <Link to="/signup" 
        className='rounded-full w-20 mb-5 border text-base bg-sky-600 text-center ml-5'
        >
        Sign up
    </Link>
    <h2>browsing on {onSmallScreen? 'small' : 'large'} device</h2>
    </>
  )
}
