import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { TagSharp } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Tag } from "../models/OneDocument";
import { Autocomplete, TextField } from "@mui/material";

const handleClick = () => {
  console.info("You clicked the Chip.");
};

const handleDelete = (tag:Tag) => {
  console.log(tag)
  console.log("delete")
}



function InputTagList(props: {tags:Tag[],  setTagsNameList: (v: any)=>any}) {
  let [tagList, setTagList] = useState<Tag[]>(props.tags);
  let [tagNameList, setTagNameList] = useState<(string)[]>(props.tags.map((t:Tag)=>{return t.name||""}));

  // console.log(props.tags)
  
  // useEffect(() => {      
  //   setTagNameList(tagList.map((t:Tag)=>{return t.name||""})); 
  // }, []);


  return (
    <div>
      {/* <Stack direction="row" spacing={1}>

        {tagList && tagList.map((t:Tag)=>{
          return (<Chip 
            key={t.id} label={t.name} 
            variant="outlined" 
            onClick={handleClick}
            onDelete={()=>handleDelete(t)}
            />)
        })}
      </Stack> */}

<Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-filled"
        options={top100Films.map((option:any) => option.title)}
        defaultValue={props.tags.map((t:Tag)=>{return t.name||""})}
        // value={tagNameList}
        freeSolo
        onChange={(e, newValue) => {
          console.log(newValue)
          setTagNameList(newValue);
          props.setTagsNameList(newValue);
        }}
        renderTags={(value: string[], getTagProps) => {
          console.log("setTagTitleList", value)
          // have warning if use setState here
          // setTagNameList(value);
          // props.setTagsNameList(value);
          // console.log(tagNameList)
          // change to https://stackoverflow.com/a/69512803
          return tagNameList.map((option: string, index: number) => {
            return (
              <Chip variant="outlined" label={option} {...getTagProps({ index })} />
            )}
          )
        }
          
        }
        renderInput={(params) => {
          // console.log(params)
          return (
          <TextField
            {...params}
            variant="standard"
            label="tags"
            placeholder="Input Tags"
          />
        )}}
      />
      </Stack>
    </div>
  );
}

export default InputTagList;

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 }
]