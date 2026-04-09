import {React, useState , useEffect} from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import "../App.css"
import { LoadingScreen } from './LoadingScreen/LoadingScreen'
const Layout = () => {

  
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      // Increased duration to allow for the full animation sequence
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3500); // 2s for animation + 1.5s for viewing the completed animation
  
      return () => clearTimeout(timer);
    }, []);
  
  
  return (
    
    <section className="xl:flex gap-0 text-base leading-relaxed font-inter overflow-hidden">
      <LoadingScreen isLoading = {isLoading}/>
        <Navbar />
        <div className='xl:ml-96 w-full min-h-screen bg-surface-light dark:bg-surface-dark transition-colors duration-300'>
        <Outlet />
        </div>
    </section>
  )
}

export default Layout