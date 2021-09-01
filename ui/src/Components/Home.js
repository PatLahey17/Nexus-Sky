import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { Button, Grid, Datagrid } from '@material-ui/core'

const Home = () => {
    const [isMobileView, setIsMobileView] = useState(false)

    useEffect(() => {

        const setResponsiveness = () => {
          return window.innerWidth < 1280
            ? setIsMobileView(true)
            : setIsMobileView(false)
        }
    
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness())
    
        return () => {
          window.removeEventListener("resize", () => setResponsiveness())
        }
      }, [])

    return (
        <div>
            <Navbar/>
        </div>
    )
}

export default Home