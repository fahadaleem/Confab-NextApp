import {Container, Typography, makeStyles, Box, Button, Divider} from '@material-ui/core'

const useStyles = makeStyles(theme=>({
    mainHeading:{
      fontFamily: "'Raleway', sans-serif",
      fontWeight:"600",
      color:"#0A1931"
    },
    tagsDiv:{
        display:"flex",
        // backgroundColor:"#185ADB",
        alignItems:"center",
        flexWrap:"wrap",
        margin:"25px 0"
    },
    tags:{
        backgroundColor:"#185ADB",
        borderRadius:"30px",
        margin:"5px 5px",

    },
    tagsName:{
        fontFamily: "'Raleway', sans-serif", 
        fontWeight:"600",
        color:"#FFFFFF",
        fontSize:"0.9rem",
        padding:"2px 25px",
        textTransform:"lowercase"

    }
}))

 


const Header = () => {
    const classes = useStyles();

    // create array of 5 names
    const tags = ["John", "Jane", "Jack", "Jill", "technology trend", "John", "Jane", "Jack", "Jill", "technology trend", "John", "Jane", "Jack", "Jill", "technology trend"];

    return ( 
        <div>
            <Container maxWidth="xl">
              <Typography variant="h2" color="initial" align="center" className={classes.mainHeading}>Find All Confabs Here!</Typography>
                {/* <div className={classes.tagsDiv}>
                    {tags.map(tag => {
                       return (
                            <Box key={tag} className={classes.tags}>
                                <Button className={classes.tagsName}>#{tag}</Button>
                            </Box> )
            })}
                </div> */}
            <Divider style={{margin:"10px 0"}}/>
            </Container>
        </div>
     );
}
 
export default Header;