import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { TagSharp } from "@mui/icons-material";
import { useState } from "react";
import { Tag } from "../models/OneDocument";

const handleClick = () => {
  console.info("You clicked the Chip.");
};

function TagList(props: {tags:Tag[]}) {
  let [tagList, setTagList] = useState(props.tags);;
  console.log(props.tags)
  return (
    <div>
      <Stack direction="row" spacing={1}>
        {tagList && tagList.map((t:Tag)=>{
          return (<Chip key={t.id} label={t.name} variant="outlined" onClick={handleClick} />)
        })}
      </Stack>
    </div>
  );
}

export default TagList;
