import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Center } from '@chakra-ui/react';
import LandingPage from './LandingPage';
import TeamPage from "./TeamPage";
import WhyKensaPage from "./WhyKensaPage";

import Hero from './Hero';

const MainContainer = () => {

  return (
    <Center h='100vh'>
      <Routes>
        <Route path='/'>
          <Route path='/' element={<LandingPage />}>
            <Route path='/' element={<Hero />} />
            <Route path='/team' element={<TeamPage />} />
            <Route path='/whykensa' element={<WhyKensaPage />} />
          </Route>
        </Route>
      </Routes>
    </Center>
  );

};

export default MainContainer;