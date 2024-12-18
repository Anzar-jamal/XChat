import React, { Fragment, useRef } from 'react'
import AppLayout from '../components/layout/AppLayout';
import { IconButton, Stack} from '@mui/material';
import { AttachFile as AttachFileIcon , Send as SendIcon  } from '@mui/icons-material';
import { InputBox } from '../components/styles/StyledComponents';
import FileMenu from '../components/dialogs/FileMenu';
import { sampleMessage } from '../constants/sampleData';
import MessageComponent from '../components/shared/MessageComponent';

const user = {
  _id: "currentUserId",
  name: "Bruce Wayne"
}


const Chat = () => {
  
  const containerRef = useRef(null);

  const fileMenuRef = useRef(null);

  return (
    <Fragment  >
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        height={"90%"}
        sx={{
          overflowX:"hidden",
          overflowX: "auto",
          bgcolor: "#EDEADE"
        }}

        >

          {sampleMessage.map((i) => (
            <MessageComponent key={i._id} message={i} user={user}  />
          ))
            }


      </Stack >

      <form style={{height: '10%'}} >
        <Stack 
          bgcolor={"white"}
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
          >
          <IconButton 
            sx={{
              rotate: "30deg"
            }}
            ref={fileMenuRef}
            >
            <AttachFileIcon />
          </IconButton>


          <InputBox sx={{paddingY: "1rem"}} placeholder='Type Message Here .....' />

          <IconButton>
            <SendIcon />
          </IconButton>

          <FileMenu anchorE1={fileMenuRef.current} />  
          
        </Stack>

      </form>
    </Fragment>
  )
}

export default AppLayout(Chat);