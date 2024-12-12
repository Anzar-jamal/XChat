import React from 'react'
import { Avatar, AvatarGroup, Box, Stack } from '@mui/material'

const AvatarCard = ({avatar = [], max=4}) => {
  return (
    <Stack direction={"row"} spacing={"0.5"}  >

        <AvatarGroup max={max} >

            <Box width={"5rem"} height={"3rem"} position={"relative"} >
                {
                    avatar.map((i, index) => (
                        <Avatar
                            key={Math.random() * 100}
                            src={i}
                            alt={`Avatar ${index}`}
                            style={{
                                width: "3rem",
                                height: "3rem",
                                border: "2px solid white",
                                position: "absolute",
                                right: {
                                    xs: `${0.5 + index }rem`,
                                    sm: `${index }rem`,
                                },
                            }}
                         />
                        ))
                }
            </Box>
        </AvatarGroup>
    </Stack>
  )
}

export default AvatarCard