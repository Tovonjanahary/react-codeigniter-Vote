import { createContext, useContext, useState, useEffect } from "react";

const VoteContext = createContext();

const VoteProvider = ({children}) => {

    const [eleve, setEleve] = useState(false);
    
    useEffect(() => {
        const eleveConnectee = JSON.parse(localStorage.getItem('premierLogin'));
        if(eleveConnectee){
            setEleve(eleveConnectee.data);
        }
    },[]);

    return (
        <VoteContext.Provider value={{eleve, setEleve}}>
            {children}
        </VoteContext.Provider>
    )
}

export const VoteState = () => {
    return useContext(VoteContext);
}

export default VoteProvider;