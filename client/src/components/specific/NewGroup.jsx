
import { Button, Dialog, DialogTitle, InputAdornment, List, ListItem, ListItemText, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import {useInputValidation} from "6pp";
import {Search as SearchIcon} from "@mui/icons-material";
import UserItem from '../shared/UserItem';
import { sampleUsers } from '../../constants/sampleData';

const NewGroup = () => {

  const [members, setMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const groupName = useInputValidation("");

  const selectMemberHandler = (id) => {

    setSelectedMembers((prev) => 
        prev.includes(id) ? prev.filter((currElement)=> currElement !== id) :( [...prev, id] )
    );

  };
  console.log(selectedMembers);

  const submitHandler = () => {

  };



  

  return (
    <Dialog open   >
      <Stack p={{xs:"0.5rem", sm:"2rem"}} minWidth={"25rem"}  maxWidth={"30rem"} spacing={"1rem"}  >

        <DialogTitle variant='h4' sx={{textAlign: "center"}} >New Group</DialogTitle>

        <TextField label="Group Name" value={groupName.value} onChange={groupName.changeHandler} />

        <Typography variant='body1'  textAlign={"center"} >Members</Typography>

        <Stack>
        {sampleUsers.map((i) => (
                
                <UserItem 
                  user={i} 
                  key={i._id} 
                  handler={selectMemberHandler}
                  isAdded={selectedMembers.includes(i._id)} 
                  />
              ))

              }
        </Stack>

        <Stack direction={"row"} justifyContent={"space-evenly"} >

          <Button variant='text' color='error' >Cancel</Button>
          <Button variant='contained' >Create</Button>

        </Stack>

      </Stack>
    </Dialog>
  );
}

export default NewGroup