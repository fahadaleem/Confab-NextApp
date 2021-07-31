import {useEffect, useContext} from "react"
import {useUser, UserButton} from "@clerk/clerk-react"
import { ConfabContext } from "../../Context/ConfabContext";

const User = () => {
    const user = useUser();
    const {handleSetGlobalState} = 
    useEffect(()=>{

    },[])

    return ( <UserButton /> );
}
 
export default User;