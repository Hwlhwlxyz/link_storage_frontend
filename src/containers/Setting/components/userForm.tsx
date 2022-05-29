import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  OutlinedInput,
  FilledInput,
  Grid,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getLoginUserId } from "../../../api/auth";
import { editUser, getById } from "../../../api/user";
import TransitionAlerts from "../../../components/TransitionAlerts";

function UserForm() {
  let name = "name";
  let [formValue, setFormValue] = useState({
    email:"",
    username:"",
    password:"",
    confirmPassword:""
  })

  let [openTransitionAlerts, setOpenTransitionAlerts] = useState(false);


  let [userValue, setUserValue] = useState()

  useEffect(()=>{
    // getById(getLoginUserId()).then(value=>{
    //   console.log(value)
    // })
  })

  function handleChange(event: any) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value)
    console.log(event)
    // setState({
    //   [name]: value
    // });

    setFormValue((values: any) => ({ ...values, [name]: value }));
    console.log(formValue)
  }

  function handleSubmit(event: any) {
    // console.log(event)
    console.log(formValue)
    editUser(formValue.email, formValue.password).then((data:any)=>{
      console.log(data)
    })
    .catch((error: any)=>{
      console.log(error)
      setOpenTransitionAlerts(true);
    })
    
  }


  return (
    <div>
      <TransitionAlerts open={openTransitionAlerts} text='token expired' severity='warning'/>
      <Grid container spacing={2}>
        {/*<Grid item xs={8}>
         <FormControl fullWidth>
        <InputLabel htmlFor="component-outlined">Name</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={"test"}
          onChange={handleChange}
          label="Name"
        />
      </FormControl>
        </Grid>
        <Grid item xs={4}>
        <FormControl fullWidth>
        <InputLabel htmlFor="component-outlined">Label</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={"name2"}
          onChange={handleChange}
          label="Label"
        />
      </FormControl>
        </Grid>
        <Grid item xs={4}>
        <FormControl fullWidth>
        <InputLabel htmlFor="component-outlined">Name</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={name}
          onChange={handleChange}
          label="Name"
        />
      </FormControl>
        </Grid>
        <Grid item xs={8}>
        <FormControl fullWidth>
        <InputLabel htmlFor="component-outlined">Name</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={name}
          onChange={handleChange}
          label="Label2"
        />
      </FormControl>
        </Grid>

        <Grid item xs={12}>
        <FormControl fullWidth>
        <InputLabel htmlFor="component-outlined">Password</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={"name"}
          onChange={handleChange}
          label="Password"
        />
      </FormControl>
        </Grid>
        */}

        <Grid item xs={12}>
        <FormControl fullWidth>
        <InputLabel htmlFor="component-outlined">Email</InputLabel>
        <OutlinedInput
          id="component-outlined"
          name="email"
          value={formValue?.email}
          onChange={handleChange}
          label="Email"
        />
      </FormControl>
        </Grid>

        {/* <Grid item xs={12}>
        <FormControl fullWidth>
        <InputLabel htmlFor="component-outlined">Username</InputLabel>
        <OutlinedInput
          id="component-outlined"
          name="username"
          value={formValue?.username}
          onChange={handleChange}
          label="Username"
        />
      </FormControl> 
        </Grid> */}

        <Grid item xs={12}>
        <FormControl fullWidth>
        <InputLabel htmlFor="component-outlined">Password</InputLabel>
        <OutlinedInput
          id="component-outlined"
          name="password"
          value={formValue?.password}
          onChange={(event)=>handleChange(event)}
          label="Password"
        />
      </FormControl>
        </Grid>

        <Grid item xs={12}>
        <FormControl fullWidth>
        <InputLabel htmlFor="component-outlined">Confirm Password</InputLabel>
        <OutlinedInput
          id="component-outlined"
          name="confirmPassword"
          value={formValue?.confirmPassword}
          onChange={(event)=>handleChange(event)}
          label="Confirm Password"
        />
      </FormControl>
        </Grid>

        <Grid item xs={12}>
        <Button
              // type="submit"
              // value="Submit"
              variant="contained"
              fullWidth
              onClick={(event) => handleSubmit(event)}
            >
              Submit
            </Button>
        </Grid>

      </Grid>

      
      
      
    </div>
  );
}

export default UserForm;
