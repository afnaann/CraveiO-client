import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";




const MainContext = createContext()

export const ContextProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens')? JSON.parse(localStorage.getItem('authTokens')): null)
    const [user, setUser] = useState(()=> localStorage.getItem('authTokens')? jwtDecode(authTokens.access): null)

    const api = import.meta.env.VITE_PORT

    const logout = () => {
        localStorage.removeItem('authTokens')

    }
    return (
        <MainContext.Provider value={{
            logout,
            authTokens,
            user,
            setUser,
            setAuthTokens,
            api
        }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainContext