import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React from 'react';
import { orange } from '../../constants/color';
import {Menu as MenuIcon} from '@mui/icons-material'
import {Add as AddIcon, Logout as LogoutIcon, Group as GroupIcon, Search as SearchIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Header = () => {


  const navigate = useNavigate();

  const handleMobile = () => {
    console.log("Mobile");
  };


  const openSearchDialog = () => {
    console.log("openSearchDialog");
  };


  const openNewGroup = () => {
    navigate("/groups");
  };


  const navigateToGroup = () => {
    console.log("navigateToGroup");
  };


  const logoutHandler = () => {
    console.log("logout");
  };


  return (
    <>
      <Box sx={{flexGrow: 1}} height={"4rem"} >

        <AppBar 
        position='static'
        sx={{bgcolor: orange}}

        >

          <Toolbar>

            <Typography 
              variant='h6'
              sx={{
                display: {xs: "none", sm: "block"}
              }}
              
              >
                XChat
            </Typography>

            <Box
              sx={{
                display: {xs: "block", sm: "none"}
              }}>

              <IconButton color='inherit' onClick={handleMobile} >

                <MenuIcon />
              </IconButton>  

            </Box>  



            <Box sx={{flexGrow: 1}} >

            </Box>



      <Box>


        <IconBtn 
        title={"Search"}
        icon={<SearchIcon />}
        onClick={openSearchDialog}
        />


        <IconBtn 
        title={"New Group"}
        icon={<AddIcon />}
        onClick={openSearchDialog}
        />


        <IconBtn 
        title={"Manage Group"}
        icon={<GroupIcon />}
        onClick={openSearchDialog}
        />


        <IconBtn 
        title={"Logout"}
        icon={<LogoutIcon />}
        onClick={logoutHandler}
        />
              
             

              
              
            </Box>
          </Toolbar>
        </AppBar>


      </Box>
    </>
  )
};



const IconBtn = ({title, icon, onClick}) => {

  return(
    <Tooltip title={title} >
            <IconButton 
              color='inherit' 
              size='large' 
              onClick={onClick} 
              >

              {icon}
            </IconButton>
    </Tooltip>  
  )
};




export default Header