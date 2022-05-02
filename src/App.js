
import SideBar from './components/SideBar';
import Navbar from './components/Navbar';
import RightBar from './components/RightBar';
import Feed from './components/Feed.jsx'
 import {Box, Stack} from '@mui/material'

function App(){
  return(
    <Box >
   <Navbar />
      <Stack direction='row' spacing={2} justifyContent = 'space-between'>
      <SideBar />
      <Feed />
      <RightBar />
      </Stack>
    </Box>
  )
}

export default App;
