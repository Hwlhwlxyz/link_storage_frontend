import {
  AppBar,
  Box,
  Button,
  Container,
  FormLabel,
  Grid,
  OutlinedInput,
  TextField,
  Toolbar,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { getLoginUserId } from "../../api/auth";
import { createDocument, updateDocument } from "../../api/document";
import { updateTags } from "../../api/tag";
import { documentEditItem } from "../../components/atom";
import HeaderBar from "../../components/headerBar";
import InputTagList from "../../components/inputTagList";
import TagList from "../../components/tagList";
import TransitionAlerts from "../../components/TransitionAlerts";

interface DetailPageType {
  type: string; // create, update
  id?: any;
  title?: any;
  url?: any;
  description?: any;
  tagList?: any;
}

function DetailPage(props: DetailPageType) {

  const [doc, setDoc] = useRecoilState(documentEditItem);
  const [tagTitleList, setTagTitleList] = useState<string[]>([]);


  let [state, setState] = useState<any>({
    "id": null,
    "title": '',
    "url": '',
    "description": ''
  });

  let [submitResult, setSubmitResult] = useState<boolean>(false);

  function handleSubmit(event: any) {
    console.log(state);
    console.log(tagTitleList)

    event.preventDefault();
    if (props.type==='create') {
      createDocument(getLoginUserId(), state).then(response=>{
        console.log(response);
        if (response.status===200){
          setSubmitResult(true);
        }
        
      });
    }
    else if (props.type==='update'){
      updateDocument(getLoginUserId(), state).then(response=>{
        console.log(response);
        if (response.status===200){
          setSubmitResult(true);
        }
      })

      updateTags(getLoginUserId(), state.id, tagTitleList).then(response=>{
        console.log(response);
        if (response.status===200){

        }
      })
    }
  }

  useEffect(()=> {
    if (props.type==='update'){
      setState({
        id: doc.id,
        title: doc.title,
        url:doc.url,
        description: doc.description
      })
      console.log({
        id: doc.id,
        title: doc.title,
        url:doc.url,
        description: doc.description
      })
    }
  }, [props.type])

  function handleInputChange(event: any) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    // setState({
    //   [name]: value
    // });

    setState((values: any) => ({ ...values, [name]: value }));
    console.log(name, value)
  }

  return (
    <div className="App">
      <TransitionAlerts open={submitResult} text='submit success' severity='success'/>
      <HeaderBar />
      {/* <Toolbar/> */}
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

            <InputTagList 
            tags={doc.tagList} 
            setTagsNameList={setTagTitleList} />

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
