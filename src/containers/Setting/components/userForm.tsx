import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  OutlinedInput,
  FilledInput,
  Grid,
} from "@mui/material";

function UserForm() {
  let name = "name";
  function handleChange() {}
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
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
          label="Name"
        />
      </FormControl>
        </Grid>
      </Grid>

      
    </div>
  );
}

export default UserForm;
