import {SignUp} from "@clerk/clerk-react"
import {makeStyles, Container} from "@material-ui/core"

const useStyles = makeStyles(theme=>({
    container:{
        backgroundColor:"#185ADB !important",
        display:"flex",
        justifyContent:"center",
        position:"absolute",
        height:"100%",
        flexDirection:"column"
    }
}))

const CreateAccount = () => {
    const classes = useStyles();
    return ( 
        <Container maxWidth="xl" className={classes.container}>
          <SignUp path="/signup" routing="path"/>
        </Container>
     );
}
 
export default CreateAccount;