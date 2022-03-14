import {
  Box,
  Button,
  Container,
  FormLabel,
  Grid,
  OutlinedInput,
  TextField,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { useEffect, useState } from "react";
import { getLoginUserId } from "../../api/auth";
import { createDocument } from "../../api/document";
import HeaderBar from "../../components/headerBar";

interface DetailPageType {
  type: string; // create, update
}

function DetailPage(props: DetailPageType) {

  let [state, setState] = useState<any>({
    "title": '',
    "url": '',
    "description": ''
  });

  function handleSubmit(event: any) {
    console.log(state);

    event.preventDefault();
    if (props.type==='create') {
      createDocument(getLoginUserId(), state);
    }
  }

  useEffect(()=> {
    if (props.type==='update'){
      setState({
        url:'default url',
        description: 'default description'
      })
    }
  },[props.type])

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
              <FormLabel>title</FormLabel>
              <OutlinedInput
                onChange={(event) => handleInputChange(event)}
                name="title"
                placeholder="Please enter title"
                value={state?.title}
              />
            </FormControl>

            <FormControl fullWidth sx={{ m: 1 }}>
              <FormLabel>url</FormLabel>
              <OutlinedInput
                onChange={(event) => handleInputChange(event)}
                name="url"
                placeholder="Please enter url"
                value={state?.url}
              />
            </FormControl>

            <FormControl fullWidth sx={{ m: 1 }}>
              <FormLabel>description</FormLabel>
              <TextField
                onChange={(event) => handleInputChange(event)}
                name="description"
                id="outlined-multiline-flexible"
                // label="Multiline"
                multiline
                rows={8}
                fullWidth
                placeholder="Please enter description"
                value={state?.description}
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
