import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

const SharedLayout = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", minHeight:"100vh"}}>
        <Nav />
        <Outlet />
        <Footer />
    </div>
  )
}

export default SharedLayout;