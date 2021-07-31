import React, {useState, createContext} from "react"

export const ConfabContext = createContext()


const ConfabContextProvider = ({children}) => {
    const [globalState, setGlobalState] = useState({
        isUserLogin:false
    })
    return ( 
        <ConfabContext.Provider value={{isUserLogin:globalState.isUserLogin, handleSetGlobalState:setGlobalState}}>
            {children}
        </ConfabContext.Provider>
     );
}
 
export default ConfabContextProvider;