import { createContext, useContext, useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
const VoteContext = createContext();

const VoteProvider = ({ children }) => {

  const [eleve, setEleve] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const eleveConnectee = JSON.parse(localStorage.getItem('login'));
    if (eleveConnectee) {
      setEleve(eleveConnectee);
    } else {
      history.push("/");
    }
  }, [history]);

  return (
    <VoteContext.Provider value={{ eleve, setEleve }}>
      {children}
    </VoteContext.Provider>
  )
}

export const VoteState = () => {
  return useContext(VoteContext);
}

export default VoteProvider;