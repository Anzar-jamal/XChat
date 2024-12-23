import { Button, Dialog, DialogTitle, InputAdornment, List, ListItem, ListItemText, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import {useInputValidation} from "6pp";
import {Search as SearchIcon} from "@mui/icons-material";
import UserItem from '../shared/UserItem';
import { sampleUsers } from '../../constants/sampleData';

const Search = () => {

  const [open, setOpen] = useState(true);
  const closeDialogHandler = () => {

    setOpen((prev)=> !prev);
    

  }
  const search = useInputValidation("");

  const addFriendHandler = (id) => {
    console.log("id");
  };

  let isLoadingSendFriendRequest = false;

  const [users, setUSers] = useState(sampleUsers);



  return (
    <>
      <Dialog open={open} >
          <Stack 
            p={"2rem"}
            direction={"column"}
            width={"25rem"}
            >
              <DialogTitle textAlign={"center"} >Find People</DialogTitle>
              <TextField 
                label="" 
                value={search.value} 
                onChange={search.changeHandler}
                variant='outlined'
                size='small'
                InputProps={{startAdornment: (
                  <InputAdornment position='start' > <SearchIcon /> </InputAdornment>
                )}}
                />

              <List>
                {users.map((i) => (
                  
                  <UserItem 
                    user={i} 
                    key={i._id} 
                    handler={addFriendHandler} 
                    handlerIsLoading={isLoadingSendFriendRequest} />
                ))

                }
              </List>

          </Stack>

          <Button variant='contained' color='error'   onClick={closeDialogHandler} >Close</Button>
      </Dialog>
    </>  
  )
}

export default Search