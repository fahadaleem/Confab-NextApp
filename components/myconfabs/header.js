import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#185ADB",
    padding: "115px 30px",
  },
  mainHeading: {
    fontFamily: "raleway, sans-serif",
    fontSize: "5rem",
    fontWeight: "500",
    color: "#EFEFEF",
  },
  subHeading: {
    fontFamily: "'Great Vibes', cursive",

    fontSize: "3rem",
    color: "#EFEFEF",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Typography variant="h2" color="initial" align="center" className={classes.mainHeading}>
        My Confabs!
      </Typography>
    </div>
  );
};

export default Header;
