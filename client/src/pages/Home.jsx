import React from 'react';
import AppLayout from '../components/layout/AppLayout';
import { Box, Stack, Typography } from '@mui/material';

const Home = () => {
  return (
    
      <Box sx={{ bgcolor:'#E5D9F2', height:'100%' ,position:"relative", }} >

      
      <Typography p={"2rem"}  variant='h6' textAlign={"center"}   >Select user to chat</Typography>
      <img style={{position: 'absolute' , bottom:'4rem', left:"47%" }} src="/XChatlogo.png" height={"50rem"} alt="" />
      
      </ Box>
    
  )
}

export default AppLayout(Home);