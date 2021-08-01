import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#185ADB",
    padding: "55px 30px",
  },
  mainHeading: {
    fontFamily: "raleway, sans-serif",
    fontSize: "5rem",
    fontWeight: "600",
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
      <Typography variant="h2" color="initial" className={classes.mainHeading}>
      Do you have anything that you want to share with people?
      </Typography>
      <Typography variant="h6" color="initial" className={classes.subHeading}>
        Write Your Confab Below!
      </Typography>
    </div>
  );
};

export default Header;
