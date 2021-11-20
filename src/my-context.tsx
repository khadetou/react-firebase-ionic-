import React from "react";

//create context
export const Context = React.createContext<any>(undefined);


//create provider
export const AuthProvider: React.FC = ({ children }) => {
    const [authValue, setAuthValue] = React.useState<any>({
        isAuthenticated: false,
        user: null,
    });
    //login promise
    const login = ({ user, password }: { user: string, password: string }) => {
        return new Promise((resolve, reject) => {
            if (user === 'admin' && password === 'admin') {
                setAuthValue({
                    isAuthenticated: true,
                    user: { user: user, id: "admin-100" }
                });
                resolve(true);
            } else {
                reject();
            }
        });
    };

    //logout promise
    const logout = () => {
        return new Promise((resolve, reject) => {
            setAuthValue({
                isAuthenticated: false,
                user: null
            });
            resolve(true);
        });
    };

    let state = {
        authValue,
        login,
        logout
    }
    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    );
}

export default Context;