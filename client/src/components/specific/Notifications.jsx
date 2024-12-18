import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  Typography
} from '@mui/material';
import React, { memo } from 'react';
import { sampleNotifications } from '../../constants/sampleData';

const Notifications = () => {

  const friendRequestHandler = ({_id, accept }) => {

  }

  return (
    <Dialog open  >
      <Stack p={{xs:"0.5rem", sm:"4rem"}} maxWidth={"50rem"}  >

        <DialogTitle sx={{textAlign: "center"}} >Notification</DialogTitle>

        {
          sampleNotifications.length > 0 ? ( 
          
          sampleNotifications.map((sender, _id) => 
          <NotificationItems 
            sender={sender} 
            _id={_id} 
            handler={friendRequestHandler} 
            key={_id} /> ) 
        
          ) : ( 
          
          <Typography sx={{textAlign:"center"}} >No Notifications</Typography> )
        }

      </Stack>
    </Dialog>
  );
};


const NotificationItems = memo(({ sender, _id, handler}) => {

  const {name, avatar} = sender;
       return (

    <ListItem>
        <Stack 
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}

        >
            <Avatar src={avatar} /> 

            <Typography
             variant='body1'
             sx={{
                flexGLow: 1,
                display: "-webkit-box",
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "100%"

             }} 
             >{`${name } added you`}
             </Typography>

            <Stack
              direction={{
                xs:"column",
                sm:"row"
              }}
              >
              <Button variant='contained' sx={{marginRight:"0.5rem"}} onClick={()=> handler({__id, accept:true})} >Accept</Button>
              <Button variant='outlined' color='error' onClick={()=> handler({__id, accept:false})} >Reject</Button>
              
            </Stack>
        </Stack>
    </ListItem>
  );
});


export default Notifications