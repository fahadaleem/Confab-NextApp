import Navbar from "../components/userNavbar";
import {Container} from '@material-ui/core'
import Header from "../components/addNewConfabs/header";
import AddNewConfabForm from "../components/addNewConfabs/newConfabForm";

const AddNewConfabs = () => {
    return ( 
      <>
          <Navbar />
          <Header />
          <AddNewConfabForm />
        </>
     );
}
 
export default AddNewConfabs;