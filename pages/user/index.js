import {useState, useEffect} from "react"
import Navbar from "../../components/userNavbar";
import {Container, Grid} from '@material-ui/core'
import Header from "../../components/allconfabs/header"
import ConfabCard from "../../components/allconfabs/cards"
import firebase from '../../firebase-config';


export async function getStaticProps(context) {

  const db = firebase.database().ref('confabs');
  let confabs = await db.once('value').then(snapshot => snapshot.val());

  // confabs = confabs.json(); 

  return {
    props: {confabs:confabs}, // will be passed to the page component as props
  }
}



const AllConfabs = ({confabs}) => {


  const [searchValue, setSearchValue] = useState('');

  const allConfabs = confabs ? Object.values(confabs):[];

  const [filteredConfabs, setFilteredConfabs] = useState(allConfabs);

  useEffect(() => { 
   const filteredArray = allConfabs.filter(confab => searchValue.length > 0 ? confab.tags.includes(searchValue.toLowerCase()) : true);
  
   setFilteredConfabs( filteredArray );

  }, [searchValue]);

    return ( 
        <Container maxWidth="xl">
          <Navbar setSearchValue={setSearchValue} searchValue={searchValue}/>
          <Header />
        <Grid container spacing={3}>
          {filteredConfabs.map(confab => {
            const confabTags = Object.values(confab.tags);
            const confabLikes = confab.likes?Object.keys(confab.likes):[];
             return (
              <Grid key={confab.id} item lg={4} md={4} sm={12}>
              <ConfabCard id={confab.id} username={confab.postedBy} likedPeoplesCount={12} description = {confab.description} tags={confabTags} likes={confabLikes} likedPeopleCounts = {confabLikes.length}/>
              </Grid>
             )
          } )}
         
        </Grid>
        
        </Container>
     );
}
 

export default AllConfabs;