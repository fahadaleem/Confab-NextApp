import React from "react"
import Navbar from "../../components/userNavbar";
import { UserProfile } from "@clerk/clerk-react";
import Container from '@material-ui/core/Container'

const Profile = () => {
    return ( 
        <Container maxWidth="xl">
          <Navbar />
          <UserProfile />
        </Container>
     );
}
 
export default Profile;