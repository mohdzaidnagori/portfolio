import { Container } from '@mui/material'
import React from 'react'
import Home from '../../pages/Home'
import Navbar from '../navbar/Navbar'
// import SplineCrm from '../spline3d/SplineCrm'
import './Layout.css'

const Layout = () => {
  return (
    <div className='layout'>
     <Container fixed>
     <Navbar />
     {/* <SplineCrm /> */}
     <Home />
     </Container>
   </div>
  )
}

export default Layout
