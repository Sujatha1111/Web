import { Box, Divider, Stack, styled, Typography, createTheme, useMediaQuery, Paper } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom';

import { Route, Routes } from 'react-router-dom'
import { BodyRouteElement } from '../BodyRouteElement';
import { News } from './News';
 

const NewsRoutes = ({ darkMode, setDarkMode }) => {
  return (
      <>
            <Routes>
                <Route element={<BodyRouteElement></BodyRouteElement>}>
                    <Route index element={<News darkMode={darkMode} setDarkMode={setDarkMode} ></News>}></Route>
                    
                    <Route path=":id" element={<News darkMode={darkMode} setDarkMode={setDarkMode} ></News>}></Route>
                </Route>
            </Routes>
    </>
  )
}

export default NewsRoutes