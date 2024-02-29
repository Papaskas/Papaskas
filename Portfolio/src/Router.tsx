import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import MainLayout from '@src/components/Layouts/MainLayout';
import Home from '@src/pages/Home';
import Works from '@src/pages/Works';
import AboutMe from '@src/pages/AboutMe';
import Contacts from '@src/pages/Contacts';
import NotFound from '@src/pages/NotFound';



function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
