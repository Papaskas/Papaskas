import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import MainLayout from '@src/components/Layouts/MainLayout';
import Home from '@src/pages/Home';
import NotFound from '@src/pages/NotFound';
import AboutMe from '@src/pages/AboutMe';


function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
