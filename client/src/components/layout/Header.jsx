import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React, {lazy, Suspense, useState} from 'react';
import { orange } from '../../constants/color';
import {Menu as MenuIcon} from '@mui/icons-material'
import {Add as AddIcon,
       Logout as LogoutIcon, 
       Group as GroupIcon, 
       Search as SearchIcon ,
       Notifications as NotificationIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const SearchDialog = lazy((() => import("../specific/Search")));
const NotificationDialog = lazy(() => import("../specific/Notifications"));
const NewGroupDialog = lazy(() => import("../specific/NewGroup"));



const Header = () => {


  const navigate = useNavigate();
  const [isMobile, setIsmobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsnewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);






  
  
  const handleMobile = () => {
    setIsmobile(prev => !prev);
  };


  const openSearch = () => {
    setIsSearch(prev => !prev);
  };


  const openNewGroup = () => {
    setIsnewGroup(prev => !prev);
  };


  const navigateToGroup = () => {
    navigate("/groups");
  };


  const logoutHandler = () => {
    console.log("logout");
  };


  const openNotification = () => {
    setIsNotification(prev => !prev);
  };



  return (
    <>
      <Box sx={{flexGrow: 1}} height={"4rem"} >

        <AppBar 
        position='static'
        sx={{bgcolor: "#ea7070"}}

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
        onClick={openSearch}
        />


        <IconBtn 
        title={"New Group"}
        icon={<AddIcon />}
        onClick={openNewGroup}
        />


        <IconBtn 
        title={"Manage Group"}
        icon={<GroupIcon />}
        onClick={navigateToGroup}
        />


        <IconBtn 
        title={"Notifications"}
        icon={<NotificationIcon />}
        onClick={openNotification}
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

    
    {
      isSearch && (
        <Suspense fallback={<Backdrop />} >
          <SearchDialog />

        </Suspense>
      )
    }

    {
      isNotification && (
        <Suspense fallback={<Backdrop />} >
          <NotificationDialog />

        </Suspense>
      )
    }

    {
      isNewGroup && (
        <Suspense fallback={<Backdrop />} >
          <isNewGroup />

        </Suspense>
      )
    }





    </>
  );
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