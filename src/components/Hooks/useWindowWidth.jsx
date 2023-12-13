import React, { useEffect, useState } from 'react'

const useWindowWidth = () => {
  const [onSmallScreen, setOnSmallScreen] = useState(true)
  const checkScreenSize =()=>{
    setOnSmallScreen(window.innerWidth<768);
  }
  useEffect(()=>{
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  },[])


  return onSmallScreen;
}

export default useWindowWidth