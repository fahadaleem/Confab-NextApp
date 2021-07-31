import { SignIn } from "@clerk/clerk-react";
import { makeStyles, Container } from "@material-ui/core";
import Navbar from "../../components/navbar";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#185ADB !important",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: "25px 0",
  },
}));

const CreateAccount = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Container maxWidth="xl" className={classes.container}>
        <SignIn path="/signin" routing="path" />
      </Container>
    </div>
  );
};

export default CreateAccount;
