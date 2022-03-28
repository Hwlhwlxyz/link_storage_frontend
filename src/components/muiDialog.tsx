import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Dispatch,
  forwardRef,
  Ref,
  SetStateAction,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

interface RefObject {
  handleClickOpen: () => void
}
const MuiDialog = forwardRef(
  (
    props: {  contentText: string, onCancel: () => void, onConfirm: () => void },
    ref: Ref<RefObject>
  ) => {
    const [open, setOpen] = useState(false);
    const [contentText, setContentText] = useState(props.contentText);


    

    useImperativeHandle(ref, () => ({
      handleClickOpen
    }));


    const handleClickOpen = () => {
      setOpen(true);
    };


    const handleClose = () => {
      setOpen(false);
      props.onCancel();
    };

    function handleSubmit(r: boolean){
      setOpen(false);
      if (r) {
        props.onConfirm();
      }
      else {
        props.onCancel();
      }
    }


    useEffect(() => {
      setContentText((prevState) => {
        return props.contentText;
      });
    }, [props.contentText]);

    return (
      <div>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Confirm"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {contentText}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>handleSubmit(false)}>Cancel</Button>
            <Button onClick={()=>handleSubmit(true)} autoFocus>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
);

export default MuiDialog;
