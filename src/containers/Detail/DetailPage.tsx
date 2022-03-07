import {
  Box,
  Button,
  Container,
  FormLabel,
  Grid,
  OutlinedInput,
  TextField,
} from "@mui/material";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import { useState } from "react";
import HeaderBar from "../../components/headerBar";
import { OneDocument } from "../../models/OneDocument";

function DetailPage() {
  let [detailForm, setDetailForm] = useState<any>({});
  let [state, setState] = useState<any>();

  function handleSubmit(event: any) {
    console.log(state);

    event.preventDefault();
  }

  function handleInputChange(event: any) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    // setState({
    //   [name]: value
    // });

    setState((values: any) => ({ ...values, [name]: value }));
  }

  return (
    <div className="App">
      <HeaderBar />

      <Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl fullWidth sx={{ m: 1 }}>
              <FormLabel>url</FormLabel>
              <OutlinedInput
                onChange={(event) => handleInputChange(event)}
                name="url"
                placeholder="Please enter text"
              />
            </FormControl>

            <FormControl fullWidth sx={{ m: 1 }}>
              <FormLabel>description</FormLabel>
              <TextField
                onChange={(event) => handleInputChange(event)}
                name="description"
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                rows={8}
                fullWidth
              />
            </FormControl>

            <Button
              type="submit"
              value="Submit"
              variant="contained"
              fullWidth
              onClick={(event) => handleSubmit(event)}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Container>
    </div>
  );
}

export default DetailPage;
