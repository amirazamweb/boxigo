import { createContext, useContext, useState } from "react";

const MoveContext = createContext();

const MoveProvider = ({ children }) => {
    const [moveDetails, setMoveDetails] = useState({});

    return (
        <MoveContext.Provider value={[moveDetails, setMoveDetails]}>
            {children}
        </MoveContext.Provider>
    )
}

const useMove = () => useContext(MoveContext);

export { MoveProvider, useMove };