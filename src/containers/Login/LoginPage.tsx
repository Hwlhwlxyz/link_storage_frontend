import { Container, CssBaseline, Box, Avatar, Typography, Grid, TextField, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Link from '@mui/material/Link';
import { getToken, getTokenFromSession, login, userSessionKey } from '../../api/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Type } from 'typescript';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { recoilTestItem } from '../../components/atom';

const theme = createTheme();

type LocationProps = {
  state: {
    from: Location;
  };
};

function LoginPage() {
  const location = useLocation() as LocationProps;
  const [token, setToken] = useState<any>("");
  const [loginUserId, setLoginUserId] = useRecoilState(recoilTestItem);
  
  let from = location.state?.from?.pathname || "/dashboard";
  let navigate = useNavigate();
  useEffect(() => {
    if (getTokenFromSession()){
      console.log("you have logged in")
      navigate(from, {replace: true});
    }
  })

  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    login(data.get('username') as string, data.get('password') as string).then(data=>{
      console.log("login", data)
      if (data===true) {
        const tokenData = JSON.parse(getTokenFromSession())
        console.log(tokenData['id'])
        setLoginUserId(tokenData['id'])
        console.log("setLoginUserId:",tokenData['id'])
        navigate(from, {replace: true});
      }
      else {
        console.log("login error")
      }
    })
    
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
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
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
              Log in
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                {/* TODO */}
                {/* <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link> */}

              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
    
  }


export default LoginPage;
