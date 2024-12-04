import React from 'react';
import {Grid, Skeleton, Stack } from '@mui/material';

export const LayoutLoader = () => {

    return(
        <Grid container sx={{ width: "100%", height: "calc(100vh - 4rem)" }}  spacing="1rem" >

                    <Grid item
                        sm={4} 
                        md={3} 
                        sx={{ display: {xs: "none", sm: "block", backgroundColor: "#87CEEB" } }}
                        height={"100%"}
                    >
                            <Skeleton variant='rectangular' />
                    </Grid>

                    <Grid item 
                        xs={12} 
                        sm={8}
                        md={5}
                        lg={6}
                        height={"100%"}    
                    >  


                   <Stack spacing={"1rem"} >
                   {
                        Array.from({lemgth: 10}).map((_, index) =>(

                            <Skeleton key={index} height={"5rem"} variant='rectangular' />
                        ))
                    }

                   </Stack>
                   
                            
                    </Grid>

                    
                    <Grid item 
                        md={4} 
                        lg={3} 
                        height={"100%"}
                        sx={{ 
                            display: {xs: "none", sm: "block"},
                            padding: "2rem",
                            backgroundColor: "#ac7070"
                        }}
                        
                    >
                           <Skeleton variant='rectangular' height={"100%"} />
                    </Grid>

                </Grid>
    )
}