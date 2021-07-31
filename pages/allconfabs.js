import Navbar from "../components/userNavbar";
import {Container} from '@material-ui/core'
import Header from "../components/allconfabs/header"

const AllConfabs = () => {
    return ( 
        <Container maxWidth="xl">
          <Navbar />
          <Header />
        </Container>
     );
}
 
export default AllConfabs;