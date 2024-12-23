import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import { Avatar, ListItem, Stack, Typography, IconButton } from '@mui/material';
import React from 'react'

const UserItem = ({user, handler, handlerIsLoading, isAdded = false}) => {

    const {sender, _id} = user;
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
                flexGrow: 1,
                display: "-webkit-box",
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "100%"

             }} 
             >{name}</Typography>

            <IconButton
            size='small'
            sx={{
                bgcolor: isAdded ? "error.main" : "primary.main",
                color: "white",
                "&:hover":{
                    bgcolor: isAdded ? "error.dark" : "primary.dark",
                },
                
            }}
            
            onClick={() => handler(_id)} disabled={handlerIsLoading} >

            {
                isAdded ? <RemoveIcon color='red' /> : <AddIcon />
            }    
                
            </IconButton>
        </Stack>
    </ListItem>
  );
};

export default UserItem;