import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {Link, useNavigate} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import auth from '../auth/auth'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const theme = createTheme();

export default function Form(props) {
    const {name,description,link}=props;
  const [isValid,setIsValid]=useState(true);
  const [error,setError]=useState('');

  let navigate=useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData={
      email: data.get('email'),
      password: data.get('password'),
    };
    const {email,password}=userData;
    if (email==='' || !email.includes('@') ||!email.includes('.com') || password.length<6 || password ===''){
        setIsValid(false);
      }
      else{
        setIsValid(true)
      }
    
    if(isValid) {
      // Handling sing-in/sign-up
        name==="Login"?signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            const {email}=res.user;
            localStorage.setItem('user',email);
            navigate('/');
          })
        .catch(err => setError(err.message))
        :
        createUserWithEmailAndPassword(auth,email,password)
        .then((res) => {
          const {email}=res.user;
          localStorage.setItem('user',email);
          navigate('/');
        })
      .catch(err => setError(err.message))
    }

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {name}
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              {!isValid && <p style={{color:'red',paddingLeft:'16px'}}>Please enter a valid email and password</p>}
              {error && <p style={{color:'red',paddingLeft:'16px'}}>invalid email or password...</p>}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             {name}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={link}>
                 {description}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
