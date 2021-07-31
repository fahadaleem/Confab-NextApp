import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Menu,
  MenuItem,
} from "@material-ui/core";

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
    borderRadius: "30px",
    padding: "10px 35px",
    color: "#EFEFEF!important",
    border: "2px solid #185ADB",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "#EFEFEF",
      color: "#185ADB !important",
      borderColor: "#185ADB !important",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar
      className={classes.root}
      position="fixed"
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
          <MenuItem className={classes.loginBtn}>Write Your Confab!</MenuItem>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
