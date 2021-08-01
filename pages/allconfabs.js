import Navbar from "../components/userNavbar";
import {Container, Grid} from '@material-ui/core'
import Header from "../components/allconfabs/header"
import ConfabCard from "../components/allconfabs/cards"
import firebase from '../firebase-config';


export async function getStaticProps(context) {

  const db = firebase.database().ref('confabs');
  let confabs = await db.once('value').then(snapshot => snapshot.val());

  // confabs = confabs.json(); 

  return {
    props: {confabs:confabs}, // will be passed to the page component as props
  }
}



const AllConfabs = ({confabs}) => {
  // console.log(confabs,'fahad')
  console.log(Object.values(confabs), 'fahad');

  const allConfabs = Object.values(confabs);
    return ( 
        <Container maxWidth="xl">
          <Navbar />
          <Header />
        <Grid container spacing={3}>
          {allConfabs.map(confab => {
            const confabTags = Object.values(confab.tags);
            // const confabLiked = confab.liked;
             return (
              <Grid key={confab} item lg={4} md={4} sm={12}>
              <ConfabCard username={confab.postedBy} likedPeoplesCount={12} description = {confab.description} tags={confabTags}/>
              </Grid>
             )
          } )}
         
        </Grid>
        
        </Container>
     );
}
 

export default AllConfabs;