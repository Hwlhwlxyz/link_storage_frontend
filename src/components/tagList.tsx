import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { Tag } from "../models/OneDocument";
import { Link, useLocation, useNavigate } from "react-router-dom";



function TagList(props: {tags:Tag[]}) {
  const navigate = useNavigate()
  let location = useLocation();
  let [tagList, setTagList] = useState(props.tags);;
  console.log(props.tags)
  const from = location ? location.pathname : '/';
  const handleClick = (tag: Tag) => {
    // console.info("You clicked the Chip.");
  };

  return (
    <div>
      <Stack direction="row" spacing={1}>
        {tagList && tagList.map((t:Tag)=>{
          return (<Chip key={t.id} 
            component={Link}
            to={'/dashboard/tag/'+t.name}
            label={t.name} 
            variant="outlined" 
            onClick={() => handleClick(t)} 
            />)
        })}
      </Stack>
    </div>
  );
}

export default TagList;

