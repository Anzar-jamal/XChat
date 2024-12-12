import { Avatar,Icon, Stack, Typography } from '@mui/material';
import React from 'react';
import {Face as FaceIcon,
        AlternateEmail as UserNameIcon,
        CalendarMonth as CalandarIcon
} from '@mui/icons-material';
import moment from "moment";

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"} >

        <Avatar
          sx={{
            width: 150,
            height: 150,
            objectFit: "contain",
            marginBottom: "1rem",
            border: "5px solid white"
          }}
          />

        <ProfileCard 
          heading={"Bio"} 
          text={"Thoda bahot Engineer"} />

        <ProfileCard 
          heading={"Username"} 
          text={"@Anzar_Jamal654321"} 
          icon={<UserNameIcon />} />

        <ProfileCard 
          heading={"Name"} 
          text={"Anzar Jamal"} 
          icon={<FaceIcon />} />

        <ProfileCard 
          heading={"Joined"} 
          text={moment("2024-10-09T01:06:14.034Z").fromNow()} 
          icon={<CalandarIcon />} />  

    </Stack>
  )
}




const ProfileCard = ({text, icon, heading}) => (

    

    <Stack 
    
    direction={"row"}
    
    alignItems={"center"}
    spacing={"1.5rem"}
    color={"white"} 
    textAlign={"center"} >

      {icon}
      
      <Stack>

          <Typography variant={'body1'} >{text}</Typography>
          <Typography color={"gray"} variant={'caption'} >{heading}</Typography>
      </Stack>
      
    </Stack>

    )





export default Profile;