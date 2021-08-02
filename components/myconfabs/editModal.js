import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  MenuItem,
  makeStyles,
  Box,
  Typography,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import AddNewConfabForm from "../addNewConfabs/newConfabForm";

const useStyles = makeStyles((theme) => ({
  editModal: {
    width: "460px",
  },
  tagsDiv: {
    display: "flex",
    // backgroundColor:"#185ADB",
    alignItems: "center",
    flexWrap: "wrap",
  },
  tag: {
    backgroundColor: "#0A1931",
    borderRadius: "30px",
    margin: "5px 5px 5px 0",
  },
  tagName: {
    fontFamily: "'Raleway', sans-serif",
    fontWeight: "600",
    color: "#FFFFFF",
    fontSize: "0.9rem",
    padding: "2px 15px",
    textTransform: "lowercase",
  },
  dialogTitle: {
    "& h2": {
      fontFamily: "Raleway, sans-serif !important",
      fontSize: "2rem",
    },
  },
}));

export default function EditModal(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  const [tags, setTags] = useState(props.tags);

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Edit
      </Button> */}
      <MenuItem onClick={handleClickOpen}>Edit</MenuItem>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ className: classes.editModal }}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>
          Edit Your Confab
        </DialogTitle>
        <AddNewConfabForm
          handleClose={handleClose}
          handleFetchUpdatedConfabs={props.handleFetchUpdatedConfabs}
          confabId={props.confabId}
          tags={props.tags}
          description={props.description}
          editable={true}
        />
      </Dialog>
    </div>
  );
}
