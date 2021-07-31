import { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Menu,
  MenuItem,
} from "@material-ui/core";
import Link from "next/link"
import {ConfabContext} from "../Context/ConfabContext"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FFFFFF",
  },
  heading: {
    fontFamily: "'Raleway', sans-serif",
    fontWeight: "700",
    fontSize: "2rem",
    color: "#185ADB",
  },
  navMenu: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    "& li": {
      color: "#0A1931",
      fontWeight: "500",
      fontFamily: "'Raleway', sans-serif",
    },
  },
  loginBtn: {
    marginLeft: "auto !important",
    backgroundColor: "#185ADB",
    zIndex:"100000",
    borderRadius: "30px",
    padding: "10px 35px",
    color: "#EFEFEF!important",
    border: "2px solid #185ADB",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "#185ADB",
    },
    '& a':{
      textDecoration:"none",
    color: "#EFEFEF!important",
    }
  },
}));

const Navbar = () => {
 const classes = useStyles();
 const {isUserLogin} = useContext(ConfabContext);
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
          <MenuItem>Home</MenuItem>
          <MenuItem>All Confabs</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem className={classes.loginBtn}><Link href="/user">Write Your Confab!</Link></MenuItem>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
