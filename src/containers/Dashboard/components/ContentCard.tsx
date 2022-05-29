import { Card, CardContent, Typography, CardActions, Button, CardMedia, Box, Link } from "@mui/material";
import { Ref, useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { deleteDocument } from "../../../api/document";
import { getFavicon } from "../../../api/utility/urlUtility";
import { documentEditItem } from "../../../components/atom";
import MuiDialog from "../../../components/muiDialog";
import TagList from "../../../components/tagList";
import logo from '../../../logo.svg';
import { OneDocument } from "../../../models/OneDocument";

interface RefObject {
  handleClickOpen: () => void,
  getSubmitResult: () => boolean|null,
  result: boolean|null
}
function ContentCard(props: {document: OneDocument, refetchFunction: ()=>void}) {
  let navigate = useNavigate();
    const [title] = useState(props.document.title);

    let imageLink = getFavicon(props.document.url)
    const [doc, setDoc] = useRecoilState(documentEditItem);
    
    const [infoText, setInfoText] = useState("");

    const inputRef = useRef<RefObject>(null)
  
    function onClickEdit() {
      setDoc({
        id: props.document.id,
        title:props.document.title,
        url:props.document.url,
        description:props.document.description,
        tagList: props.document.tagList
      })
      navigate("../detail", { replace: false });
    }

  function deleteDocButton(d: any){
    setInfoText("Do you want to delete "+d.title+"?");
    if (inputRef.current) {
      inputRef.current.handleClickOpen()
    }
    return null;
  }

  function onCancel() {
    console.log('cancel')
  }

  function onConfirm() {
    console.log('confirm')
    deleteDocument(props.document.id).then(response=>{
      console.log(response)
      // refetch documents
      props.refetchFunction()
    })
  }

  function onClickDelete() {
    deleteDocButton({
      title:props.document.title,
      url:props.document.url,
      description:props.document.description
    })
  }

  return (

    
    <Card sx={{ display:'flex', minWidth: 275 }}>
<MuiDialog   contentText={infoText} ref={inputRef} onCancel={onCancel} onConfirm={onConfirm}></MuiDialog>
<CardMedia
        component="img"
        sx={{ width: 50, height:50 }}
        image={imageLink}
        alt="Live from space album cover"
      />


<Box sx={{ display: 'flex', flexDirection: 'column'  }}>
<CardContent  sx={{ flex: '1 0 auto' }}>
        
        <Typography variant="h5" component="div" sx={{ float:'left', width:'100%', textAlign:'left' }}>
                <Link href={props.document.url} color="inherit">
                {title}
        </Link>
                  
        </Typography>
        <Typography variant="body2" sx={{ float:'left', width:'100%', textAlign:'left'  }}>
          {props.document.url}
        </Typography>
        <Typography variant="body2" sx={{ float:'left', width:'100%', textAlign:'left'  }}>
        {props.document.description}
        </Typography>
        <TagList tags={props.document.tagList} />
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onClickEdit}>edit</Button>
        <Button size="small" onClick={onClickDelete}>delete</Button>
      </CardActions>
    </Box>




      
      
    </Card>
  );

}

export default ContentCard;
