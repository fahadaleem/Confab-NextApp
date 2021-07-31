import {useEffect, useContext} from "react"
import {useUser, UserButton} from "@clerk/clerk-react"
import { ConfabContext } from "../../context/confabContext";
import Navbar from "../../components/userNavbar"

const User = () => {
    const user = useUser();
    const {handleSetGlobalState, globalState} = useContext(ConfabContext);
    useEffect(()=>{
        handleSetGlobalState({
            ...globalState,
            isUserLogin:true
        })
    },[])

    return (
        <Navbar />
     );
}
 
export default User;