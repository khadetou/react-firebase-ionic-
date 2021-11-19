import React from "react";

//create context
export const Context = React.createContext<any>(undefined);


//create provider
export const TheProvider: React.FC = ({ children }) => {
    const [sharedValue, setSharedValue] = React.useState({
        value: "initial",
        changedBy: "Admin"
    });
    let state = {
        sharedValue,
        setSharedValue
    }
    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    );
}

export default Context;