import {SignIn} from "@clerk/clerk-react"
import {makeStyles, Container} from "@material-ui/core"

const useStyles = makeStyles(theme=>({
    container:{
        backgroundColor:"#185ADB !important",
        padding:"25px 0"
    }
}))

const CreateAccount = () => {
    const classes = useStyles();
    return ( 
        <Container maxWidth="xl" className={classes.container}>
          <SignIn path="/signin" routing="path"/>
        </Container>
     );
}
 
export default CreateAccount;