import React, { useState } from 'react';
import { Container,Avatar, Button, TextField, Typography, Paper, Stack, IconButton,  } from '@mui/material';
import {CameraAlt as CameraAltIcon} from '@mui/icons-material';
import VisuallyHiddenInput from '../components/styles/StyledComponents';
import {useInputValidation, useStrongPassword, useFileHandler} from "6pp";
import { usernameValidator } from '../utils/validator';


const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => {
    setIsLogin((prev) => !prev);
  };


  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useStrongPassword();

  const avatar = useFileHandler("single");


  const handleSignUp = (e) => {

    e.preventDefault();
  };


  const handleLogin = (e) => {

    e.preventDefault();
  };



  return (

    <div
    style={{
      
    }}
    >


      <Container
        component="main"
        maxWidth="xs"
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            transform: "scale(0.9)",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {isLogin ? (
            <>
              <Typography variant="h5" color="initial">
                Login
              </Typography>
              <form
                style={{
                  width: '100%',
                  marginTop: '1rem',
                }}
                onSubmit={handleLogin}
              >
                <TextField
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  required
                  value={username.value}
                  onChange={username.changeHandler}
                />

                <TextField
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  required
                  value={password.value}
                  onChange={password.changeHandler}

                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  sx={{ marginTop: '1rem' }}
                >
                  Log In
                </Button>
                <Typography textAlign="center" m="1rem">
                  OR
                </Typography>
                <Button
                  variant="text"
                  color="secondary"
                  fullWidth
                  onClick={toggleLogin}
                >
                  Sign Up Instead
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography variant="h5" color="initial">
                Sign Up
              </Typography>
              <form
                style={{
                  width: '100%',
                  marginTop: '1rem',
                }}
                onSubmit={handleSignUp}
              >

                <Stack 
                position={"relative"} 
                width={"10rem"} 
                margin={"auto"} >

                  <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",


                  }}

                  src={avatar.preview}

                  />

  {
                  avatar.error && (
                    <Typography m={"1rem"} color='error' variant='caption'  > {avatar.error}</Typography>
                  )
                }



                  <IconButton 
                  sx={{
                    position: "absolute",
                    right: "0",
                    bottom: "0",
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.5)",

                    ":hover":{
                      bgcolor: "rgba(0,0,0,0.7)",
                    },
                  }}
                  component="label"
                  >




                    <>
                    <CameraAltIcon/>
                    <VisuallyHiddenInput  type="file" onChange={avatar.changeHandler} />
                    </>
                    
                  </IconButton>

                  

                </Stack>


          


                <TextField
                  label="Name"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  required
                  value={name.value}
                  onChange={name.changeHandler}
                />

                <TextField
                id=""
                label="Bio"
                margin="normal"
                variant="outlined"
                fullWidth
                required 
                value={bio.value}
                onChange={bio.changeHandler}
                
              />


                <TextField
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  required
                  value={username.value}
                  onChange={username.changeHandler}


                />

                {
                  username.error && (
                    <Typography color='error' variant='caption'  > {username.error}</Typography>
                  )
                }


                <TextField
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  required
                  value={password.value}
                  onChange={password.changeHandler}
                />

                {
                  password.error && (
                    <Typography color='error' variant='caption'  > {password.error}</Typography>
                  )
                }


                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  sx={{ marginTop: '1rem' }}
                >
                  Sign Up
                </Button>
                <Typography textAlign="center" m="1rem">
                  OR
                </Typography>
                <Button
                  variant="text"
                  color="secondary"
                  fullWidth
                  onClick={toggleLogin}
                >
                  Log In Instead
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </div>  
  );
};

export default Login;
