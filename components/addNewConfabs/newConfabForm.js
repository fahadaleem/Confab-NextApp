import { useState } from "react";
import {
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  TextField,
  Typography,
  Box,
  makeStyles,
  OutlinedInput,
  Button,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import firebase from "../../firebase-config"
import { useUser } from "@clerk/clerk-react";

const useStyles = makeStyles((theme) => ({
  form: {
    margin: "20px 0",
    fontFamily: "raleway, sans-serif !important",
  },
  textBox: {
    fontFamily: "'Raleway', sans-serif",
    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#185ADB !important",
    },
  },
  labels: {
    fontFamily: "raleway, sans-serif !important",
    margin: "15px 0",
  },
  submitBtn: {
    margin: "10px 0",
    width: "200px",
    "& button": {
      backgroundColor: "#185ADB",
      color: "#EFEFEF",
      fontSize: "1.2rem",

      "&:hover": {
        backgroundColor: "#185AAF",
      },
    },

    float: "right",
  },
  tag: {
    backgroundColor: "#185ADB",
    borderRadius: "30px",
    margin: "5px 5px 5px 0",
    padding: "1px 15px",
  },
  tagName: {
    fontFamily: "raleway, sans-serif !important",
    color: "#EFEFEF",
    fontSize: "1rem",
  },
}));

const AddNewConfabForm = () => {
  const classes = useStyles();

  const [tags, setTags] = useState([]);
  const [confabDescription, setConfabDescription] = useState('');
  const {fullName} = useUser();

  const handleSubmit = (e)=>{
    e.preventDefault();
    const db = firebase.database().ref('confabs');

    const key = db.push().key;

    const obj = {
        postedBy:fullName, 
        id:key,
        description:confabDescription,
        postedDated:new Date().toISOString(),
        tags
    }

    db.child(key).set(obj);

  }

  const handleDeleteTags = (id) => {
    let tagsAfterDeletItem = tags.filter((elem, index) => {
      return id !== index;
    });
    setTags(tagsAfterDeletItem);
  };

  const handleAddTags = (event) => {
    if (event.which === 13) {
      setTags([...tags, event.target.value.toLowerCase()]);
      event.target.value = "";
    }
  };

  return (
    <Container maxWidth="md">
      <form className={classes.form} onSubmit={handleSubmit}>
        <FormControl fullWidth className={classes.confabTextBox}>
          <Typography variant="h5" color="initial" className={classes.labels}>
            Type Your Confab Here:
          </Typography>
          <OutlinedInput
            id="confab"
            multiline={true}
            variant="outlined"
            maxRows={15}
            rows={10}
            placeholder="Type Here"
            className={classes.textBox}
            onChange={e=>setConfabDescription(e.target.value)}
          />
        </FormControl>
        <Box mt={2} display="flex">
          {tags.map((tag, index) => {
            return (
              <Box
                key={index}
                display="flex"
                alignItems="center"
                className={classes.tag}
              >
                <Typography
                  variant="body1"
                  color="initial"
                  className={classes.tagName}
                >
                  #{tag}
                </Typography>
                <IconButton
                  style={{ margin: "0 0 0 5px", padding: "8px" }}
                  aria-label="delete-tag"
                  onClick={() => handleDeleteTags(index)}
                >
                  <CloseIcon style={{ fontSize: "1rem", color: "#EFEFEF" }} />
                </IconButton>
              </Box>
            );
          })}
        </Box>
        <FormControl fullWidth className={classes.confabTextBox}>
          <Typography variant="h5" color="initial" className={classes.labels}>
            Enter Tags:
          </Typography>
          <OutlinedInput
            id="confab"
            variant="outlined"
            placeholder="Type Here"
            className={classes.textBox}
            onKeyPress={handleAddTags}
          />
        </FormControl>
        <FormControl className={classes.submitBtn}>
          <Button variant="contained" color="default" type="submit">
            Submit
          </Button>
        </FormControl>
      </form>
    </Container>
  );
};

export default AddNewConfabForm;
