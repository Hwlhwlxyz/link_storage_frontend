import { Container, CssBaseline, Box, Avatar, Typography, Grid, TextField, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Link from '@mui/material/Link';

import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Type } from 'typescript';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { recoilTestItem } from '../../components/atom';
import { signup } from '../../api/user';
import TransitionAlerts from '../../components/TransitionAlerts';

const theme = createTheme();

type LocationProps = {
  state: {
    from: Location;
  };
};

function SignupPage() {
  const location = useLocation() as LocationProps;
  const [signupResult, setSignupResult] = useState<boolean>(false);

  
  let from = location.state?.from?.pathname || "/";
  let navigate = useNavigate();
  useEffect(() => {
    
  })

  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      username: data.get('username'),
      email: data.get('email'),
      password: data.get('password'),
    });
    let username = data.get('username') as string;
    let email = data.get('email') as string;
    let password = data.get('password') as string;
    signup(username, email, password).then(response=>{
      console.log(response);
      setSignupResult(true);
    })
    
    
  };

    return (
      <ThemeProvider theme={theme}>
        <TransitionAlerts open={signupResult} text='signup success'/>
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
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
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
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                {/* TODO */}
                {/* <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link> */}
              </Grid>
            </Grid>
          </Box>
          <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link> 
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
    
  }


export default SignupPage;
