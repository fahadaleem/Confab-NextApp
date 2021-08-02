import Navbar from "../../components/userNavbar";
import Header from "../../components/myconfabs/header"
import {Container} from '@material-ui/core'

const MyConfabs = () => {
    return ( 
      <>
          <Navbar />
          <Header />

        <Container maxWidth="xl">
        </Container>
     </>
     );
}
 
export default MyConfabs;