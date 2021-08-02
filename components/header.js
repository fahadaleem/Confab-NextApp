import React from "react";
import { Typography, makeStyles, Grid } from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "-75px",
    zIndex: "-10",
    [theme.breakpoints.down("md")]: {
      marginTop: "45px",
    },
  },
  mainHeading: {
    padding: "30px 25px",
    fontWeight: "600",
    fontSize: "4rem",
    fontFamily: "'Raleway', sans-serif",
  },
  thoughts: {
    color: "#185ADB",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        spacing={2}
        alignItems="center"
        className={classes.container}
      >
        <Grid item lg={6} xs={12}>
          <Typography variant="h3" className={classes.mainHeading}>
            A Place Where Peoples Share their{" "}
            <span className={classes.thoughts}>Thoughts!</span>
          </Typography>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Image
            src="/Conversation-pana.svg"
            width="100"
            height="100"
            layout="responsive"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
