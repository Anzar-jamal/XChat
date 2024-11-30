import React, { useState } from 'react';
import { Container, Button, TextField, Typography, Paper } from '@mui/material';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  // Toggle between Login and Signup forms
  const toggleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  return (
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
            >
              <TextField
                label="Username"
                margin="normal"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                fullWidth
                required
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
            >
              <TextField
                label="Name"
                margin="normal"
                variant="outlined"
                fullWidth
                required
              />

          <TextField
          id=""
          label="Bio"
          margin="normal"
          variant="outlined"
          fullWidth
          required 
          
        />
              <TextField
                label="Username"
                margin="normal"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                fullWidth
                required
              />
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
  );
};

export default Login;
