import React, { useState } from "react";
import SideBar from './components/SideBar';
import Navbar from './components/Navbar';
import RightBar from './components/RightBar';
import Feed from './components/Feed.jsx'
import Add from './components/Add.jsx'
import {Box, Stack, createTheme, ThemeProvider} from '@mui/material'

function App(){
  const [mode,setMode] = useState('light')
  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })
  return(
    <ThemeProvider theme={darkTheme}>
  <Box bgcolor={'background.default'} color={'text.primary'}>
   <Navbar />
      <Stack direction='row'  justifyContent = 'space-between'>
      <SideBar setMode={setMode} mode={mode} />
      <Feed />
      <RightBar />
      </Stack>
      <Add />
      </Box>
      </ThemeProvider>
  )
}

export default App;
