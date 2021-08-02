import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  makeStyles,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Avatar,
} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import firebase from "../../firebase-config";
import { useUser } from "@clerk/clerk-react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EditModal from "../myconfabs/editModal";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px 25px",
    margin: "10px 0",
  },
  tagsDiv: {
    display: "flex",
    // backgroundColor:"#185ADB",
    alignItems: "center",
    flexWrap: "wrap",
  },
  tags: {
    backgroundColor: "#0A1931",
    borderRadius: "30px",
    margin: "5px 5px 5px 0",
  },
  tagsName: {
    fontFamily: "'Raleway', sans-serif",
    fontWeight: "600",
    color: "#FFFFFF",
    fontSize: "0.9rem",
    padding: "2px 15px",
    textTransform: "lowercase",
  },
  postedBy: {
    margin: "0 10px",
    fontFamily: "'Raleway', sans-serif",
    fontWeight: "600",
  },
  avatar: {
    backgroundColor: "#185ADB",
    fontFamily: "'Raleway', sans-serif",
    fontWeight: "600",
  },
  likeBtn: {},
  description: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: "1.2rem",
  },
  readMoreToggleBtn: {
    fontFamily: "'Raleway', sans-serif",
    textTransform: "lowercase",
    fontSize: "1.2rem",
    color: "#185ADB",
    cursor: "pointer",
  },
  likedPeoplesCount: {
    fontFamily: "'Raleway', sans-serif",
    // fontSize:"0.8rem"
  },
  menu: {
    // padding:"10px 15px"
    width: "100px",
  },
}));

function EditableMenu(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // // creates a function to delete confab cards
  // const handleDeleteConfab = ()=>{
  //   const db = firebase.database().ref(`/confabs/${props.confabId}`).remove();
  // }

  return (
    <div>
      <IconButton aria-label="menu" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          className: classes.menu,
        }}
      >
        <MenuItem
          onClick={() => {
            props.handleDeleteConfab(props.confabId);
          }}
        >
          Delete
        </MenuItem>
        <EditModal
          handleFetchUpdatedConfabs={props.handleFetchUpdatedConfabs}
          confabId={props.confabId}
          tags={props.tags}
          description={props.description}
        />
      </Menu>
    </div>
  );
}

const ConfabCard = (props) => {
  const classes = useStyles();

  const {
    description,
    tags,
    username,
    confabId,
    likes,
    editable,
    handleDeleteConfab,
    handleFetchUpdatedConfabs,
  } = props;
  console.log(confabId, "this");
  const { id: userId } = useUser();

  const [showFullDescription, setShowFullDescription] = useState(false);

  // creates a state variable to keep track of the number of people who have liked this card
  const [likedPeoplesCount, setLikedPeoplesCount] = useState(
    props.likedPeopleCounts
  );

  // creates a state variable to store like/dislike button state
  const [likeState, setLikeState] = useState(likes && likes.includes(userId));

  // creates a function to increment the number of people who have liked this card
  const incrementLikedPeoplesCount = () => {
    setLikedPeoplesCount(likedPeoplesCount + 1);
    const db = firebase.database().ref(`confabs/${confabId}/likes`);
    db.child(userId).set("liked");
  };
  // creates a function to decrement the number of people who have liked this card
  const decrementLikedPeoplesCount = () => {
    setLikedPeoplesCount(likedPeoplesCount - 1);
    const db = firebase.database().ref(`confabs/${confabId}/likes`);
    db.child(userId).remove();
  };

  // creates a function to toggle read more button
  const toggleReadMore = () => {
    setShowFullDescription(!showFullDescription);
  };

  // creates a function to toggle like/dislike button
  const toggleLike = () => {
    setLikeState(!likeState);

    if (likeState) {
      decrementLikedPeoplesCount();
    } else {
      incrementLikedPeoplesCount();
    }
  };

  return (
    <Box component={Paper} className={classes.root} elevation={4}>
      <Box
        className={classes.cardTop}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box display="flex" alignItems="center">
          <Avatar className={classes.avatar}>{username[0]}</Avatar>
          <Typography variant="h6" color="inherit" className={classes.postedBy}>
            {username}
          </Typography>
        </Box>
        <Box>
          {editable && (
            <EditableMenu
              confabId={confabId}
              handleDeleteConfab={handleDeleteConfab}
              description={description}
              tags={tags}
              handleFetchUpdatedConfabs={handleFetchUpdatedConfabs}
            />
          )}
        </Box>
      </Box>
      <Box className={classes.cardBody} mt={2}>
        <Typography
          variant="body2"
          color="initial"
          className={classes.description}
        >
          {showFullDescription ? description : `${description.slice(0, 250)}`}
          {description.length > 250 && (
            <a className={classes.readMoreToggleBtn} onClick={toggleReadMore}>
              {showFullDescription ? " Read Less " : "...Read More"}
            </a>
          )}
        </Typography>
        <Box className={classes.tagsDiv}>
          {tags.map((tag) => {
            return (
              <Box key={tag} className={classes.tags}>
                <Typography variant="body1" className={classes.tagsName}>
                  #{tag}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box className={classes.cardFooter}>
        <IconButton
          aria-label="Favorite"
          className={classes.likeBtn}
          onClick={toggleLike}
        >
          {likeState ? (
            <FavoriteIcon style={{ color: "#FF4848" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
        <span className={classes.likedPeoplesCount}>{likedPeoplesCount}</span>

        {/* <Typography variant="body2" color="initial" className={classes.likedPeoplesCount}>15</Typography> */}
      </Box>
    </Box>
  );
};

export default ConfabCard;
