import Navbar from "../components/userNavbar";
import {Container, Grid} from '@material-ui/core'
import Header from "../components/allconfabs/header"
import ConfabCard from "../components/allconfabs/cards"

const AllConfabs = () => {
    return ( 
        <Container maxWidth="xl">
          <Navbar />
          <Header />
        <Grid container spacing={3}>
          <Grid item lg={4} md={4} sm={12}>
          <ConfabCard username="Muhammad Fahad Aleem" likedPeoplesCount={12} description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting" tags={['tech','programming','computer', 'IT']}/>
          </Grid>
          <Grid item lg={4} md={4} sm={12}>
          <ConfabCard username="Muhammad Fahad Aleem" likedPeoplesCount={5} description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting" tags={['politics','pakistan','world', 'un']}/>
          </Grid>
          <Grid item lg={4} md={4} sm={12}>
          <ConfabCard username="Muhammad Fahad" likedPeoplesCount={2} description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting" tags={['politics','pakistan','world', 'un']}/>
          </Grid>
        </Grid>
        
        </Container>
     );
}
 
export default AllConfabs;