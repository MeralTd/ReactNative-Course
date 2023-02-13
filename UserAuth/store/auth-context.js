import { useContext, useState } from "react";

export const AuthContext = useContext({
    token: '',
    isAuthenticated: false,
    authenticate: (token) => {},
    logout: () => {} 
});

function AuthContextProvider({ chidren }){
    const [authToken, setAuthToken] = useState();

    function authenticate(token){
        setAuthToken(token);
    }

    function logout(){
        setAuthToken(null);
    }

    const value ={
        token: authToken,
        isAuthenticated : !!authToken,
        authenticate: authenticate,
        logout: logout
    }
    return <AuthContext.Provider value={value}>{chidren}</AuthContext.Provider>
}

export default AuthContextProvider;