import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@src/components/Header';
import Footer from '@src/components/Footer';


function Index() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Index;