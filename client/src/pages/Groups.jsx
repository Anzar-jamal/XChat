import { Done as DoneIcon, Edit as EditIcon, KeyboardBackspace as KeyboardBackspaceIcon,  Menu as MenuIcon  } from '@mui/icons-material';
import { Box, Drawer, IconButton, Stack, TextField, Tooltip, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { memo, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import {sampleChats} from '../constants/sampleData';
import {Link} from "../components/styles/StyledComponents";
import AvatarCard from "../components/shared/AvatarCard"

const Groups = () => {

  const chatId = useSearchParams()[0].get("group");
  const navigate = useNavigate();
  // console.log(sampleChats);

  const navigateBack = () => {
    navigate("/");
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleMobile = () => {
    setIsMobileMenuOpen((prev)=>!prev);
  };


  const handleMobileClose = () => {
    setIsMobileMenuOpen(false);
  };


  const updateGroupName = () => {

    setIsEdit(false);
  };


  const [groupName, setGroupName] = useState("Group Name");

  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("");




  const IconBtns = (
  <>
    <Box
    sx={{
      display:{
        xs:"block",
        sm:"none",
        position:"fixed",
        top:"2rem",
        right:"1rem"
      },
    }} 
     >
      <Tooltip title="Menu" >
        <IconButton onClick={handleMobile} >
          <MenuIcon />
        </IconButton>
      </Tooltip>  
    </Box>



    <Tooltip title="back" >
      <IconButton
        sx={{
          position:"absolute",
          top:"2rem",
          left:"2rem",
          bgcolor:"rgba(0,0,0,0.6)",
          color:"black",
          "&:hover":{
            bgcolor:"rgba(0,0,0,0.8)"
          }
        }}
        onClick={navigateBack}
        >

        <KeyboardBackspaceIcon />
      </IconButton>
    </Tooltip>
  </>);

  const GroupName = 
    <Stack direction={"row"} 
      alignItems={"center"} 
      justifyContent={"center"} 
      spacing={"1rem"} 
      padding={"1rem"} >{ isEdit ? ( 

      <>
        <TextField value={groupNameUpdatedValue} onChange={(e) => setGroupNameUpdatedValue(e.target.value)} />
        <IconButton onClick={updateGroupName} > <DoneIcon /> </IconButton>
      </> 

      ) : (

      <>
        <Typography variant='h5' >{groupName}</Typography>
        <IconButton onClick={ ()=> setIsEdit(true)} > <EditIcon /> </IconButton>
      </>
      ) } 
    </Stack> 



  return (
    <Grid container height={"100vh"} >

      <Grid 
        item 
        sm={4} 
        sx={{
          display :{
            xs:"none",
            sm:"block"}}}
            bgcolor={"#A19AD3"} >
          <GroupList myGroups={sampleChats} />
      </Grid>

      <Grid 
        item
        xs={12}
        sm={8}
        sx={{
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          position:"relative",
          padding: "1rem 3rem"
        }}
        >
         {IconBtns}


         {GroupName}


         

      </Grid>

      <Drawer 
       sx={{
        display:{
          xs:"block",
          sm:"none"
        }
       }}
       open={isMobileMenuOpen} 
       onClose={handleMobileClose} >
        
        <GroupList myGroups={sampleChats}  w={"50vw"}/>
      </Drawer>


    </Grid >
  );
};








const GroupList = ({w="100%", myGroups=[], chatId}) => (

  <Stack width={w} direction={"column"} >

    {myGroups.length > 0 ? (
      myGroups.map(
        (group)=> (
        <GroupListItem group={group} chatId={chatId} key={group._id} />

      ))
    ) : (
      <Typography textAlign={"center"} padding={"1rem"} >No Groups</Typography>
    )
  }
  </Stack>
);








const GroupListItem = memo(({group, chatId}) => {

  const { name, avatar, _id } = group;

  return <Link to={`?group=${_id}`}  onClick={(e) => {
    if(chatId===_id) e.preventDefault();
  }}>

    <Stack 
      direction={"row"} spacing={"1rem"} alignItems={"center"} 
      >
      <AvatarCard avatar={avatar} />
      <Typography>{name}</Typography>
    </Stack>
  </Link>



});






export default Groups