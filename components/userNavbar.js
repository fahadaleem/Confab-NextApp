import { useContext, useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Menu,
  MenuItem,
  TextField,
  OutlinedInput,
  IconButton,
} from "@material-ui/core";
import Link from "next/link";
import { UserButton } from "@clerk/clerk-react";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FFFFFF",
    padding: "15px 0",
  },
  heading: {
    // fontFamily: "'Raleway', sans-serif",
    fontFamily: "'Great Vibes', cursive",
    fontWeight: "700",
    fontSize: "2rem",
    color: "#185ADB",
  },
  navMenu: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: "10px",
    width: "100%",
    "& li": {
      color: "#0A1931",
      fontWeight: "500",
      fontFamily: "'Raleway', sans-serif",
    },
  },
  loginBtn: {
    marginLeft: "auto !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchBox: {
    borderRadius: "30px",
    fontFamily: "'Raleway', sans-serif",
    margin: "10px 0",
    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#185ADB !important",
    },
  },
  searchDiv: {
    height: "100px",
    width: "350px",
    padding: "10px 20px",
    top: "70px !important",
    left: "900px !important",
    height: "150px",
  },
  searchBoxHeading: {
    fontFamily: "'Raleway', sans-serif",
    fontWeight: "600",
  },
}));

function SearchBox(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [text, setText] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.target);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <div>
      <IconButton
        aria-label="menu-btn"
        onClick={handleClick}
        style={{ marginRight: "10px" }}
      >
        <SearchIcon style={{ fontSize: "2rem" }} />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          className: classes.searchDiv,
        }}
      >
        <Typography
          variant="h5"
          align="center"
          color="initial"
          className={classes.searchBoxHeading}
        >
          Search Your Topics!
        </Typography>
        <OutlinedInput
          id="search"
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
          fullWidth
          placeholder="Search Here"
          className={classes.searchBox}
          onKeyPress={(e) => {
            console.log(e.key, "check");
            if (e.key === "Enter") {
              props.setSearchValue(text);
            }
          }}
        />
      </Menu>
    </div>
  );
}

const Navbar = (props) => {
  const classes = useStyles();

  return (
    <AppBar
      className={classes.root}
      position="static"
      color="primary"
      elevation={0}
    >
      <Toolbar>
        <Typography variant="h6" className={classes.heading}>
          Confab
        </Typography>
        <ul className={classes.navMenu}>
          <Link href="/user">
            <MenuItem>All Confabs</MenuItem>
          </Link>
          <Link href="/user/myconfabs">
            <MenuItem>My Confabs</MenuItem>
          </Link>
          <Link href="/user/addnewconfabs">
            <MenuItem>Add New Confabs</MenuItem>
          </Link>

          <div className={classes.loginBtn}>
            <SearchBox
              searchValue={props.searchValue}
              setSearchValue={props.setSearchValue}
            />

            <UserButton />
          </div>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
